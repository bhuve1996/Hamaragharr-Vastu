/**
 * CHECKOUT THANK YOU PAGE – Make order number visible
 *
 * This script is intended for Shopify Checkout "Additional scripts".
 * The theme does NOT load on the hosted checkout thank you page, so this must
 * be added in Shopify Admin:
 *
 *   1. Go to Settings → Checkout → Order status page
 *   2. In "Additional scripts", paste this entire script inside a <script> tag.
 *
 * It finds the confirmation/order number on the thank you page and:
 *   - Styles the existing confirmation line so it’s clearly visible
 *   - Inserts a prominent “Order number” block at the top of the main content
 */
(function() {
  function run() {
    var text = document.body.innerText || '';
    var match = text.match(/Confirmation\s*#([A-Z0-9]+)/i);
    if (!match) return;

    var orderLabel = match[0];  // e.g. "Confirmation #FEN59Q8JX"
    var orderNumber = match[1];  // e.g. "FEN59Q8JX"

    // 1) Style the existing confirmation paragraph so it’s visible
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

    // 2) Add a prominent order number block at top of main content
    var main = document.querySelector('main');
    if (main) {
      var existingBanner = main.querySelector('[data-vastu-order-number-banner]');
      if (!existingBanner) {
        var banner = document.createElement('div');
        banner.setAttribute('data-vastu-order-number-banner', '');
        banner.setAttribute('role', 'status');
        banner.setAttribute('aria-live', 'polite');
        banner.innerHTML = 'Order number: <strong style="font-size: 1.25rem;">' + orderLabel + '</strong>';
        banner.style.cssText = 'background: #1a1a1a; color: #fff; padding: 16px 24px; border-radius: 8px; margin-bottom: 24px; font-size: 1.125rem; line-height: 1.4;';
        if (main.firstChild) {
          main.insertBefore(banner, main.firstChild);
        } else {
          main.appendChild(banner);
        }
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  setTimeout(run, 800);
  setTimeout(run, 2000);
})();
