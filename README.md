# Hamaragharr Vastu - Shopify Theme

VastuKit theme based on Florasy Multipurpose Plant Store Theme.

## Theme Information

- **Development Store**: aa4383-53.myshopify.com
- **Production Store**: hamaragharr.myshopify.com
- **Theme ID**: 183707402553 (Florasy theme)
- **Theme Base**: Florasy Multipurpose Plant Store Theme by ShopiLaunch

## Development

### Pulling Theme from Shopify

To pull the latest theme files from Shopify (development store):

```bash
shopify theme pull --theme=183707402553
```

The `shopify.theme.toml` is configured to use the development store (`aa4383-53.myshopify.com`), so you can pull directly without specifying the store.

### CSS Files

The theme uses individual CSS files for all environments. All CSS files are located in the `assets/` directory and are loaded directly without any build step.

### Environment-Based Asset Loading

The theme automatically detects the environment:
- **Local Development** (localhost/127.0.0.1): Loads individual CSS files for easier debugging
- **Production**: Also loads individual CSS files (no combined/minified version)

## Custom Sections

This theme includes custom Vastu-specific sections:
- Vastu Hero
- Vastu Featured Products
- Vastu Best Seller Cards
- Vastu Hot Deals

## Scripts

- `npm run format` - Format CSS and JSON files
- `npm run lint:css` - Lint CSS files
- `npm run lint:css:fix` - Fix CSS linting issues

## Product short name (metafield)

The theme supports a **Short name** for products so titles don’t get cut off on product cards, the header topbar marquee, quick view, wishlist, and similar places.

1. In **Shopify Admin** go to **Settings → Custom data → Products**.
2. Click **Add definition**.
3. Set:
   - **Name**: Short name
   - **Namespace and key**: `custom.short_name`
   - **Type**: Single line text
4. Save. Then on each product you can set a short name; if left blank, the full product title is used.

## Documentation

- Theme Documentation: https://docs.shopilaunch.com/florasy
