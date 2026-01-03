# Fix: Templates Not Appearing in Dropdown

## The Problem

The templates `page.about.json` and `page.contact-us-1.json` exist but don't appear in the template dropdown in Shopify Admin.

## Solution: Use Page Handle Method (Automatic Template Matching)

Shopify automatically matches templates based on **page handles**. You don't need to select from dropdown - just set the correct handle!

### Step 1: Fix About Page

1. Go to **Shopify Admin** → **Online Store** → **Pages**
2. Click on your **"About"** page
3. Scroll to **"Search engine listing preview"** section
4. Click **"Edit website SEO"**
5. Set the **"URL and handle"** to exactly: `about`
   - This will automatically use `page.about.json` template
6. Click **"Save"**

### Step 2: Fix Contact Page

1. Go to **Shopify Admin** → **Online Store** → **Pages**
2. Click on your **"Contact Us"** page
3. Scroll to **"Search engine listing preview"** section
4. Click **"Edit website SEO"**
5. Set the **"URL and handle"** to exactly: `contact-us-1`
   - This will automatically use `page.contact-us-1.json` template
   - OR use `contact-us` if you prefer
6. Click **"Save"**

## How It Works

Shopify automatically matches:
- Page handle `about` → Uses `page.about.json`
- Page handle `contact-us-1` → Uses `page.contact-us-1.json`
- Page handle `contact-us` → Uses `page.contact-us-1.json` (if `contact-us-1` doesn't exist)

## Alternative: Create Templates Through Theme Editor

If the handle method doesn't work, try creating templates through the UI:

1. Go to **Online Store** → **Themes** → **Edit code**
2. Navigate to **`templates`** folder
3. Find **`page.json`**
4. Click **"Duplicate"** button
5. Rename to `page.about.json` or `page.contact-us-1.json`
6. Save
7. Then edit the template to add your custom sections

## Verify It's Working

After setting handles:
1. Go to **Theme Editor** → **Pages** dropdown
2. Select "About" page
3. Left sidebar should show: "About VastuKit", "Our Mission" sections
4. Select "Contact Us" page  
5. Left sidebar should show: "Contact Information", "Contact Form" sections

If they show different sections, it's working! ✅

