# SCSS Structure Documentation

## Overview

The CSS has been reorganized into a modular SCSS structure following DRY principles and removing all `!important` declarations. The code is organized in the following order:

1. **Sections** - Layout and spacing
2. **Tags** - Badge and tag components
3. **General** - Base styles and utilities
4. **Page** - Page-specific styles
5. **Cards** - Card components
6. **Section** - Section-specific styles (Vastu sections)

## Directory Structure

```
scss/
├── abstracts/
│   ├── _variables.scss    # SCSS variables and CSS custom properties
│   └── _mixins.scss       # Reusable mixins for DRY code
├── base/
│   ├── _root.scss         # Root CSS variables
│   └── _general.scss      # General base styles
├── components/
│   ├── _buttons.scss      # Button components
│   ├── _cards.scss        # Card components
│   ├── _forms.scss        # Form components
│   ├── _modals.scss       # Modal components
│   └── _tags.scss         # Tag and badge components
├── layout/
│   ├── _sections.scss     # Section layout and spacing
│   └── _section-vastu.scss # Vastu-specific sections
├── pages/
│   └── _page.scss         # Page-specific styles
└── main.scss              # Main file that imports all partials
```

## Build System

### Installation

```bash
npm install
```

### Build Commands

```bash
# Build expanded CSS (development)
npm run build:css

# Watch for changes (development)
npm run watch:css

# Build minified CSS (production)
npm run build:css:min

# Watch and build minified CSS
npm run watch:css:min
```

## Key Features

### 1. No `!important` Declarations
All `!important` declarations have been removed and replaced with proper CSS specificity using:
- More specific selectors
- Proper nesting
- CSS custom properties for overrides

### 2. DRY Principles
- **Variables**: Centralized in `_variables.scss`
- **Mixins**: Reusable patterns in `_mixins.scss`
- **Nesting**: Logical grouping of related styles
- **Shared Styles**: Common patterns extracted to mixins

### 3. Organized Structure
Styles are organized by:
- **Functionality**: Components, layout, pages
- **Specificity**: Base → Components → Layout → Pages
- **Reusability**: Mixins and variables for common patterns

## Mixins Available

### Layout Mixins
- `@mixin flex-center` - Flexbox center alignment
- `@mixin flex-column` - Flex column layout
- `@mixin flex-column-center` - Flex column with center alignment
- `@mixin absolute-cover` - Absolute positioning covering parent
- `@mixin absolute-center` - Absolute centering

### Text Mixins
- `@mixin text-ellipsis` - Single line ellipsis
- `@mixin text-ellipsis-multiline($lines)` - Multi-line ellipsis

### Component Mixins
- `@mixin button-base` - Base button styles
- `@mixin card-base` - Base card styles
- `@mixin image-cover` - Image cover styles

### Media Query Mixins
- `@mixin mobile` - Mobile breakpoint
- `@mixin tablet` - Tablet breakpoint
- `@mixin desktop` - Desktop breakpoint

## Variables

### Typography
- `$font-size-tag`
- `$font-size-description`
- `$font-size-card-title`
- `$font-size-heading`
- `$font-size-button`

### Spacing
- `$spacing-xs` through `$spacing-xxl`

### Colors
- `$color-secondary-button-default`
- `$color-white`

### Breakpoints
- `$breakpoint-mobile`
- `$breakpoint-tablet`
- `$breakpoint-desktop`

## Usage

### Adding New Styles

1. **Component Styles**: Add to appropriate file in `components/`
2. **Layout Styles**: Add to `layout/` directory
3. **Page Styles**: Add to `pages/` directory
4. **New Variables**: Add to `abstracts/_variables.scss`
5. **New Mixins**: Add to `abstracts/_mixins.scss`

### Import Order

The main.scss file imports in this order:
1. Abstracts (variables, mixins)
2. Base (root, general)
3. Layout (sections)
4. Components (tags, buttons, forms, modals, cards)
5. Pages

This ensures proper cascade and specificity.

## Migration Notes

- All `!important` declarations have been removed
- Styles use proper CSS specificity instead
- Common patterns extracted to mixins
- Variables used for consistent theming
- Mobile-first responsive design with mixins

## Output

The compiled CSS is output to:
- `assets/main.css` (expanded, development)
- `assets/main.min.css` (compressed, production)

Update `layout/theme.liquid` to use the new compiled CSS file instead of the old CSS files.

