// Static checks on the built site (run `npm run build` first):
// one H1 per page, unique titles/descriptions, canonical + reciprocal
// hreflang, valid JSON-LD, every internal link and anchor resolves, sitemap
// and robots.txt consistent. Exits non-zero on any error.
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const errors = [];
const warnings = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const exists = (file) => stat(file).then(() => true, () => false);
const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const files = await walk(dist);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const pages = new Map(); // url path -> { file, html, ids }

for (const file of htmlFiles) {
  const rel = '/' + relative(dist, file).replace(/\\/g, '/');
  const path = rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel;
  const html = await readFile(file, 'utf8');
  pages.set(path, { file: rel, html, ids: new Set(all(html, /\sid="([^"]+)"/g)) });
}

const robots = await readFile(join(dist, 'robots.txt'), 'utf8').catch(() => '');
const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8').catch(() => '');
const origin = robots.match(/Sitemap:\s*(\S+)\/sitemap\.xml/)?.[1];
if (!origin) fail('robots.txt', 'missing Sitemap line');
if (/Disallow:\s*\/\s*$/m.test(robots)) fail('robots.txt', 'blocks the whole site');
const sitemapUrls = all(sitemap, /<loc>([^<]+)<\/loc>/g);

const titles = new Map();
const descriptions = new Map();

for (const [path, { file, html }] of pages) {
  const isIndexable = !/<meta name="robots" content="[^"]*noindex/.test(html);
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(file, `expected 1 <h1>, found ${h1s.length}`);

  const lang = html.match(/<html lang="([^"]+)"/)?.[1];
  if (!lang) fail(file, 'missing <html lang>');

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!title) fail(file, 'missing <title>');
  if (!description) fail(file, 'missing meta description');
  if (isIndexable && title && decode(title).length > 70) warn(file, `title is ${decode(title).length} chars`);
  if (isIndexable && description && (decode(description).length < 70 || decode(description).length > 170)) {
    warn(file, `description is ${decode(description).length} chars`);
  }

  // Heading order: no level skipped going down (h2 -> h4).
  let prev = 1;
  for (const level of all(html, /<h([1-6])[\s>]/g).map(Number)) {
    if (level > prev + 1) fail(file, `heading jumps from h${prev} to h${level}`);
    prev = level;
  }

  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    if (attr(img, 'alt') === undefined) fail(file, `<img> without alt: ${img.slice(0, 80)}`);
    if (!attr(img, 'width') || !attr(img, 'height')) fail(file, `<img> without width/height: ${img.slice(0, 80)}`);
  }

  for (const json of all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(json);
    } catch (e) {
      fail(file, `invalid JSON-LD: ${e.message}`);
    }
  }

  if (!isIndexable) {
    if (sitemapUrls.some((u) => u === `${origin}${path}`)) fail(file, 'noindex page listed in sitemap');
    continue;
  }

  if (titles.has(title)) fail(file, `duplicate title with ${titles.get(title)}`);
  titles.set(title, file);
  if (descriptions.has(description)) fail(file, `duplicate description with ${descriptions.get(description)}`);
  descriptions.set(description, file);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== `${origin}${path}`) fail(file, `canonical ${canonical} should be ${origin}${path}`);
  if (!sitemapUrls.includes(`${origin}${path}`)) fail(file, 'indexable page missing from sitemap');

  // hreflang: self-reference + every alternate points back.
  const alternates = new Map(
    all(html, /<link rel="alternate" (hreflang="[^"]+" href="[^"]+")>/g).map((s) => [attr(` ${s}`, 'hreflang'), attr(` ${s}`, 'href')]),
  );
  if (alternates.get(lang) !== canonical) fail(file, `hreflang="${lang}" should equal the canonical`);
  if (!alternates.has('x-default')) fail(file, 'missing hreflang x-default');
  for (const [code, href] of alternates) {
    const target = pages.get(href.replace(origin, ''));
    if (!target) {
      fail(file, `hreflang ${code} -> ${href} does not exist`);
    } else if (!target.html.includes(`hreflang="${lang}" href="${canonical}"`)) {
      fail(file, `hreflang ${code} -> ${href} does not link back`);
    }
  }
}

// Internal links and anchors.
for (const [path, { file, html, ids }] of pages) {
  for (const tag of html.match(/<a\b[^>]*>/g) ?? []) {
    const href = attr(tag, 'href');
    if (!href) {
      fail(file, `<a> without href: ${tag}`);
      continue;
    }
    if (attr(tag, 'target') === '_blank' && !/noopener/.test(attr(tag, 'rel') ?? '')) {
      fail(file, `target=_blank without rel=noopener: ${href}`);
    }
    if (/^(mailto:|tel:|https?:)/.test(href)) continue;

    const [target, hash] = href.split('#');
    const targetPath = target === '' ? path : target;
    const page = pages.get(targetPath);
    if (!page) {
      fail(file, `broken link ${href}`);
    } else if (hash && !page.ids.has(hash)) {
      fail(file, `broken anchor ${href}`);
    }
  }
  for (const src of [...all(html, /\ssrc="(\/[^"]+)"/g), ...all(html, /<link[^>]+href="(\/[^"]+)"/g)]) {
    if (!(await exists(join(dist, src)))) fail(file, `missing asset ${src}`);
  }
}

for (const url of sitemapUrls) {
  if (!pages.has(url.replace(origin, ''))) fail('sitemap.xml', `${url} has no page`);
}

console.log(`Checked ${pages.size} HTML files, ${sitemapUrls.length} sitemap URLs.`);
warnings.forEach((w) => console.warn(`warn  ${w}`));
errors.forEach((e) => console.error(`error ${e}`));
if (errors.length) {
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log('All checks passed.');
