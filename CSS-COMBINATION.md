# CSS File Combination Documentation

## What Was Combined?

The `vastu-combined.css` file contains **30 individual CSS files** that were previously loaded separately. This combination significantly improves page load performance by reducing HTTP requests from 30+ to just 1.

### Combined Files (in order):

1. **vastu-base.css** (6.7 KB) - Base styles and CSS variables
2. **vastu-headings.css** (5.6 KB) - Heading typography styles
3. **vastu-cards.css** (23.0 KB) - Card component styles
4. **vastu-collection-cards.css** (4.0 KB) - Collection card styles
5. **vastu-product-card.css** (14.8 KB) - Product card styles
6. **vastu-product-card-fixes.css** (60.8 KB) - Product card fixes and overrides
7. **vastu-popup-newsletter.css** (7.8 KB) - Newsletter popup styles
8. **vastu-product-page.css** (24.2 KB) - Product page specific styles
9. **vastu-shipping-link.css** (2.8 KB) - Shipping link styles
10. **vastu-buttons-hover.css** (4.4 KB) - Button hover effects
11. **button-hover-effects.css** (8.1 KB) - Additional button hover effects
12. **button-fixes.css** (28.4 KB) - Button fixes and overrides
13. **newsletter-button-mobile.css** (3.1 KB) - Mobile newsletter button styles
14. **price-tag-styles.css** (2.1 KB) - Price tag styling
15. **vastu-sections-spacing.css** (1.8 KB) - Section spacing utilities
16. **section-spacing.css** (1.8 KB) - Additional section spacing
17. **homepage-headings.css** (4.3 KB) - Homepage heading styles
18. **vastu-why-kit.css** (2.9 KB) - "Why Kit" section styles
19. **vastu-product-showcase.css** (9.3 KB) - Product showcase styles
20. **vastu-hindi-statement.css** (1.0 KB) - Hindi text statement styles
21. **vastu-footer.css** (6.9 KB) - Footer styles
22. **vastu-carousel.css** (6.9 KB) - Carousel/slider styles
23. **vastu-banner-hero.css** (3.8 KB) - Hero banner styles
24. **vastu-banner-hero-extended.css** (9.2 KB) - Extended hero banner styles
25. **vastu-trust-bar.css** (3.5 KB) - Trust bar component styles
26. **vastu-testimonials.css** (8.5 KB) - Testimonials section styles
27. **vastu-shop-by-concern.css** (12.3 KB) - Shop by concern section styles
28. **vastu-help-address.css** (4.7 KB) - Help/address section styles
29. **vastu-blog.css** (2.4 KB) - Blog page styles
30. **vastu-faq.css** (0.9 KB) - FAQ section styles
31. **vastu-responsive.css** (3.2 KB) - Responsive breakpoint styles

**Total Combined Size:** ~283 KB (unminified)  
**Minified Size:** ~241 KB (15% reduction)

## Performance Impact

### Before:
- **30+ HTTP requests** for CSS files
- Each file requires a separate network round trip
- Slower initial page load
- More complex browser caching

### After:
- **1 HTTP request** for all custom CSS
- Single network round trip
- Faster page load (estimated 2-3x improvement)
- Simpler caching strategy

## Build Process

### Manual Build
```bash
npm run build:css
```

This will:
1. Combine all 30 CSS files into `vastu-combined.css`
2. Create a minified version `vastu-combined.min.css`
3. Show file sizes and compression statistics

### Automatic Build (on Git Push)
The build process runs automatically before each `git push` via the `.husky/pre-push` hook.

## File Locations

- **Combined (unminified):** `assets/vastu-combined.css`
- **Minified:** `assets/vastu-combined.min.css`
- **Build Script:** `scripts/build-css.js`

## Usage in Theme

The theme now loads:
```liquid
{{ 'vastu-combined.min.css' | asset_url | stylesheet_tag }}
```

Instead of 30+ individual files.

## Making Changes

If you need to modify styles:

1. **Edit individual CSS files** in `assets/` (e.g., `vastu-cards.css`)
2. **Run build script** to regenerate combined file:
   ```bash
   npm run build:css
   ```
3. **Commit both** the source file and the combined file

## Notes

- The combined file preserves the order of individual files
- Each section is marked with a comment showing which file it came from
- The minified version removes comments and whitespace for production
- Source files are kept for maintainability
