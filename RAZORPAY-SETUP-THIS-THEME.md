# Razorpay Setup for This Theme

## ✅ Good News: No Additional Setup Needed!

Since Razorpay is **already enabled in your other theme**, it means Razorpay is configured at the **store level** in Shopify. Payment gateway settings are **shared across all themes**, so this new theme should automatically work with Razorpay.

## 🔍 Verification Steps

### 1. Verify Razorpay is Still Enabled in Shopify
1. Go to **Shopify Admin** → **Settings** → **Payments**
2. Look for **Razorpay** in the list of payment providers
3. Make sure it shows as **Active** or **Enabled**
4. If it's not there, you may need to re-add it (see troubleshooting below)

### 2. Check This Theme's Configuration
✅ **Already Configured!** This theme has:
- `show_dynamic_checkout: true` in product templates
- Payment button code: `{{ form | payment_button }}` in `snippets/buy-button.liquid`
- Additional checkout buttons support in cart

### 3. Test Razorpay in This Theme
1. **Preview this theme** (don't publish yet)
2. Go to a product page
3. Click **"Buy it now"** button (if visible) or add to cart and go to checkout
4. At checkout, you should see **Razorpay** as a payment option
5. If you see Razorpay, you're all set! ✅

## 🛠️ If Razorpay Doesn't Appear

### Option A: Re-verify in Shopify Settings
1. **Shopify Admin** → **Settings** → **Payments**
2. Check if Razorpay is listed
3. If missing, you may need to:
   - Re-install the Razorpay app from Shopify App Store
   - Or re-add Razorpay as a custom payment method

### Option B: Check Payment Button Visibility
The payment buttons appear when:
- `show_dynamic_checkout: true` ✅ (already set)
- Product is not a gift card
- Product doesn't have subscription options
- Customer is not on checkout page (buttons show on product page)

### Option C: Check Cart Page
Razorpay should also appear on the cart page. The theme has:
- `{{ content_for_additional_checkout_buttons }}` in `snippets/cart-actions.liquid`
- This displays alternative payment methods including Razorpay

## 📍 Where Razorpay Appears

1. **Product Page**: 
   - Below "Add to Cart" button
   - Shows as "Buy it now" or payment provider buttons
   - Code location: `snippets/buy-button.liquid` line 66

2. **Cart Page**:
   - Below checkout button
   - Shows additional payment options
   - Code location: `snippets/cart-actions.liquid` line 27

3. **Checkout Page**:
   - This is Shopify's standard checkout
   - Razorpay appears automatically if enabled in Settings → Payments

## 🔧 Theme Files Involved

These files already have the correct code:
- ✅ `snippets/buy-button.liquid` - Product page payment buttons
- ✅ `snippets/cart-actions.liquid` - Cart page payment buttons  
- ✅ `templates/product.json` - Has `show_dynamic_checkout: true`

## ⚠️ Important Notes

1. **Payment settings are store-wide**: If Razorpay works in one theme, it should work in all themes
2. **No theme code changes needed**: The theme already has the correct Shopify payment integration code
3. **Test before publishing**: Always preview and test payment flow before making this theme live

## 🧪 Quick Test Checklist

- [ ] Razorpay shows in Shopify Admin → Settings → Payments
- [ ] Preview this theme
- [ ] Go to product page
- [ ] See "Buy it now" or payment buttons
- [ ] Add product to cart
- [ ] Go to checkout
- [ ] See Razorpay as payment option
- [ ] Test a payment (use test mode if available)

## 📞 If Still Not Working

If Razorpay doesn't appear after checking everything:
1. Contact Razorpay support to verify account status
2. Check if Razorpay app needs to be reinstalled
3. Verify API keys are still valid in Shopify Settings → Payments
4. Check Shopify's payment provider status page for any issues

---

**Bottom Line**: Since Razorpay is already enabled in your store, this theme should work with it automatically. Just verify it's still active in Shopify Settings → Payments, then test the checkout flow in this theme's preview.

