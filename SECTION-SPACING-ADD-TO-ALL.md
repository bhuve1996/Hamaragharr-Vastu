# Adding Section Spacing Settings to All Sections

## Overview
This document explains how to add the reusable section spacing settings to all sections in your theme.

## What's Been Done

✅ **Added to these sections:**
- `slideshow-v1.liquid` (homepage banner) - **TESTED with padding/margin 0**
- `vastu-product-showcase.liquid`
- `vastu-why-kit.liquid`
- `vastu-help-address-v1.liquid`
- `main-page.liquid`

✅ **Homepage banner test:**
- Settings added to `slideshow-v1.liquid` schema
- Values set to 0 in `templates/index.json` for `homepage-carousel` section
- This section now has padding and margin of 0, overriding global settings

## How to Add to Other Sections

Since Shopify schemas are JSON (not Liquid), you cannot use the `section-spacing-schema.liquid` snippet directly. You need to add the JSON manually to each section's schema.

### Steps:

1. Open any section file in `sections/`
2. Find the `"settings": [` array in the schema
3. Add this JSON block **before the closing `]`** of the settings array:

```json
{
  "type": "header",
  "content": "Section Spacing (Overrides Global Settings)"
},
{
  "type": "paragraph",
  "content": "Set to 0 to use global settings. Leave at 0 to inherit from theme settings."
},
{
  "type": "header",
  "content": "Desktop Spacing"
},
{
  "type": "range",
  "id": "section_padding_top_desktop",
  "min": 0,
  "max": 200,
  "step": 2,
  "unit": "px",
  "label": "Padding Top (Desktop)",
  "default": 0,
  "info": "Set to 0 to use global setting"
},
{
  "type": "range",
  "id": "section_padding_bottom_desktop",
  "min": 0,
  "max": 200,
  "step": 2,
  "unit": "px",
  "label": "Padding Bottom (Desktop)",
  "default": 0,
  "info": "Set to 0 to use global setting"
},
{
  "type": "range",
  "id": "section_margin_top_desktop",
  "min": 0,
  "max": 200,
  "step": 2,
  "unit": "px",
  "label": "Margin Top (Desktop)",
  "default": 0,
  "info": "Set to 0 to use global setting"
},
{
  "type": "range",
  "id": "section_margin_bottom_desktop",
  "min": 0,
  "max": 200,
  "step": 2,
  "unit": "px",
  "label": "Margin Bottom (Desktop)",
  "default": 0,
  "info": "Set to 0 to use global setting"
},
{
  "type": "header",
  "content": "Mobile Spacing"
},
{
  "type": "range",
  "id": "section_padding_top_mobile",
  "min": 0,
  "max": 200,
  "step": 2,
  "unit": "px",
  "label": "Padding Top (Mobile)",
  "default": 0,
  "info": "Set to 0 to use global setting"
},
{
  "type": "range",
  "id": "section_padding_bottom_mobile",
  "min": 0,
  "max": 200,
  "step": 2,
  "unit": "px",
  "label": "Padding Bottom (Mobile)",
  "default": 0,
  "info": "Set to 0 to use global setting"
},
{
  "type": "range",
  "id": "section_margin_top_mobile",
  "min": 0,
  "max": 200,
  "step": 2,
  "unit": "px",
  "label": "Margin Top (Mobile)",
  "default": 0,
  "info": "Set to 0 to use global setting"
},
{
  "type": "range",
  "id": "section_margin_bottom_mobile",
  "min": 0,
  "max": 200,
  "step": 2,
  "unit": "px",
  "label": "Margin Bottom (Mobile)",
  "default": 0,
  "info": "Set to 0 to use global setting"
}
```

## Testing

The homepage banner (`homepage-carousel` section) has been tested with:
- All padding values set to 0
- All margin values set to 0
- This overrides the global settings for this specific section only

## Remaining Sections

There are 124 sections total. The most commonly used ones have been updated. To add to remaining sections, follow the steps above.

## Notes

- The `section-attr.liquid` snippet automatically handles these settings
- Sections using `vastu-section-spacing` class will apply spacing
- Settings with value 0 will use global settings
- Settings with value > 0 will override global settings for that section
