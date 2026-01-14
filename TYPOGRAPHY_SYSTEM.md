# Global Typography System

This theme now includes a comprehensive global typography system that allows you to configure font sizes, line heights, and font weights globally and per-section.

## Global Settings

Go to **Theme Settings > Global Typography Settings** to configure:

- **Headings**: Font size, line height, and font weight (desktop & mobile)
- **Body Text**: Font size, line height, and font weight (desktop & mobile)
- **Subtitles**: Font size, line height, and font weight (desktop & mobile)
- **Card Titles**: Font size, line height, and font weight (desktop & mobile)
- **Descriptions**: Font size, line height, and font weight (desktop & mobile)
- **Tags/Badges**: Font size, line height, and font weight (desktop & mobile)

## Section-Level Overrides

Sections can override global typography settings by:

1. **Adding typography settings to section schema** (see example below)
2. **Applying styles using the snippet** `{% render 'section-typography-styles', section: section %}`

### Example: Adding Typography Settings to a Section

In your section's schema, add:

```json
{
  "type": "header",
  "content": "Typography Settings (Override Global)"
},
{
  "type": "range",
  "id": "heading_font_size_desktop",
  "min": 1.5,
  "max": 6,
  "step": 0.1,
  "unit": "rem",
  "label": "Heading Font Size (Desktop)",
  "info": "Leave empty to use global setting"
},
{
  "type": "range",
  "id": "heading_font_size_mobile",
  "min": 1,
  "max": 4,
  "step": 0.1,
  "unit": "rem",
  "label": "Heading Font Size (Mobile)"
},
{
  "type": "range",
  "id": "heading_line_height_desktop",
  "min": 1,
  "max": 2,
  "step": 0.1,
  "label": "Heading Line Height (Desktop)"
},
{
  "type": "range",
  "id": "heading_line_height_mobile",
  "min": 1,
  "max": 2,
  "step": 0.1,
  "label": "Heading Line Height (Mobile)"
},
{
  "type": "select",
  "id": "heading_font_weight_desktop",
  "label": "Heading Font Weight (Desktop)",
  "options": [
    {"value": "", "label": "Use Global Setting"},
    {"value": "400", "label": "Regular (400)"},
    {"value": "500", "label": "Medium (500)"},
    {"value": "600", "label": "SemiBold (600)"},
    {"value": "700", "label": "Bold (700)"}
  ]
}
```

### Example: Applying Typography Styles in Section Template

In your section's Liquid template, add the typography styles to the section element:

```liquid
<section {% render 'section-typography-styles', section: section %}>
  <!-- Section content -->
</section>
```

Or combine with other attributes:

```liquid
<section {% render 'section-attr' %} {% render 'section-typography-styles', section: section %}>
  <!-- Section content -->
</section>
```

## CSS Variables

The system uses CSS variables that follow this pattern:

- Global: `--global-{type}-{property}-{breakpoint}`
- Section override: `--section-{type}-{property}-{breakpoint}`

Example:
- `--global-heading-font-size-desktop`
- `--section-heading-font-size-mobile`

## How It Works

1. Global settings are defined in **Theme Settings > Global Typography Settings**
2. Settings are converted to CSS variables in `snippets/settings-adapter.liquid`
3. CSS variables are applied globally via `assets/vastu-global-typography.css`
4. Sections can override by setting section-specific CSS variables via inline styles
5. The CSS cascade ensures section overrides take precedence over global settings

## Mobile Responsiveness

All typography settings have separate desktop and mobile values, ensuring consistent typography across all devices. The mobile breakpoint is `48rem` (768px).
