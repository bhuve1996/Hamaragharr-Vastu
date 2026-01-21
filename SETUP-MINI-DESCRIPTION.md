# Setting Up Product Mini Description in Shopify Admin

This guide will help you add a "Mini Description" field directly in your Shopify product admin, so you can easily add short descriptions for each product.

## Option 1: Create Metafield via Shopify Admin (Recommended)

1. **Go to Shopify Admin**
   - Navigate to: **Settings** → **Custom data** → **Products**

2. **Add New Metafield Definition**
   - Click **"Add definition"**
   - Fill in the following:
     - **Name**: `Mini Description`
     - **Namespace and key**: `custom.mini_description` (this is important - it must match exactly)
     - **Type**: Select **"Single line text"**
     - **Description**: "Short description for product pages (30-100 words recommended)"

3. **Save the Definition**
   - Click **"Save"**
   - The field will now appear in all product edit pages

4. **Add Mini Descriptions to Products**
   - Go to any product in **Products** → Select a product
   - Scroll down to find the **"Mini Description"** field
   - Enter your short description
   - Save the product

## Option 2: Use Theme Editor (Alternative)

If you prefer not to set up metafields, you can use the theme editor:

1. Go to **Online Store** → **Themes** → **Customize**
2. Navigate to a product page
3. Click on the **Description** block
4. Under **"Mini Description Settings"**, you can:
   - Enable mini description
   - Enter a custom mini description (this applies to all products using this template)
   - Or it will auto-generate from the full description

## How It Works

The theme uses mini descriptions in this priority order:

1. **Custom Mini Description** (entered in theme editor description block settings)
2. **Product Metafield** (`custom.mini_description`) - **This is what you're setting up**
3. **Auto-generated** from the full product description (if enabled)

## Benefits

- ✅ Appears directly in product admin
- ✅ Easy to manage per product
- ✅ Works with the theme's mini description feature
- ✅ Can be used for SEO and product cards

## Troubleshooting

**Q: I don't see the field after creating the metafield definition**
- Make sure the namespace and key is exactly: `custom.mini_description`
- Refresh your browser
- Check that you're editing a product (not a collection or page)

**Q: The mini description isn't showing on the product page**
- Check that "Enable Mini Description" is turned on in the theme editor
- Verify the metafield value is saved (not empty)
- Clear your browser cache

**Q: Can I use this for multiple products at once?**
- Yes! You can bulk edit products in Shopify admin:
  - Go to **Products** → Select multiple products → **Edit products**
  - The Mini Description field will be available for bulk editing
