# CSS Files Removal Summary

## ✅ Already Removed (in Git Staged Changes)
- `assets/vastu-sections.css` - Migrated to SCSS (`scss/layout/_section-vastu.scss`)

## 🗑️ Can Be Removed (Old Generated Files)

### `main.min.css` (398K)
- **Status**: Old compiled CSS file
- **Currently used in**: `layout/password.liquid` (line 53)
- **Action**: Can be removed after updating `password.liquid` to use `main.css` instead
- **Recommendation**: Update `password.liquid` to reference `main.css`, then delete `main.min.css`

## 📋 Must Keep (Still Referenced)

### Template-Specific CSS (not yet migrated to SCSS):
- `base.css` - Used in `password.liquid`
- `component-newsletter.css` - Used in `password.liquid`
- `newsletter-section.css` - Used in `password.liquid`
- `section-password.css` - Used in `password.liquid`
- `section-password-image-banner.css` - Used in `password.liquid`
- `template-giftcard.css` - Used in `gift_card.liquid`

### Third-Party & Generated:
- `xo-webcomponents.min.css` - Third-party library (used in `theme.liquid` and `password.liquid`)
- `main.css` - **New compiled SCSS output** (used in `theme.liquid`)

## 📝 Next Steps

1. **Update `password.liquid`** to use `main.css` instead of `main.min.css`
2. **Delete `main.min.css`** after verification
3. **Optional**: Migrate remaining template-specific CSS files to SCSS structure

## Git Status Summary

From staged changes:
- `vastu-sections.css` - Deleted (D)
- `main.css` - New file (needs to be built)
- `main.min.css` - Still exists, can be removed after updating password.liquid

