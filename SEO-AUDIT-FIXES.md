# SEO & Performance Audit – Fixes Applied & Action Items

**Domain:** hamaraghar.in  
**Audit source:** Ubersuggest (Feb 21, 2026)

---

## Fixes applied in theme code

### 1. Title tag optimization (11 pages with too-long titles)
- **Change:** `snippets/page-title.liquid` now truncates the main title to **55 characters** (with ~20 reserved for “ – Page N” and “ – Shop name”), so full title stays within the **50–60 character** recommendation.
- **Result:** All pages get a consistent, length-capped title; long product/collection names are truncated with “…” instead of exceeding 60 chars.

### 2. Unique meta descriptions (8 duplicate meta descriptions)
- **Change:** In `layout/theme.liquid`, when a **collection**, **product**, **article**, **blog**, or **page** has no description, the meta description is no longer a generic fallback. It now uses a **unique** line per resource, e.g.:
  - Collection: `"[Collection title] – Vastu products at [Shop name]"`
  - Product: `"[Product title] – Buy at [Shop name]"`
  - Article: `"[Article title] – [Shop name]"`
  - Blog: `"[Blog title] – [Shop name]"`
  - Page: `"[Page title] – [Shop name]"`
- **Result:** Every page has a distinct meta description, reducing duplicate meta description issues.

### 3. Single H1 per page (19 pages with more than one H1)
- **Change:** Newsletter popups are not the main page heading. In all popup variants, the heading was changed from **`<h1>` to `<h2>`** in:
  - `snippets/popup-newsletter-v1.liquid` through `snippets/popup-newsletter-v6.liquid`
- **Result:** Only one H1 per page (product title, page title, article title, or hero), improving structure and avoiding duplicate H1/title combinations.

### 4. llms.txt for AI/LLM optimization (notice: llms.txt file not found)
- **Added:**
  - **`llms.txt`** in the theme root: ready to be uploaded in **Shopify Admin → Content → Files** so it can be linked or redirected to (e.g. from footer or sitemap). To serve at `https://hamaraghar.in/llms.txt` you may need an app or redirect depending on your plan.
  - **Page template “LLMs”:** `templates/page.llms.json` and `sections/main-llms.liquid` so the same information is available at **/pages/llms** (create a page with handle `llms` and assign the “LLMs” template).
- **Content:** Site description, sitemap URL (`https://hamaraghar.in/sitemap.xml`), crawl permissions, and contact.

### 5. Page loader image (visual stability / CLS)
- **Change:** In `layout/theme.liquid`, the page loader logo image now has explicit `height='60'` and `object-fit: contain` so space is reserved and layout shift is reduced when the loader is visible.

---

## What you need to do outside the theme

These require **Shopify Admin**, **apps**, or **content** changes; they cannot be fully fixed in Liquid alone.

### Critical

| Issue | Action |
|-------|--------|
| **150 broken internal links** | Run a broken-link checker (e.g. Screaming Frog, Sitebulb, or an SEO app). Fix or remove each broken URL in menus, footers, and page content. In Shopify, fix or delete the links in Navigation, footer sections, and any custom HTML. |
| **5 pages returning 4XX** | In **Online Store → Preferences** and any redirect apps, find the 4XX URLs. Either restore the pages, add **301 redirects** to the correct URLs, or remove links to those URLs. |
| **2 redirect chains/loops** | In **Settings → Online Store → Redirects** (or your redirect app), replace multi-hop redirects with **single 301 redirects** from old URL → final URL. |

### Warnings

| Issue | Action |
|-------|--------|
| **30 issues with blocked internal resources in robots.txt** | In **Online Store → Preferences**, check the **robots.txt** section. Do not block important CSS/JS or asset paths. Allow crawlers to access resources needed to render the page. Shopify’s default robots.txt is usually fine; if you used custom content, unblock any internal resources that should be crawlable. |
| **30 pages with low text-to-HTML ratio** | Prefer adding **meaningful text** (product descriptions, collection intros, page copy) and trimming unnecessary HTML/widgets on thin pages. |
| **4 pages with duplicate H1 and title** | Theme now has a single H1 per page and truncated titles. If any template still shows the same text in both `<title>` and `<h1>`, consider varying the title (e.g. add “Buy”, “Shop”, or “– [Shop name]”) so H1 and title are not identical. |

### Notices

| Issue | Action |
|-------|--------|
| **31 URLs with permanent redirect** | Prefer **single 301** redirects. In **Redirects**, point each old URL directly to the final URL (no chain). |
| **15 orphan pages in sitemaps** | Add **internal links** from homepage, collection pages, blog, or footer to these pages so they’re no longer orphans. |
| **7 links with no anchor text** | Find links that use “click here”, “here”, or images without alt text; replace with **descriptive anchor text** (e.g. “Vastu Kit for Home”, “Shipping policy”). |
| **5 pages blocked from crawling** | In **Online Store → Preferences** or in a noindex app, review which pages are blocked and remove unnecessary restrictions. |
| **4 pages requiring content optimization** | Improve **keyword usage**, headings (H2/H3), and body copy on those 4 pages. |

---

## Performance (theme already helps)

The theme already uses:

- **Deferred CSS** (non-critical styles load after first paint)
- **Deferred JS** (theme scripts after `load` + `requestIdleCallback`)
- **GTM** loaded on interaction or after 8s
- **LCP preload** for product featured image and key assets
- **Lazy loading** in the image snippet (when not LCP)
- **Preconnect/dns-prefetch** for critical origins

To push **load time** and **interactivity** further:

1. **Shopify:** Enable **Shopify CDN** and consider a **performance app** (e.g. image optimization, lazy load, minification) if needed.
2. **Images:** Prefer **WebP/AVIF** where possible; use Shopify’s image CDN (e.g. `image_url` with width/format).
3. **Caching:** Rely on Shopify’s built-in caching; if you use a third-party CDN, enable **gzip/Brotli** and cache static assets.
4. **Mobile:** Reduce image sizes and use **responsive images** (the theme’s image snippet already supports `widths`/`sizes`).

---

## Checklist after deployment

- [ ] Create a **page** with handle **llms**, assign template **LLMs**, and optionally link to it (e.g. footer or llms.txt instructions).
- [ ] Upload **llms.txt** in **Content → Files** and, if desired, add a redirect or link so AI crawlers can find it (e.g. at /llms.txt if your setup allows).
- [ ] Review **robots.txt** in **Online Store → Preferences** and unblock any internal resources that were incorrectly blocked.
- [ ] Fix **broken links** and **4XX** pages using redirects or by updating/removing links.
- [ ] Replace **redirect chains** with single 301 redirects.
- [ ] Add **internal links** to orphan pages and fix **anchor text** on the 7 links.
- [ ] Re-run an SEO audit (e.g. Ubersuggest, Lighthouse) to confirm improvements.

---

## Expected outcomes

- **SEO:** Fewer duplicate meta descriptions, better title length, single H1 per page, llms.txt available.
- **Core Web Vitals:** Theme changes (title/meta, H1, loader image) support stability and clarity; further gains depend on server/CDN, images, and fixing 4XX/redirects.
- **Clean redirect architecture:** After you fix chains and 4XXs in Admin, redirects will be cleaner and crawlability will improve.
