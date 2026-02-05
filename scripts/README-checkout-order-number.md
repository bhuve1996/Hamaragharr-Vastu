# Making the order number visible on the Checkout Thank You page

The thank you page is **hosted by Shopify**. Your theme does not control it. To show the order number clearly, you need to add a script in **Shopify Admin** (or use the checkout customizer).

---

## Option A: Additional scripts (if your store has it)

1. In **Shopify Admin**, go to **Settings** (click the gear icon in the bottom left).
2. Open **Checkout** (under “Settings” in the left sidebar).
3. Scroll down the Checkout settings page until you see one of:
   - **Order status page**
   - **Additional scripts**
   - A section named **Thank you page** or **Order status**
4. If you see **Additional scripts** (a large text box), use it:
   - Copy the **entire** contents of `checkout-thank-you-order-number.js`.
   - Paste into the box, wrapped in `<script>...</script>`:
     ```html
     <script>
     (function() {
       function run() {
         var text = document.body.innerText || '';
         var match = text.match(/Confirmation\s*#([A-Z0-9]+)/i);
         if (!match) return;
         var orderLabel = match[0];
         var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
         var node;
         while ((node = walker.nextNode())) {
           if (node.textContent && node.textContent.indexOf('Confirmation #') !== -1) {
             var p = node.parentElement;
             if (p && (p.tagName === 'P' || p.tagName === 'p')) {
               p.style.setProperty('font-size', '1.125rem', 'important');
               p.style.setProperty('font-weight', '700', 'important');
               p.style.setProperty('color', '#1a1a1a', 'important');
               p.style.setProperty('background', '#f5f5f5', 'important');
               p.style.setProperty('padding', '12px 16px', 'important');
               p.style.setProperty('border-radius', '8px', 'important');
               p.style.setProperty('margin', '12px 0', 'important');
               break;
             }
           }
         }
         var main = document.querySelector('main');
         if (main && !main.querySelector('[data-vastu-order-number-banner]')) {
           var banner = document.createElement('div');
           banner.setAttribute('data-vastu-order-number-banner', '');
           banner.setAttribute('role', 'status');
           banner.innerHTML = 'Order number: <strong style="font-size: 1.25rem;">' + orderLabel + '</strong>';
           banner.style.cssText = 'background: #1a1a1a; color: #fff; padding: 16px 24px; border-radius: 8px; margin-bottom: 24px; font-size: 1.125rem;';
           main.insertBefore(banner, main.firstChild);
         }
       }
       if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
       else run();
       setTimeout(run, 800);
       setTimeout(run, 2000);
     })();
     </script>
     ```
   - **Save** (top right).

---

## Option B: If you don’t see “Additional scripts”

Shopify is moving away from “Additional scripts.” On some stores the box is hidden or removed.

1. **Checkout customizer**
   - **Settings → Checkout**.
   - Click **Customize** (or “Customize checkout”) to open the checkout editor.
   - In the editor, look for the **Thank you** or **Order status** section in the left sidebar.
   - See if there’s a block or option like “Order number” or “Confirmation number” you can turn on or move to make it more visible. If yes, enable it and place it where you want.

2. **Confirm what customers see**
   - Place a test order and open the thank you page (and the order status page if different).
   - Check whether the confirmation/order number appears anywhere (e.g. “Confirmation #XXXX”). If it’s there but small or low contrast, the customizer (fonts, colors) may be the only way to make it stand out without code.

3. **Ask Shopify**
   - If you need a guaranteed, prominent order number and don’t see “Additional scripts” or a suitable block in the customizer, contact Shopify support and ask: “Where can I add a script or block on the thank you / order status page to show the order number more clearly?” They can confirm what’s available for your plan and region.

---

## Option C: Show order number on your **theme** (e.g. “Thank you” page)

If you redirect customers to a **page on your theme** after checkout (e.g. a “Thank you” page):

- That page **can** show the order number only if Shopify passes it in the URL (e.g. `?order=123` or a token). Many setups don’t pass it, so the theme thank you page often can’t show the number.
- We’ve already enabled **Show order information** on the theme thank you section; it will show the number only when the theme has access to it (e.g. from URL or checkout context).

So for the **hosted** thank you page (right after payment), use **Option A** or **Option B** above. For a **theme** thank you page, the order number will display only when your setup provides it to the theme.
