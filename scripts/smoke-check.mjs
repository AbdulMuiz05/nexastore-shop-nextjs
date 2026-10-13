import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const required = [
  'app/layout.js', 'app/page.js', 'app/products/page.js', 'app/products/[id]/page.js',
  'app/about/page.js', 'app/not-found.js', 'app/api/products/route.js',
  'app/api/products/[id]/route.js', 'components/ProductFilters.jsx',
  'components/ProductCard.jsx', 'lib/products.js', 'docs/NEXTJS-FUNDAMENTALS.md', 'README.md'
];
const missing = required.filter((file) => !existsSync(join(root, file)));
if (missing.length) {
  console.error('Missing required files:', missing.join(', '));
  process.exitCode = 1;
} else {
  console.log(`PASS: all ${required.length} required project files exist`);
}

const productSource = readFileSync(join(root, 'lib/products.js'), 'utf8');
const ids = [...productSource.matchAll(/id:\s*'([^']+)'/g)].map((match) => match[1]);
if (ids.length < 8 || new Set(ids).size !== ids.length) {
  console.error('FAIL: expected at least 8 unique product IDs');
  process.exitCode = 1;
} else {
  console.log(`PASS: ${ids.length} unique product records declared`);
}

const routeSource = readFileSync(join(root, 'app/products/page.js'), 'utf8');
const detailSource = readFileSync(join(root, 'app/products/[id]/page.js'), 'utf8');
const aboutSource = readFileSync(join(root, 'app/about/page.js'), 'utf8');
const clientSource = readFileSync(join(root, 'components/ProductFilters.jsx'), 'utf8');
const checks = [
  ['SSR route configured', routeSource.includes("dynamic = 'force-dynamic'")],
  ['ISR detail route configured', detailSource.includes('revalidate = 60')],
  ['Static params configured', detailSource.includes('generateStaticParams')],
  ['Client Component declared', clientSource.startsWith("'use client'")],
  ['About route exists for SSG', aboutSource.includes('export default function AboutPage')],
  ['Product list API exists', existsSync(join(root, 'app/api/products/route.js'))],
  ['Product detail API exists', existsSync(join(root, 'app/api/products/[id]/route.js'))]
];
for (const [label, pass] of checks) {
  console.log(`${pass ? 'PASS' : 'FAIL'}: ${label}`);
  if (!pass) process.exitCode = 1;
}

const images = ['hero.svg', 'promo.svg', 'orbit-watch.svg', 'lumen-lamp.svg', 'nimbus-mat.svg', 'echo-headphones.svg', 'arc-bottle.svg', 'form-speaker.svg', 'terra-planter.svg', 'daily-tote.svg'];
for (const image of images) {
  if (!existsSync(join(root, 'public/images', image))) {
    console.error(`FAIL: missing image ${image}`);
    process.exitCode = 1;
  }
}
if (!process.exitCode) console.log(`PASS: all ${images.length} local SVG assets exist`);
