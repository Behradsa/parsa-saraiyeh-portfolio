// Checks that the English and German text files match: same fields, same number of items,
// and the same pictures/links (only the words may differ). Run: npm run check:i18n
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'site/src/i18n';
const SAME = new Set(['src', 'logo', 'image', 'href', 'page', 'poster', 'webm', 'mp4', 'photo', 'w', 'h', 'cols', 'type',
  'frame', 'fit', 'pos', 'bg', 'border', 'link', 'newTab', 'chipsMobile', 'name', 'value', 'suffix']);
const files = (dir) => readdirSync(join(ROOT, 'en', dir), { withFileTypes: true })
  .flatMap((d) => (d.isDirectory() ? files(join(dir, d.name)) : d.name.endsWith('.json') ? [join(dir, d.name)] : []));
let errors = 0;
const err = (f, path, msg) => { errors++; console.error(`✗ ${f} ${path || '(root)'}: ${msg}`); };
function cmp(f, a, b, path = '') {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return err(f, path, 'should be a list');
    if (a.length !== b.length) err(f, path, `EN has ${a.length} items, DE has ${b.length}`);
    a.forEach((x, i) => i < b.length && cmp(f, x, b[i], `${path}[${i}]`));
  } else if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') return err(f, path, 'should be an object');
    for (const k of Object.keys(a)) {
      if (!(k in b)) { err(f, `${path}.${k}`, 'missing in DE'); continue; }
      if (SAME.has(k) && typeof a[k] !== 'object' && a[k] !== b[k] && !(k === 'name' && path === '')) err(f, `${path}.${k}`, `differs: "${a[k]}" vs "${b[k]}"`);
      else cmp(f, a[k], b[k], `${path}.${k}`);
    }
    for (const k of Object.keys(b)) if (!(k in a)) err(f, `${path}.${k}`, 'missing in EN');
  }
}
for (const f of files('')) {
  let de;
  try { de = JSON.parse(readFileSync(join(ROOT, 'de', f), 'utf8')); } catch { err(f, '', 'no German file'); continue; }
  cmp(f, JSON.parse(readFileSync(join(ROOT, 'en', f), 'utf8')), de);
}
if (errors) { console.error(`\n${errors} problem(s) between EN and DE.`); process.exit(1); }
console.log('✓ English and German text files match.');
