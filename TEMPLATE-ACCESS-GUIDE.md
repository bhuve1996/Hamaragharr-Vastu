# How to Access Page Templates in Shopify

## Templates Available

The following page templates have been created and pushed to your theme:

1. **`page.about.json`** - VastuKit About page
2. **`page.wishlist.json`** - Wishlist page
3. **`page.contact-us-1.json`** - Contact page (already visible)
4. **`page.faqs.json`** - FAQ page
5. **`page.about-us-1.json` through `page.about-us-4.json`** - Alternative About templates

## How to Access Templates

### Method 1: When Creating a New Page
1. Go to **Online Store > Pages**
2. Click **"Add page"**
3. In the **"Template"** dropdown, you should see:
   - `page` (default)
   - `page.about`
   - `page.wishlist`
   - `page.contact-us-1`, `page.contact-us-2`, `page.contact-us-3`
   - `page.faqs`
   - `page.about-us-1` through `page.about-us-4`

### Method 2: When Editing an Existing Page
1. Go to **Online Store > Pages**
2. Click on an existing page
3. Scroll down to **"Template"** section
4. Select the template from the dropdown

### Method 3: Direct URL Access
If templates don't appear in dropdown, you can still access them by:
1. Creating a page with default template
2. The page will use the template based on its handle/URL
3. For example: `/pages/about` will use `page.about.json` if it exists

## Troubleshooting

### If Templates Don't Appear:
1. **Hard refresh** the Shopify admin (Cmd+Shift+R / Ctrl+Shift+R)
2. **Clear browser cache** or use incognito mode
3. **Wait 2-3 minutes** for Shopify to process theme changes
4. **Check theme editor** - Go to Theme Editor and verify templates are listed
5. **Verify theme is published** - Make sure you're viewing the correct theme

### Manual Template Assignment
If templates still don't show:
1. Create the page with default template
2. Go to **Theme Editor**
3. Navigate to the page
4. The template should automatically apply based on the page handle

## Template URLs

Once pages are created, they will be accessible at:
- `/pages/about` - Uses `page.about.json`
- `/pages/wishlist` - Uses `page.wishlist.json`
- `/pages/contact-us` - Uses `page.contact-us-1.json` (or 2, 3)
- `/pages/faqs` - Uses `page.faqs.json`

## Verification

To verify templates are on Shopify:
1. Go to **Online Store > Themes**
2. Click **"..."** on your theme
3. Select **"Edit code"**
4. Navigate to **Templates > page**
5. You should see all `page.*.json` files listed

