# Why Contact Us and About Pages Are Mirroring Each Other

## The Problem

When you edit the Contact page or About page in the Shopify Theme Editor, changes appear on both pages. This happens because **both pages are using the default `page.json` template** instead of their specific templates.

## The Root Cause

In Shopify, when you edit a page in the Theme Editor, you're actually editing the **template** that page uses. If both pages are assigned to the same template (`page.json`), any changes you make will affect all pages using that template.

## The Solution

You need to **assign each page to its specific template** in Shopify Admin:

### Step 1: Fix About Page Template Assignment

1. Go to **Shopify Admin** → **Online Store** → **Pages**
2. Click on your **"About"** page
3. Scroll down to find the **"Template"** dropdown (usually near the bottom)
4. **Currently it probably says:** `page` (default)
5. **Change it to:** `page.about`
6. Click **"Save"**

### Step 2: Fix Contact Page Template Assignment

1. Go to **Shopify Admin** → **Online Store** → **Pages**
2. Click on your **"Contact Us"** page
3. Scroll down to find the **"Template"** dropdown
4. **Currently it probably says:** `page` (default)
5. **Change it to:** `page.contact-us-1`
6. Click **"Save"**

## How to Verify Templates Are Different

After assigning templates correctly, the pages should have different sections:

### About Page (`page.about.json`) should show:
- Main page content
- Breadcrumb
- **About VastuKit** section
- **Our Mission** section
- **Feature boxes** (Pre-Energized, Easy Installation, Expert Support)
- Newsletter section

### Contact Page (`page.contact-us-1.json`) should show:
- Main page content
- Breadcrumb
- **Contact Information** section
- **Contact Form** section
- Newsletter section
- **Instagram** section

## Quick Check in Theme Editor

1. Go to **Online Store** → **Themes** → **Customize**
2. Click **"Pages"** dropdown (top left)
3. Select **"About"** page
   - Left sidebar should show: "About VastuKit", "Our Mission", feature boxes
4. Select **"Contact Us"** page
   - Left sidebar should show: "Contact Information", "Contact Form", Instagram

If both still show the same sections, the templates aren't assigned correctly yet.

## Important Notes

- **Template files are correct** - The `page.about.json` and `page.contact-us-1.json` files have different sections
- **The issue is in Shopify Admin** - Pages need to be assigned to the correct templates
- **After fixing**, each page will be independent and won't mirror each other

## If Templates Don't Appear in Dropdown

1. **Hard refresh** Shopify admin (Cmd+Shift+R / Ctrl+Shift+R)
2. **Wait 2-3 minutes** for Shopify to process theme changes
3. **Check page handles**:
   - About page handle should be: `about`
   - Contact page handle should be: `contact-us` or `contact-us-1`
4. **Try Theme Editor method**:
   - Go to Theme Editor
   - Select each page
   - Check if you can change template in the left sidebar

