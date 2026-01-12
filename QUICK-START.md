# Quick Start Guide

## ✅ What's Done

- ✅ **14 SCSS files** organized (keep these for development)
- ✅ **Single CSS output** - All SCSS compiles to ONE `main.css` file
- ✅ **Old CSS commented out** in `theme.liquid` (can uncomment if needed)
- ✅ **Backup created** in `backup/css/`

## 🚀 Build Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Single CSS File
```bash
npm run build:css
```

This creates **ONE file**: `assets/main.css` (contains all styles from all SCSS files)

### 3. For Production (Minified)
```bash
npm run build:css:min
```

This creates: `assets/main.min.css`

## 📁 File Structure

```
Development (SCSS - Multiple Files):
scss/
├── abstracts/     (variables, mixins)
├── base/          (root, general)
├── components/    (buttons, forms, cards, etc.)
├── layout/        (sections)
├── pages/         (page styles)
└── main.scss      (imports everything)

↓ Compiles to ↓

Production (CSS - Single File):
assets/
└── main.css       (ONE file with all styles)
```

## 🔄 How It Works

1. **Development**: Edit individual SCSS files in `scss/` folder
2. **Build**: Run `npm run build:css` 
3. **Output**: Creates single `assets/main.css` file
4. **Theme**: `theme.liquid` loads only `main.css`

## ✅ Current Setup

In `layout/theme.liquid`:
- ✅ **Active**: `main.css` (new SCSS compiled)
- ⏸️ **Commented**: `main.min.css` (old)
- ⏸️ **Commented**: `vastu-sections.css` (old)

## 🧪 Testing

1. Build CSS: `npm run build:css`
2. Upload `main.css` to Shopify
3. Test your site
4. If issues: Uncomment old CSS in `theme.liquid`

## 📝 Watch Mode (Development)

```bash
npm run watch:css
```

Automatically rebuilds `main.css` when you edit any SCSS file.

