# Making the order number visible on the Checkout Thank You page

The **thank you page** customers see after checkout is **hosted by Shopify**. Your theme does not control that page, so the order number can be hard to see depending on Shopify’s layout.

To make the order number clearly visible there:

1. **Copy the script**  
   Open `scripts/checkout-thank-you-order-number.js` and copy its **entire** contents.

2. **Add it in Shopify Admin**  
   - Go to **Settings → Checkout**.  
   - Scroll to **Order status page** (or **Additional scripts**, depending on your Shopify version).  
   - In the **Additional scripts** box, paste the script inside a `<script>` tag, for example:

   ```html
   <script>
   (function() {
     function run() {
       ...paste full contents of checkout-thank-you-order-number.js here...
     }
     ...
   })();
   </script>
   ```

3. **Save** the checkout settings.

After that, on the thank you page the script will:
- Make the existing “Confirmation #…” line more visible (background and font weight).
- Add a prominent “Order number: Confirmation #XXXX” block at the top of the main content.

No theme code changes are required; this runs only on Shopify’s checkout thank you page.
