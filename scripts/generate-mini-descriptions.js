#!/usr/bin/env node
/**
 * Generate AI-powered mini descriptions for all products
 * 
 * This script:
 * 1. Fetches all products from Shopify
 * 2. Generates concise mini descriptions using AI
 * 3. Saves them to product metafields (custom.mini_description)
 * 
 * Usage:
 *   node scripts/generate-mini-descriptions.js [--force]
 * 
 * Options:
 *   --force    Regenerate mini descriptions even if they already exist
 * 
 * Required environment variables:
 *   SHOPIFY_STORE_URL - Your Shopify store URL (e.g., aa4383-53.myshopify.com)
 *   SHOPIFY_ACCESS_TOKEN - Admin API access token
 *   OPENAI_API_KEY - OpenAI API key (optional, will use smart extraction if not provided)
 */

// Load environment variables (dotenv is optional)
try {
  require('dotenv').config();
} catch (e) {
  // dotenv not installed, will use environment variables directly
  console.log('ℹ️  dotenv not found, using environment variables directly\n');
}
const https = require('https');

// Parse command line arguments
const FORCE_REGENERATE = process.argv.includes('--force');

// Configuration
const SHOPIFY_STORE = process.env.SHOPIFY_STORE_URL || 'aa4383-53.myshopify.com';
const SHOPIFY_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!SHOPIFY_TOKEN) {
  console.error('❌ Error: SHOPIFY_ACCESS_TOKEN environment variable is required');
  console.error('   Create a .env file with: SHOPIFY_ACCESS_TOKEN=your_token');
  process.exit(1);
}

// Helper function to make HTTP requests
function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ data: parsed, headers: res.headers, statusCode: res.statusCode });
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${JSON.stringify(parsed)}`));
          }
        } catch (e) {
          reject(new Error(`Parse error: ${body}`));
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

// Fetch all products from Shopify
async function fetchAllProducts() {
  console.log('📦 Fetching all products from Shopify...\n');
  const products = [];
  let hasNextPage = true;
  let cursor = null;

  while (hasNextPage) {
    const query = cursor 
      ? `?limit=250&after=${cursor}`
      : '?limit=250';
    
    const options = {
      hostname: SHOPIFY_STORE,
      path: `/admin/api/2024-01/products.json${query}`,
      method: 'GET',
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_TOKEN,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await makeRequest(options);
      products.push(...response.data.products);
      
      // Check for pagination using Link header
      const linkHeader = response.headers['link'] || response.headers['Link'] || '';
      if (linkHeader) {
        const nextMatch = linkHeader.match(/<[^>]+rel="next"[^>]*>/);
        if (nextMatch) {
          const urlMatch = nextMatch[0].match(/after=([^&>"]+)/);
          cursor = urlMatch ? decodeURIComponent(urlMatch[1]) : null;
          hasNextPage = !!cursor;
        } else {
          hasNextPage = false;
        }
      } else {
        // If no Link header, check if we got less than 250 products (last page)
        hasNextPage = response.data.products.length === 250;
      }
      
      console.log(`   Fetched ${products.length} products...`);
    } catch (error) {
      console.error('❌ Error fetching products:', error.message);
      throw error;
    }
  }

  console.log(`\n✅ Total products found: ${products.length}\n`);
  return products;
}

// Generate mini description using AI (OpenAI)
async function generateMiniDescriptionWithAI(fullDescription, productTitle) {
  if (!OPENAI_API_KEY) {
    return null; // Will fall back to smart extraction
  }

  const prompt = `Create a concise, engaging mini description (30-60 words) for this Vastu product. 
Focus on key benefits and what makes it special. Keep it natural and compelling.

Product: ${productTitle}
Full Description: ${fullDescription.substring(0, 2000)}

