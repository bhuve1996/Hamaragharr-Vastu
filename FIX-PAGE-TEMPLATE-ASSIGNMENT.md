# Fix: Pages Using Same Template

## Problem
When you edit the Contact page or About page, changes appear on both pages. This happens because both pages are using the default `page.json` template instead of their specific templates.

## Solution: Assign Correct Templates

### Step 1: Fix About Page
1. Go to **Shopify Admin** → **Online Store** → **Pages**
2. Click on your **"About"** page (or create it if it doesn't exist)
3. Scroll down to **"Template"** dropdown
4. Select **`page.about`** (NOT `page`)
5. Make sure the page handle is `about`:
   - Scroll to "Search engine listing preview"
   - Click "Edit website SEO"
   - Set URL handle to: `about`
6. Click **"Save"**

### Step 2: Fix Contact Page
1. Go to **Shopify Admin** → **Online Store** → **Pages**
2. Click on your **"Contact Us"** page (or create it if it doesn't exist)
3. Scroll down to **"Template"** dropdown
4. Select **`page.contact-us-1`** (NOT `page`)
5. Make sure the page handle is `contact-us` or `contact-us-1`:
   - Scroll to "Search engine listing preview"
   - Click "Edit website SEO"
   - Set URL handle to: `contact-us`
6. Click **"Save"**

## Verify Templates Are Different

After assigning templates, you should see:

### About Page (`page.about.json`) has:
- Breadcrumb section
- About VastuKit section
- Our Mission section
- Feature boxes (Pre-Energized, Easy Installation, Expert Support)
- Newsletter section

### Contact Page (`page.contact-us-1.json`) has:
- Breadcrumb section
- Contact Information section
- Contact Form section
- Newsletter section
- Instagram section

## If Templates Still Don't Appear

1. **Hard refresh** Shopify admin (Cmd+Shift+R / Ctrl+Shift+R)
2. **Wait 2-3 minutes** for Shopify to process
3. **Check Theme Editor**:
   - Go to **Online Store** → **Themes** → **Customize**
   - Click **"Pages"** dropdown
   - Select each page
   - Check the template name in the left sidebar

## Quick Check

After fixing, when you edit:
- **About page** → Should show "About VastuKit" sections
- **Contact page** → Should show "Contact Information" and "Contact Form" sections

If both still show the same sections, the templates aren't assigned correctly yet.

