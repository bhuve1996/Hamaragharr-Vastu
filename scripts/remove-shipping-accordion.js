/**
 * One-off script: Remove "Shipping & return" from product page accordion.
 * - Removes shipping block and "Shipping & return" collapse from main-product section.
 * - Removes shipping tab from product-information-tabs section.
 */
const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');
const SHIPPING_BLOCK_ID = '367088f1-d502-47f7-b8b1-1c3f0e2221ce';
const SHIPPING_RETURN_COLLAPSE_ID = 'ae0ed4c8-948a-46c7-b292-5f2687b8c94l';

const files = fs.readdirSync(TEMPLATES_DIR).filter((f) => f.startsWith('product') && f.endsWith('.json'));

const COMMENT_REGEX = /^\s*\/\*[\s\S]*?\*\/\s*/;

let changed = 0;
for (const file of files) {
  const filePath = path.join(TEMPLATES_DIR, file);
  let raw = fs.readFileSync(filePath, 'utf8');
  const commentMatch = raw.match(COMMENT_REGEX);
  const preamble = commentMatch ? commentMatch[0] : '';
  const jsonStr = commentMatch ? raw.slice(commentMatch[0].length) : raw;
  const data = JSON.parse(jsonStr);

  if (!data.sections || !data.sections['main-product']) {
    continue;
  }

  const mainProduct = data.sections['main-product'];
  let modified = false;

  if (mainProduct.blocks) {
    if (mainProduct.blocks[SHIPPING_BLOCK_ID]) {
      delete mainProduct.blocks[SHIPPING_BLOCK_ID];
      modified = true;
    }
    if (mainProduct.blocks[SHIPPING_RETURN_COLLAPSE_ID]) {
      delete mainProduct.blocks[SHIPPING_RETURN_COLLAPSE_ID];
      modified = true;
    }
  }

  if (mainProduct.block_order && Array.isArray(mainProduct.block_order)) {
    const before = mainProduct.block_order.length;
    mainProduct.block_order = mainProduct.block_order.filter(
      (id) => id !== SHIPPING_BLOCK_ID && id !== SHIPPING_RETURN_COLLAPSE_ID
    );
    if (mainProduct.block_order.length !== before) modified = true;
  }

  const tabs = data.sections['product-information-tabs'];
  if (tabs && tabs.blocks && tabs.blocks.tab2 && tabs.blocks.tab2.type === 'shipping') {
    delete tabs.blocks.tab2;
    if (tabs.block_order) {
      tabs.block_order = tabs.block_order.filter((id) => id !== 'tab2');
    }
    modified = true;
  }

  if (modified) {
    const out = preamble + JSON.stringify(data, null, 2) + '\n';
    fs.writeFileSync(filePath, out, 'utf8');
    changed++;
  }
}

console.log(`Updated ${changed} product template(s).`);
