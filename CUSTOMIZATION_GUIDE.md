# Florasy Theme Customization Guide

## ✅ What I've Fixed

1. **.gitignore** - Fixed to keep `shopify.theme.toml` (needed for CLI)
2. **Homepage Collections** - Changed to use "all" collection (works with any products)
3. **Blog Reference** - Changed from "left-sidebar" to "news" (you'll create this)

---

## 📝 Things You Need to Customize

### 1. **Create a Blog** (Required)
- Go to: Shopify Admin → Online Store → Blog posts
- Click "Add blog"
- Name it: **"news"** (or change homepage template to match your blog name)
- Add some blog posts

### 2. **Update Homepage Content** (Important)

#### Text Content to Change:
- **Hero Banner**: "Make the World Greener" → Your store message
- **Subtitle**: "🔥 Up to 50% off almost everything" → Your promotion
- **Best Seller Title**: "Best Seller Product This Week!" → Your title
- **Summer Banner**: "Ready, Set, Summer" → Your seasonal message
- **Product Tabs**: "NEW ARRIVALS", "BEST SELLERS", "TOP RATES" → Your categories
- **Blog Title**: "Our Blog" → Your blog name

#### Images to Upload:
1. **Hero Banner**: `banner4.jpg` 
   - Upload via: Shopify Admin → Content → Files
   - Or replace in theme editor
2. **Summer Banner**: `banner2.jpg` (desktop & mobile)
3. **Testimonial Icon**: `double-quotes_1.png`

### 3. **Collections** (Your Products)

The homepage now uses "all" collection, but you should:

1. **Create Collections** matching your product categories:
   - New Arrivals
   - Best Sellers  
   - Top Rated
   - Or any categories you want

2. **Update Homepage Template** (`templates/index.json`):
   - Change `"collection": "all"` to your actual collection handles
   - Change tab collections in `product-v2` section

### 4. **Branding & Colors**

Update in: **Theme Editor → Theme Settings**

- **Logo**: Upload your logo
- **Colors**: Match your brand colors
- **Fonts**: Choose your brand fonts
- **Favicon**: Upload your favicon

### 5. **Store Information**

Update in: **Shopify Admin → Settings → Store details**

- Store name
- Store description
- Contact information
- Social media links

### 6. **Navigation Menu**

Update in: **Theme Editor → Navigation**

- Main menu items
- Footer links
- Mobile menu

### 7. **Footer Content**

Update in: **Theme Editor → Footer**

- About text
- Contact info
- Social links
- Newsletter signup

---

## 🎨 Template Files You Might Edit

### Homepage Sections:
- `templates/index.json` - Main homepage layout
- `sections/banner-v2.liquid` - Hero banner
- `sections/product-v1.liquid` - Product grid
- `sections/product-v2.liquid` - Product tabs

### Global:
- `layout/theme.liquid` - Main layout wrapper
- `sections/header.liquid` - Header/navigation
- `sections/footer.liquid` - Footer

### Styling:
- `assets/main.css` - Main styles (if you need custom CSS)
- `config/settings_schema.json` - Theme settings options

---

## 📦 Products

Since your products are different:
1. **Create your products** in Shopify Admin
2. **Organize into collections** (New Arrivals, Best Sellers, etc.)
3. **Update homepage** to reference your collection handles
4. **Add product images** (high quality, consistent style)

---

## 🔧 .gitignore Status

✅ **FIXED** - Now correctly configured:
- ✅ Keeps `shopify.theme.toml` (needed for CLI)
- ✅ Ignores `.shopify/` folder (CLI cache)
- ✅ Ignores temporary files
- ✅ Ignores zip files (optional - you might want to keep them)

---

## 🚀 Next Steps

1. **Create Blog**: Go to Shopify Admin → Blog posts → Add blog (name it "news")
2. **Upload Images**: Add banner images via Theme Editor
3. **Add Products**: Create your products and collections
4. **Customize Text**: Update all text content in Theme Editor
5. **Update Collections**: Change collection handles in `templates/index.json`
6. **Push Changes**: `shopify theme push` after editing files

---

## 💡 Pro Tips

- Use **Theme Editor** for most changes (no code needed)
- Edit **template files** only for advanced customization
- Test changes on **unpublished theme** first
- Use **Shopify CLI** to sync changes: `shopify theme dev`

