#!/usr/bin/env node
/**
 * Build script to combine and minify CSS files
 * Combines all custom Vastu CSS files into vastu-combined.css and minifies it
 */

const fs = require('fs');
const path = require('path');

// List of CSS files to combine (in order)
const cssFiles = [
  'vastu-base.css',
  'vastu-headings.css',
  'vastu-cards.css',
  'vastu-collection-cards.css',
  'vastu-product-card.css',
  'vastu-product-card-fixes.css',
  'vastu-popup-newsletter.css',
  'vastu-product-page.css',
  'vastu-shipping-link.css',
  'vastu-buttons-hover.css',
  'button-hover-effects.css',
  'button-fixes.css',
  'newsletter-button-mobile.css',
  'price-tag-styles.css',
  'vastu-sections-spacing.css',
  'section-spacing.css',
  'vastu-global-spacing.css',
  'homepage-headings.css',
  'vastu-why-kit.css',
  'vastu-product-showcase.css',
  'vastu-hindi-statement.css',
  'vastu-footer.css',
  'vastu-carousel.css',
  'vastu-grid-carousel.css',
  'vastu-topbar-promotion.css',
  'vastu-banner-hero.css',
  'vastu-banner-hero-extended.css',
  'vastu-trust-bar.css',
  'vastu-testimonials.css',
  'vastu-shop-by-concern.css',
  'vastu-help-address.css',
  'vastu-blog.css',
  'vastu-faq.css',
  'vastu-responsive.css',
  'vastu-global-typography.css',
  'vastu-card-image-radius.css'
];

const assetsDir = path.join(__dirname, '..', 'assets');
const outputFile = path.join(assetsDir, 'vastu-combined.css');
const outputMinFile = path.join(assetsDir, 'vastu-combined.min.css');

console.log('🔨 Building CSS files...\n');

// Combine CSS files
let combinedCSS = '';
let totalSize = 0;

cssFiles.forEach((file, index) => {
  const filePath = path.join(assetsDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Warning: ${file} not found, skipping...`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const size = Buffer.byteLength(content, 'utf8');
  totalSize += size;
  
  // Add separator comment
  combinedCSS += `\n/* ========================================\n   ${file} (${(size / 1024).toFixed(1)} KB)\n   ======================================== */\n\n`;
  combinedCSS += content;
  combinedCSS += '\n\n';
  
  console.log(`✓ Added ${file} (${(size / 1024).toFixed(1)} KB)`);
});

// Write combined file
fs.writeFileSync(outputFile, combinedCSS, 'utf8');
const combinedSize = Buffer.byteLength(combinedCSS, 'utf8');

console.log(`\n📦 Combined CSS: ${(combinedSize / 1024).toFixed(1)} KB`);
console.log(`   Total source files: ${totalSize / 1024} KB`);

// Minify CSS (simple minification - remove comments and whitespace)
function minifyCSS(css) {
  return css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    // Remove whitespace around specific characters
    .replace(/\s*([{}:;,])\s*/g, '$1')
    // Remove leading/trailing whitespace
    .replace(/^\s+|\s+$/g, '')
    // Remove semicolon before closing brace
    .replace(/;}/g, '}')
    // Remove empty rules
    .replace(/[^{}]+{\s*}/g, '')
    // Trim
    .trim();
}

// Minify and write
const minifiedCSS = minifyCSS(combinedCSS);
fs.writeFileSync(outputMinFile, minifiedCSS, 'utf8');
const minifiedSize = Buffer.byteLength(minifiedCSS, 'utf8');

const savings = ((combinedSize - minifiedSize) / combinedSize * 100).toFixed(1);

console.log(`\n✨ Minified CSS: ${(minifiedSize / 1024).toFixed(1)} KB`);
console.log(`   Size reduction: ${savings}%`);
console.log(`\n✅ Build complete!`);
console.log(`   Output: vastu-combined.css (${(combinedSize / 1024).toFixed(1)} KB)`);
console.log(`   Minified: vastu-combined.min.css (${(minifiedSize / 1024).toFixed(1)} KB)`);
