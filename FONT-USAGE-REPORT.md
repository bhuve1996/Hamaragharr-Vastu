# Font Usage Report - Global Typography System

## Font Families Used

All fonts are controlled via Shopify Theme Settings and set in `snippets/settings-adapter.liquid`:

### 1. **Body Font** (`--font-body-family`)
- **Source**: Shopify Settings → Typography → Body Font
- **Used for**: All body text, paragraphs, spans, buttons, inputs, footer text, header navigation
- **Variable**: `var(--font-body-family)`
- **Default**: Set from `settings.type_body_font` or `settings.font_body_selection`

### 2. **Heading Font** (`--font-heading-family`)
- **Source**: Shopify Settings → Typography → Heading Font
- **Used for**: All headings (h1-h6), section titles, card titles, footer headings
- **Variable**: `var(--font-heading-family)`
- **Default**: Set from `settings.type_header_font` or `settings.font_heading_selection`

### 3. **Custom Font** (`--font-custom-family`)
- **Source**: Shopify Settings → Typography → Custom Font
- **Used for**: Special elements that need custom styling
- **Variable**: `var(--font-custom-family)`
- **Default**: Set from `settings.type_custom_font` or `settings.font_custom_selection`
- **Fallback**: Used as fallback for headings if heading font not set

## Font Family Variables Location

All font families are defined in:
- **Primary Source**: `snippets/settings-adapter.liquid` (lines 65-88)
  - Sets `--font-body-family`
  - Sets `--font-heading-family`
  - Sets `--font-custom-family`

## Where Fonts Are Applied

### Global Typography CSS (`assets/vastu-global-typography.css`)
- **Body Text**: Uses `var(--font-body-family, inherit)` for all body elements
- **Headings**: Uses `var(--font-heading-family, var(--font-custom-family, inherit))` for all headings

### Section-Specific Files
- **section-password.css**: Uses `var(--font-body-family)` and `var(--font-heading-family)` ✅
- **base.css**: Uses `var(--font-body-family)` ✅
- **All other sections**: Inherit from global typography system ✅

## No Hardcoded Fonts

✅ **Removed hardcoded "Poppins, sans-serif" from:**
- `assets/vastu-base.css` - Now uses variables from settings-adapter

✅ **All font families come from Shopify settings:**
- Body font: Configured in Theme Settings → Typography → Body
- Heading font: Configured in Theme Settings → Typography → Headings
- Custom font: Configured in Theme Settings → Typography → Custom

## Special Cases

1. **Monospace fonts**: Used only for code blocks (`<pre>`, `<code>`) - this is intentional
2. **Inherit**: Used as fallback when font variables are not set

## Summary

- ✅ No hardcoded font families in section-specific CSS
- ✅ All fonts controlled via Shopify Theme Settings
- ✅ Global typography system applies fonts consistently
- ✅ Section-level overrides supported via CSS variables
- ✅ Responsive: Font families work on both desktop and mobile
