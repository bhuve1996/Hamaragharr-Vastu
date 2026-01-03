# How to Assign Page Templates in Shopify

## Method 1: Create a New Page with the Template

1. Go to **Online Store > Pages**
2. Click **"Add page"**
3. Fill in the page details:
   - **Title**: "About" (or "About Us")
   - **Content**: (optional - can be left blank as template handles content)
   - **Search engine listing preview**: Set the URL handle to `about` (important!)
4. Scroll down to **"Template"** section
5. Select **`page.about`** from the dropdown
6. Click **"Save"**

The page will now be accessible at `/pages/about` and will use the `page.about.json` template.

## Method 2: Assign Template to Existing Page

1. Go to **Online Store > Pages**
2. Click on an existing page (or create a new one)
3. Scroll down to find the **"Template"** section
4. Select **`page.about`** from the dropdown
5. **Important**: Make sure the page handle matches:
   - For About page: handle should be `about`
   - For Wishlist page: handle should be `wishlist`
6. Click **"Save"**

## Method 3: Via Theme Editor

1. Go to **Online Store > Themes**
2. Click **"Customize"** on your active theme
3. Navigate to **Pages** in the left sidebar
4. Select the page you want to edit
5. The template should automatically apply based on the page handle

## Important Notes

### Page Handle Matters
Shopify automatically matches templates based on the page handle:
- Page with handle `about` → Uses `page.about.json`
- Page with handle `wishlist` → Uses `page.wishlist.json`
- Page with handle `contact-us` → Uses `page.contact-us-1.json` (or 2, 3)

### To Set/Change Page Handle:
1. Edit the page
2. Scroll to **"Search engine listing preview"**
3. Click **"Edit website SEO"**
4. Change the **"URL and handle"** field
5. Save

## Quick Setup Checklist

### For About Page:
- [ ] Create page with title "About" or "About Us"
- [ ] Set handle to `about`
- [ ] Select template `page.about` from dropdown
- [ ] Save
- [ ] Verify at `/pages/about`

### For Wishlist Page:
- [ ] Create page with title "Wishlist"
- [ ] Set handle to `wishlist`
- [ ] Select template `page.wishlist` from dropdown
- [ ] Save
- [ ] Verify at `/pages/wishlist`

## Troubleshooting

**If template doesn't appear in dropdown:**
- Hard refresh the page (Cmd+Shift+R / Ctrl+Shift+R)
- Clear browser cache
- Wait 1-2 minutes after pushing theme changes

**If template is assigned but not working:**
- Verify the page handle matches the template name
- Check Theme Editor to see if template is applied
- Make sure you're viewing the correct theme