Mini Description:`;

  const options = {
    hostname: 'api.openai.com',
    path: '/v1/chat/completions',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a copywriter specializing in Vastu Shastra products. Create concise, compelling product descriptions.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 150,
    temperature: 0.7,
  };

  try {
    const response = await makeRequest(options, data);
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.warn(`   ⚠️  AI generation failed: ${error.message}`);
    return null;
  }
}

// Smart extraction fallback (when AI is not available)
function smartExtractMiniDescription(fullDescription) {
  if (!fullDescription || fullDescription.trim() === '') {
    return '';
  }

  // Remove HTML tags
  const plainText = fullDescription.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  // Try to get first sentence (up to 100 words)
  const sentences = plainText.match(/[^.!?]+[.!?]+/g);
  if (sentences && sentences.length > 0) {
    const firstSentence = sentences[0].trim();
    if (firstSentence.split(/\s+/).length <= 60) {
      return firstSentence;
    }
  }

  // Fallback: first 50 words
  const words = plainText.split(/\s+/);
  if (words.length <= 50) {
    return plainText;
  }

  // Get first 50 words and ensure it ends properly
  let mini = words.slice(0, 50).join(' ');
  // Remove trailing incomplete words or add ellipsis if cut mid-sentence
  if (words.length > 50) {
    mini = mini.replace(/[^.!?]$/, '...');
  }

  return mini;
}

// Update product metafield
async function updateProductMetafield(productId, miniDescription) {
  // First, check if metafield exists
  const getOptions = {
    hostname: SHOPIFY_STORE,
    path: `/admin/api/2024-01/products/${productId}/metafields.json?namespace=custom&key=mini_description`,
    method: 'GET',
    headers: {
      'X-Shopify-Access-Token': SHOPIFY_TOKEN,
      'Content-Type': 'application/json',
    },
  };

  let metafieldId = null;
  try {
    const response = await makeRequest(getOptions);
    if (response.data.metafields && response.data.metafields.length > 0) {
      metafieldId = response.data.metafields[0].id;
    }
  } catch (error) {
    // Metafield doesn't exist yet, will create it
  }

  const data = {
    metafield: {
      namespace: 'custom',
      key: 'mini_description',
      value: miniDescription,
      type: 'single_line_text_field',
    },
  };

  const options = {
    hostname: SHOPIFY_STORE,
    path: metafieldId
      ? `/admin/api/2024-01/metafields/${metafieldId}.json`
      : `/admin/api/2024-01/products/${productId}/metafields.json`,
    method: metafieldId ? 'PUT' : 'POST',
    headers: {
      'X-Shopify-Access-Token': SHOPIFY_TOKEN,
      'Content-Type': 'application/json',
    },
  };

  try {
    await makeRequest(options, data);
    return true;
  } catch (error) {
    console.error(`   ❌ Failed to update metafield: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  console.log('🚀 Starting mini description generation...');
  if (FORCE_REGENERATE) {
    console.log('   ⚠️  Force mode: Will regenerate existing mini descriptions\n');
  } else {
    console.log('   ℹ️  Will skip products that already have mini descriptions\n');
  }

  try {
    // Fetch all products
    const products = await fetchAllProducts();

    if (products.length === 0) {
      console.log('ℹ️  No products found. Exiting.');
      return;
    }

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    // Process each product
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      console.log(`\n[${i + 1}/${products.length}] Processing: ${product.title}`);

      // Skip if no description
      if (!product.description || product.description.trim() === '') {
        console.log('   ⏭️  Skipped: No description available');
        skipCount++;
        continue;
      }

      // Check if metafield already exists (unless --force flag is used)
      if (!FORCE_REGENERATE) {
        // Fetch metafields for this product
        const getMetafieldOptions = {
          hostname: SHOPIFY_STORE,
          path: `/admin/api/2024-01/products/${product.id}/metafields.json?namespace=custom&key=mini_description`,
          method: 'GET',
          headers: {
            'X-Shopify-Access-Token': SHOPIFY_TOKEN,
            'Content-Type': 'application/json',
          },
        };

        try {
          const metafieldResponse = await makeRequest(getMetafieldOptions);
          if (metafieldResponse.data.metafields && metafieldResponse.data.metafields.length > 0) {
            const existingMini = metafieldResponse.data.metafields[0];
            if (existingMini.value && existingMini.value.trim() !== '') {
              console.log('   ℹ️  Mini description already exists, skipping...');
              skipCount++;
              continue;
            }
          }
        } catch (error) {
          // Metafield doesn't exist, continue
        }
      } else {
        console.log('   🔄 Force mode: Regenerating...');
      }

      // Generate mini description
      let miniDescription = null;

      // Try AI first if available
      if (OPENAI_API_KEY) {
        console.log('   🤖 Generating with AI...');
        miniDescription = await generateMiniDescriptionWithAI(product.description, product.title);
        
        // Add small delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Fallback to smart extraction
      if (!miniDescription) {
        console.log('   ✂️  Using smart extraction...');
        miniDescription = smartExtractMiniDescription(product.description);
      }

      if (!miniDescription || miniDescription.trim() === '') {
        console.log('   ⚠️  Could not generate mini description');
        errorCount++;
        continue;
      }

      // Update metafield
      console.log(`   💾 Saving mini description (${miniDescription.length} chars)...`);
      const success = await updateProductMetafield(product.id, miniDescription);

      if (success) {
        console.log('   ✅ Success!');
        successCount++;
      } else {
        errorCount++;
      }
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 Summary:');
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ⏭️  Skipped: ${skipCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log(`   📦 Total: ${products.length}`);
    console.log('='.repeat(50) + '\n');

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
