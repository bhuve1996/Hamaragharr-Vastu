# App Block "widget-box" Error - Diagnostic Guide

## Current Status
✅ Theme code is correct - all app blocks have `widget-box` wrapper divs
❌ App block schema is likely broken (app developer issue)

## Product Page Specific Issue

If you're trying to add an app block on a **product page**, the app's schema must include:

```json
{
  "name": "Widget Box",
  "target": "section",
  "enabled_on": {
    "templates": ["product"]
  },
  "settings": []
}
```

**Common Product Page Schema Errors:**

1. **Missing `"templates": ["product"]`** - App only allows pages, not products
2. **Wrong target** - Using `"section_group"` instead of `"section"`
3. **Deprecated format** - Using old `"templates"` instead of `"enabled_on"`

## Where Widget-Box Wrappers Are Added

1. **`sections/apps.liquid`** - Main apps section
2. **`snippets/product-info-content.liquid`** - Product page app blocks  
3. **`sections/main-cart.liquid`** - Cart page app blocks
4. **`sections/product-information-tabs.liquid`** - Product tabs app blocks

All app blocks are wrapped with:
```liquid
<div class="widget-box" {{ block.shopify_attributes }}>
  {% render block %}
</div>
```

## How to Identify the Broken App

### Step 1: Check Theme Editor
1. Go to **Online Store → Themes → Customize**
2. Navigate to the page where you're trying to add the app block
3. Click **Add block → Apps**
4. Look for any app that shows "widget-box" in the name
5. Try to add it - if it errors immediately, that's the broken app

### Step 2: Check Browser Console
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for errors mentioning:
   - "widget-box"
   - "app block"
   - "schema"
   - "target"

### Step 3: Check Shopify Admin
1. Go to **Settings → Apps and sales channels**
2. Look for recently installed apps
3. Check app reviews for "widget-box" or "app block" errors

## Common App Block Schema Issues

### Issue 1: Missing or Invalid `target`
```json
// ❌ BROKEN
{
  "name": "Widget Box",
  "settings": []
}

// ✅ FIXED
{
  "name": "Widget Box",
  "target": "section",
  "settings": []
}
```

### Issue 2: Wrong Template Restriction
```json
// ❌ BROKEN - if trying to add to product page
{
  "target": "section",
  "templates": ["page"]  // Only allows pages, not products
}

// ✅ FIXED
{
  "target": "section",
  "enabled_on": {
    "templates": ["product", "page"]
  }
}
```

### Issue 3: Deprecated API
```json
// ❌ OLD FORMAT (Vintage)
{
  "target": "section",
  "templates": ["product"]
}

// ✅ NEW FORMAT (OS 2.0)
{
  "target": "section",
  "enabled_on": {
    "templates": ["product"]
  }
}
```

## Workaround: Manual Snippet Injection

If the app provides a snippet, you can bypass the broken app block:

1. Check if app has a snippet:
   ```
   snippets/[app-name]-widget-box.liquid
   ```

2. Add directly to your template:
   ```liquid
   {% render '[app-name]-widget-box' %}
   ```

## What to Tell the App Developer

Send them this:

> "Your app block 'widget-box' is failing with Shopify's validation. The schema needs to be OS 2.0 compliant:
> 
> Required fields:
> - `"target": "section"` (or `"section_group"`)
> - `"enabled_on": { "templates": [...] }` (not `"templates"`)
> 
> The theme already has the `widget-box` wrapper divs in place. The issue is in your app's block definition schema."

## Next Steps

1. **Identify the app** causing the error (use steps above)
2. **Contact the app developer** with the schema requirements
3. **Temporary workaround**: Use snippet if available
4. **Remove the app** if it's not critical until fixed
