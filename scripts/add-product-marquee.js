/**
 * Add product-page-marquee section to all product templates that don't have it.
 * Run: node scripts/add-product-marquee.js
 */
const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');
const MARQUEE_SECTION = `    "product-page-marquee": {
      "type": "marquee-v1",
      "blocks": {
        "item_1": { "type": "marquee_item", "settings": { "text": "Free Shipping on Orders Above ₹500", "icon_svg": "", "link": "" } },
        "item_2": { "type": "marquee_item", "settings": { "text": "100% Satisfaction Guaranteed", "icon_svg": "", "link": "" } },
        "item_3": { "type": "marquee_item", "settings": { "text": "Transform Your Home with Vastu", "icon_svg": "", "link": "" } },
        "item_4": { "type": "marquee_item", "settings": { "text": "Easy Self-Installation", "icon_svg": "", "link": "" } },
        "item_5": { "type": "marquee_item", "settings": { "text": "No Consultation Required", "icon_svg": "", "link": "" } }
      },
      "block_order": ["item_1", "item_2", "item_3", "item_4", "item_5"],
      "settings": {
        "speed": 30, "direction": "left", "gap": 30, "font_size": 1.2, "text_color": "#ffffff", "background_color": "#000000", "font_weight": 500,
        "width": "fullwidth", "content_width": "wide", "fullwidth_margin": 0, "color_scheme": "", "pause_on_hover": true,
        "section_padding_top_desktop": 0, "section_padding_bottom_desktop": 0, "section_margin_top_desktop": 0, "section_margin_bottom_desktop": 0,
        "section_padding_top_mobile": 0, "section_padding_bottom_mobile": 0, "section_margin_top_mobile": 0, "section_margin_bottom_mobile": 0
      }
    },
`;

const files = fs.readdirSync(TEMPLATES_DIR).filter(f => f.startsWith('product.') && f.endsWith('.json'));
let updated = 0;
for (const file of files) {
  const filePath = path.join(TEMPLATES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('"product-page-marquee"')) continue;
  if (!content.includes('"product-recommendations"')) continue;

  // Insert marquee section before product-recommendations (before the "product-recommendations": { line)
  content = content.replace(
    /(\n)(    "product-recommendations": \{\n)/,
    `$1${MARQUEE_SECTION}$2`
  );
  // Add product-page-marquee to order array (before "product-recommendations",)
  content = content.replace(
    /("product-recommendations",)(\s*\n\s*"[a-z_0-9]+_4e918e")/,
    '"product-page-marquee",\n    "product-recommendations",$2'
  );
  fs.writeFileSync(filePath, content);
  updated++;
  console.log('Updated:', file);
}
console.log('Done. Updated', updated, 'templates.');