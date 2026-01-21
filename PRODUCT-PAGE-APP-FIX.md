# Product Page App Block Fix - "widget-box" Error

## Quick Fix for Product Page App Blocks

### The Problem
You're trying to add an app block to a product page, but getting:
> **"widget-box" not added. There is a problem with the app block. Contact the app developer.**

### Root Cause
The app's block schema is **not configured for product pages**. It's likely:
- Only allows `"templates": ["page"]` 
- Missing `"product"` in the templates array
- Using deprecated schema format

---

## What the App Developer Must Fix

The app block schema needs to be:

```liquid
{% schema %}
{
  "name": "Widget Box",
  "target": "section",
  "enabled_on": {
    "templates": ["product", "page"]
  },
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Title"
    }
  ]
}
{% endschema %}
```

**Key Requirements:**
1. ✅ `"target": "section"` (required)
2. ✅ `"enabled_on": { "templates": ["product"] }` (must include "product")
3. ✅ OS 2.0 format (not deprecated `"templates"` at root level)

---

## How to Identify the Broken App

### Method 1: Theme Editor
1. Go to **Online Store → Themes → Customize**
2. Open any product page
3. Click **Add block** in the product section
4. Look under **Apps** section
5. The app that shows "widget-box" or errors when clicked = broken app

### Method 2: Browser Console
1. Open product page in browser
2. Press F12 → Console tab
3. Look for errors like:
   ```
   App block "widget-box" failed to load
   Schema validation error
   ```

### Method 3: Check Installed Apps
1. Go to **Settings → Apps and sales channels**
2. Look for apps with names like:
   - "Widget Box"
   - "Product Widget"
   - "Review Widget"
   - Any app recently installed

---

## Temporary Workaround

### Option 1: Use App Snippet (if available)
If the app provides a snippet, add it directly:

1. Check if snippet exists:
   ```
   snippets/[app-name]-widget.liquid
   ```

2. Add to product template manually:
   ```liquid
   {% render '[app-name]-widget' %}
   ```

### Option 2: Use Apps Section
Instead of adding to `main-product` section, add a separate apps section:

1. In theme editor, go to product template
2. Click **Add section**
3. Add **"Apps"** section
4. Add the app block there

This uses `sections/apps.liquid` which already has widget-box wrapper.

---

## Message to Send App Developer

Copy this and send to the app developer:

---

**Subject: App Block Schema Error - Product Page Support Missing**

Hi,

Your app block "widget-box" is failing on product pages with this error:
> "widget-box" not added. There is a problem with the app block.

**The Issue:**
The app block schema doesn't allow product pages. It needs to include `"product"` in the enabled templates.

**Required Fix:**
Update your app block schema to:

```json
{
  "name": "Widget Box",
  "target": "section",
  "enabled_on": {
    "templates": ["product", "page"]
  },
  "settings": []
}
```

**Current Status:**
- ✅ Theme has widget-box wrapper divs in place
- ❌ App schema is blocking product page usage

Please update the schema to support product pages.

Thanks!

---

## Verification After Fix

Once the app developer fixes it:

1. Go to Theme Editor
2. Open a product page
3. Click **Add block** in product section
4. Under **Apps**, the widget-box should now work
5. No more error messages

---

## Current Theme Setup (Already Correct)

Your theme already has the correct wrapper in place:

**File:** `snippets/product-info-content.liquid`
```liquid
{% when '@app' %}
  <xo-animate xo-cascade>
    <div class="widget-box" {{ block.shopify_attributes }}>
      {% render block %}
    </div>
  </xo-animate>
```

The theme is ready - the app just needs to fix its schema! 🎯
