# Missing Styles Check

## Backup Status
✅ **Backup created successfully** in `backup/css/` directory

## npm Install Issue
⚠️ **npm install is failing** due to system permissions (not related to our code). You'll need to run this manually:
```bash
npm install
```

## Major Styles Comparison

### ✅ Already Included in SCSS:
1. **Base styles** - All in `base/_general.scss`
2. **Buttons** - All in `components/_buttons.scss`
3. **Forms** - All in `components/_forms.scss`
4. **Modals** - All in `components/_modals.scss`
5. **Tags/Badges** - All in `components/_tags.scss`
6. **Cards** - All in `components/_cards.scss`
7. **Sections layout** - All in `layout/_sections.scss`
8. **Vastu Trust Bar** - In `layout/_section-vastu.scss`
9. **Vastu Features Bar** - In `layout/_section-vastu.scss`
10. **Vastu Hindi Statement** - In `pages/_page.scss`
11. **Footer styles** - In `pages/_page.scss`

### ⚠️ Potentially Missing Styles:

#### 1. **Vastu Help Address V1 Section** ✅ **ADDED**
- `.vastu-help-address-v1__section-title`
- `.vastu-help-address-v1__item`
- `.vastu-help-address-v1__icon`
- `.vastu-help-address-v1__text`
- Mobile responsive styles
- **Status**: Added to `scss/layout/_section-vastu.scss`

#### 2. **Vastu Help Address V2 Section** ⚠️ **MISSING**
- `.vastu-help-address-v2__section-title`
- `.vastu-help-address-v2__circle-container`
- `.vastu-help-address-v2__circle`
- `.vastu-help-address-v2__quadrant`
- Complex circle with 4 quadrants layout
- **Action Needed**: Add to `scss/layout/_section-vastu.scss`

#### 3. **Vastu Shop By Concern Section** ⚠️ **MISSING (Large Section)**
This is a major section with many styles:
- `.vastu-shop-by-concern__section-title`
- `.vastu-shop-by-concern__accordion`
- `.vastu-shop-by-concern__item`
- `.vastu-shop-by-concern__trigger`
- `.vastu-shop-by-concern__collapse`
- `.vastu-shop-by-concern__content`
- `.vastu-shop-by-concern__card-description`
- `.vastu-shop-by-concern__benefits-title`
- `.vastu-shop-by-concern__recommended-title`
- `.vastu-shop-by-concern__products-carousel`
- `.vastu-shop-by-concern__product-card`
- `.vastu-shop-by-concern__product-add-to-cart`
- Mobile responsive styles (many with !important that need refactoring)
- **Action Needed**: Add to `scss/layout/_section-vastu.scss` and remove all !important

#### 2. **Vastu Hot Deals Section**
May need to check if this is included

#### 3. **Testimonial Section Styles**
May need specific testimonial carousel styles

#### 4. **Section Heading Styles**
Some specific section heading overrides may be missing:
- `.banner-v155__title` specific styles
- Section title underline styles
- Product recommendations section heading

#### 5. **Additional Vastu Sections**
Check for:
- Vastu hero section
- Vastu banner sections
- Any other vastu-specific components

## Next Steps

1. **Install dependencies manually:**
   ```bash
   npm install
   ```

2. **Build CSS:**
   ```bash
   npm run build:css
   ```

3. **Compare output:**
   - Check if `assets/main.css` is generated
   - Compare file sizes
   - Test in browser

4. **Add missing styles:**
   - Add `vastu-help-address-v1` styles to `layout/_section-vastu.scss`
   - Add any other missing vastu sections
   - Add section heading overrides if needed

## Files to Review

1. `assets/vastu-sections.css` - Check for any vastu-specific sections
2. `assets/main.min.css` - May contain additional base styles
3. `assets/base.css` - Already converted to SCSS

## Recommendation

Before deploying:
1. Run `npm install` manually
2. Run `npm run build:css`
3. Test the compiled CSS in a development environment
4. Add any missing styles found during testing
5. Update `layout/theme.liquid` to use the new CSS file

