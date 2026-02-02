# Product Description Logic

This doc explains how product description is rendered in the theme: the **accordion parsing** in the product info block and the **description snippets** used in product templates.

---

## 1. Where it lives

- **Accordion / “script” logic:** `snippets/product-info-content.liquid` — block type `'description'`.
- **Simple description snippets:** `snippets/product-description-style3.liquid`, `product-description-style4.liquid`, etc.
- **Optional plain snippet:** `snippets/product-description-accordion.liquid` (no accordion, just a wrapper div).

---

## 2. Accordion logic (product-info-content, block type `description`)

When the product info content block is **description**, it does one of two things:

### A. Description has headings (h2, h3, or h4)

1. **Detect headings**  
   `product.description` is checked for `<h2`, `<h3`, or `<h4`.

2. **Normalize and split**
   - Place a virtual marker before each heading:  
     `[[HEADING]]` before `<h2`, `<h3`, and `<h4`.
   - Split the full HTML by `[[HEADING]]` to get sections.

3. **Per section**
   - If the section **contains** a heading:
     - Find the closing tag (`</h2>`, `</h3>`, or `</h4>`).
     - Split on that closing tag to get:
       - **Heading HTML** (from start up to and including the closing tag).
       - **Body** (content after the closing tag, up to the next `[[HEADING]]` if present).
     - **Heading text** = heading HTML with all HTML stripped, then:
       - Strip/remove emoji and symbols (e.g. ❓, ❔, ?, 🔍, 💡, ➤, →, •, etc.).
       - Trim leading/trailing spaces and optional leading punctuation (space, `?`, `!`, `:`, `-`).
     - **Body** is cleaned (strip, remove stray fragments like `2&gt;`, `3&gt;`, `4&gt;`).
     - If `heading_text` is not blank → render one accordion item:
       - **Trigger:** `heading_text` as the visible title.
       - **Content:** `section_content` (the body HTML).
       - First such item gets `xo-active` so it’s open by default.
   - If the section **does not** contain a heading (e.g. intro before first heading):
     - Treat whole section as one accordion:
       - **Trigger:** title “Description”.
       - **Content:** that section’s HTML.
     - Only the first of these is open by default.

4. **IDs**  
   Accordion items use names like `desc-<index>-<block.id>`, or `desc-intro-<block.id>` for the intro section.

### B. Description has no headings

1. **Optional “mini” description**
   - If block setting `use_mini_description` is true:
     - **Source (in order):**
       - `block.settings.custom_mini_description`, or
       - `product.metafields.custom.mini_description`, or
       - Plain text of `product.description` truncated by word count (`truncation_length`, default 50).
     - Rendered in a wrapper: `xo-product-info-content__description--mini`.

2. **Full description as one accordion**
   - One accordion item:
     - **Trigger:** “Product Description”.
     - **Content:** full `product.description` HTML.
   - This item is **not** open by default (no `xo-active`).

### C. When description is blank

If `product.description` is blank, the whole description block still runs but there’s nothing to show, so no accordions or mini description are output.

---

## 3. Description snippets (style3, style4, etc.)

Used in product templates (e.g. `content_liquid` / `custom_liquid` in JSON templates).

- **product-description-style3 / style4**
  - Load their CSS (`product-description-style3.min.css` or `product-description-style4.min.css`).
  - Wrap content in a div with class `product-description-style3` or `product-description-style4`.
  - If `product.description != blank`: output `product.description` (raw HTML).
  - Else: output a single paragraph with translated “No description” text (fallback: “No description available.”).

- **product-description-style8 (and similar layout styles)**
  - May use fixed copy/layout (e.g. “Transform Your Space…”) and an image instead of `product.description`; used for layout variants rather than dynamic description.

---

## 4. product-description-accordion snippet

- **Input:** `description` (e.g. `product.description`).
- **Behavior:** If `description` is not blank, output it inside `<div class='product-description-content'>`. No accordion, no heading parsing.

---

## 5. Block setting that affects accordion

- **hide_if_in_tabs**  
  If true, the description block is not rendered when description is already shown in tabs/accordions elsewhere (avoids duplicate description on the page).

---

## 6. Summary

| Scenario | Behavior |
|----------|----------|
| Description has h2/h3/h4 | Split by headings → one accordion item per heading (title = heading text, content = following body); optional “Description” accordion for content before first heading. First item open. |
| Description has no headings | Optional mini description (custom/metafield/truncated); then one “Product Description” accordion with full HTML (closed by default). |
| Style snippets (e.g. style3/style4) | Output `product.description` in a styled div, or “No description” message. |
| product-description-accordion | Output `description` in a simple div, no accordion. |

All of the above is the “script” and rendering logic for product description in this theme; this file is the doc that explains it.
