# Product Fields Setup Guide

This guide helps you set up two important features for your products:
1. **Mini Description** - Short descriptions that appear in product cards and product pages
2. **Accordion Sections** - Collapsible sections in product descriptions

## Quick Links

- [Setup Mini Description](./SETUP-MINI-DESCRIPTION.md) - Add mini description field to Shopify admin
- [Accordion Formatting Guide](./ACCORDION-FORMATTING-GUIDE.md) - How to format accordions in rich text editor

## Issue 1: Product Mini Description Not Visible in Shopify Admin

### Problem
You can't see the "Mini Description" option when adding/editing products in Shopify admin.

### Solution
The mini description field needs to be set up as a **metafield** in Shopify. Follow the detailed guide:
👉 **[SETUP-MINI-DESCRIPTION.md](./SETUP-MINI-DESCRIPTION.md)**

**Quick Steps:**
1. Go to **Settings** → **Custom data** → **Products**
2. Click **"Add definition"**
3. Set:
   - **Name**: `Mini Description`
   - **Namespace and key**: `custom.mini_description`
   - **Type**: Single line text
4. Save - the field will now appear in all product pages

## Issue 2: Accordion Section Not Visible in Rich Text Editor

### Problem
You can't see an accordion option in the rich text editor when editing product descriptions.

### Solution
Accordions are created automatically from your formatted content - there's no separate "accordion" button. The theme converts headings and bold text into accordions.

Follow the detailed guide:
👉 **[ACCORDION-FORMATTING-GUIDE.md](./ACCORDION-FORMATTING-GUIDE.md)**

**Quick Methods:**

### Method 1: Use Headings (Easiest)
In the product description rich text editor:
1. Type your section title
2. Select it and choose **Heading 2**, **Heading 3**, or **Heading 4** from the format dropdown
3. Add your content below
4. Repeat for each section

**Example:**
```
Heading 2: Benefits
Your benefits content here...

Heading 2: How to Use
Your usage instructions here...
```

### Method 2: Use Bold Text
1. Type your section title
2. Make it **bold**
3. Put it at the start of a paragraph
4. Add content below

**Example:**
```
**Benefits**
Your benefits content here...

**How to Use**
Your usage instructions here...
```

## How It Works

### Mini Description Priority
The theme uses mini descriptions in this order:
1. **Custom Mini Description** (from theme editor)
2. **Product Metafield** (`custom.mini_description`) ← Set this up!
3. **Auto-generated** from full description

### Accordion Conversion
The theme automatically converts:
- **H2, H3, H4 headings** → Accordion items
- **Bold text** (at paragraph start) → Accordion items
- **Strong tags** → Accordion items

## Testing

After setting up:

1. **Test Mini Description:**
   - Go to a product in Shopify admin
   - You should see "Mini Description" field
   - Add a short description (30-100 words)
   - Save and check the product page

2. **Test Accordions:**
   - Edit a product description
   - Add headings (H2, H3, or H4) or bold text
   - Save and view the product page
   - You should see collapsible accordion sections

## Troubleshooting

### Mini Description Issues
- **Field not showing?** Make sure the metafield namespace/key is exactly `custom.mini_description`
- **Not appearing on page?** Check that "Enable Mini Description" is turned on in theme editor

### Accordion Issues
- **Not converting?** Make sure you're using H2, H3, or H4 (not H1 or H5+)
- **Bold text not working?** Ensure it's at the start of a paragraph and 10-150 characters
- **Content missing?** Verify the "Product Information Tabs" section is added to your product template

## Need More Help?

- See [SETUP-MINI-DESCRIPTION.md](./SETUP-MINI-DESCRIPTION.md) for detailed mini description setup
- See [ACCORDION-FORMATTING-GUIDE.md](./ACCORDION-FORMATTING-GUIDE.md) for accordion formatting examples
