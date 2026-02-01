#!/usr/bin/env node
/**
 * Minify CSS and JS in assets/ to .min.css and .min.js for faster load times.
 * Run: npm run minify
 */

const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify: terserMinify } = require('terser');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');

function minifyCSS() {
  const minifier = new CleanCSS({ level: 2 });
  const files = fs.readdirSync(ASSETS_DIR).filter((f) => f.endsWith('.css') && !f.endsWith('.min.css'));
  let count = 0;
  for (const file of files) {
    const inputPath = path.join(ASSETS_DIR, file);
    const outputPath = path.join(ASSETS_DIR, file.replace(/\.css$/, '.min.css'));
    try {
      const result = minifier.minify(fs.readFileSync(inputPath, 'utf8'));
      if (result.errors.length) throw new Error(result.errors.join('; '));
      fs.writeFileSync(outputPath, result.styles, 'utf8');
      count++;
      console.log('  ' + file + ' → ' + path.basename(outputPath));
    } catch (err) {
      console.warn('  Skip ' + file + ': ' + err.message);
    }
  }
  return count;
}

async function minifyJS() {
  const files = fs
    .readdirSync(ASSETS_DIR)
    .filter((f) => f.endsWith('.js') && !f.endsWith('.min.js') && !f.endsWith('.LICENSE.txt'));
  let count = 0;
  for (const file of files) {
    const inputPath = path.join(ASSETS_DIR, file);
    const outputPath = path.join(ASSETS_DIR, file.replace(/\.js$/, '.min.js'));
    try {
      const code = fs.readFileSync(inputPath, 'utf8');
      const result = await terserMinify(code, { compress: true, mangle: true, format: { comments: false } });
      if (result.error) throw result.error;
      fs.writeFileSync(outputPath, result.code, 'utf8');
      count++;
      console.log('  ' + file + ' → ' + path.basename(outputPath));
    } catch (err) {
      console.warn('  Skip ' + file + ': ' + err.message);
    }
  }
  return count;
}

async function main() {
  console.log('Minifying CSS...');
  const cssCount = minifyCSS();
  console.log('Minifying JS...');
  const jsCount = await minifyJS();
  console.log('Done. CSS: ' + cssCount + ' files, JS: ' + jsCount + ' files.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
