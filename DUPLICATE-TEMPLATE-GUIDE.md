# How to Duplicate Page Templates (Shopify UI Method)

## Why Duplicate Instead of Create?

Some Envato themes have legacy sections (like `main-page`) that Shopify only recognizes when templates are duplicated through the UI, not created manually.

## Step-by-Step: Duplicate Default Page Template

### Method 1: Through Theme Editor (Recommended)

1. **Go to Shopify Admin** → **Online Store** → **Themes**
2. Click **"Customize"** on your active theme
3. In the theme editor, click the **"Pages"** dropdown (top left)
4. Select **"Default page"** or any existing page
5. In the left sidebar, look for **"Template"** dropdown
6. You should see options like:
   - `page` (default)
   - `page.about` (if it exists)
   - `page.wishlist` (if it exists)

### Method 2: Through Code Editor (If Method 1 Doesn't Work)

1. **Go to Shopify Admin** → **Online Store** → **Themes**
2. Click **"..."** (three dots) → **"Edit code"**
3. Navigate to **`templates`** folder
4. Find **`page.json`**
5. Click **"Duplicate"** (or right-click → Duplicate)
6. Rename the duplicate to:
   - `page.about.json`
   - `page.wishlist.json`
7. **Save** the files

### Method 3: Manual Duplication (Current Status)

✅ **Already Done**: We've created templates that match the default structure exactly.

If they still don't appear, try:

1. **Delete** `page.about.json` and `page.wishlist.json` from code editor
2. **Duplicate** `page.json` through Shopify UI (Method 2)
3. **Then** add your custom sections below `main`

---

## Current Template Structure (Verified ✅)

Both templates now have:

```json
{
  "sections": {
    "main": {
      "type": "main-page",
      "settings": {
        "padding_top": 28,
        "padding_bottom": 28
      }
    },
    // ... your custom sections
  },
  "order": ["main", ...]
}
```

This **matches** the default `page.json` structure exactly.

---

## If Templates Still Don't Appear

### Option A: Try UI Duplication
1. Delete current `page.about.json` and `page.wishlist.json`
2. Duplicate `page.json` through Shopify code editor
3. Rename duplicates
4. Add custom sections

### Option B: Verify Section Registration
Check if `main-page.liquid` has proper schema:
- ✅ Has `{% schema %}` block
- ✅ Has `"tag": "section"` (we added this)
- ✅ Has valid settings

### Option C: Alternative Main Section
If `main-page` is truly restricted, we might need to:
- Create a new `main-page-v2.liquid` section
- Or use a different section type that's confirmed JSON-safe

---

## Quick Test

1. **Hard refresh** Shopify admin (Cmd+Shift+R / Ctrl+Shift+R)
2. Go to **Online Store** → **Pages** → **Add page**
3. Scroll to **"Template"** dropdown
4. Check if `page.about` and `page.wishlist` appear

If they don't appear after hard refresh, we'll need to try UI duplication method.

