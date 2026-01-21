#!/bin/bash
# Quick setup script for mini description generator

echo "🔧 Setting up environment for Mini Description Generator..."
echo ""

# Check if .env exists
if [ -f .env ]; then
  echo "✅ .env file already exists"
  echo ""
  read -p "Do you want to update it? (y/n) " -n 1 -r
  echo ""
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Keeping existing .env file"
    exit 0
  fi
fi

echo "Please provide the following information:"
echo ""

# Get Shopify Store URL
read -p "Shopify Store URL (e.g., aa4383-53.myshopify.com): " SHOPIFY_STORE
SHOPIFY_STORE=${SHOPIFY_STORE:-aa4383-53.myshopify.com}

# Get Shopify Access Token
echo ""
echo "To get your Shopify Admin API token:"
echo "1. Go to: https://$SHOPIFY_STORE/admin/settings/apps"
echo "2. Click 'Develop apps' → 'Create an app'"
echo "3. Enable scopes: read_products, write_products"
echo "4. Install app and copy the Admin API access token"
echo ""
read -p "Shopify Admin API Access Token: " SHOPIFY_TOKEN

# Get OpenAI API Key (optional)
echo ""
read -p "OpenAI API Key (optional, press Enter to skip): " OPENAI_KEY

# Create .env file
cat > .env << EOF
# Shopify API Credentials
SHOPIFY_STORE_URL=$SHOPIFY_STORE
SHOPIFY_ACCESS_TOKEN=$SHOPIFY_TOKEN

# OpenAI API Key (Optional - for AI generation)
OPENAI_API_KEY=$OPENAI_KEY
EOF

echo ""
echo "✅ .env file created successfully!"
echo ""
echo "You can now run: npm run generate:mini-descriptions"
