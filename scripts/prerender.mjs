// Writes one static HTML file per route, plus 404.html, sitemap.xml and
// robots.txt, into dist/. Runs after the client and SSR builds (see package.json).
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const manifest = JSON.parse(await readFile(join(dist, '.vite/manifest.json'), 'utf8'));
const { routes, renderPage, NOT_FOUND_PATH, FORM_PAGES, siteUrl } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

/** Resolves a manifest entry to its JS file, its CSS and the chunks it imports. */
function entry(src) {
  const chunk = manifest[src];
  if (!chunk) throw new Error(`Missing ${src} in the Vite manifest`);
  const imports = (chunk.imports ?? []).map((key) => `/${manifest[key].file}`);
  return { file: `/${chunk.file}`, css: (chunk.css ?? []).map((f) => `/${f}`), imports };
}

const style = entry('src/styles/style.css');
const main = entry('src/client/main.js');
const forms = entry('src/client/forms.jsx');
const assets = {
  css: [style.file],
  preloads: [],
  modules: [main.file],
  islands: { forms: forms.file },
};

const outputFile = (path) => join(dist, path.endsWith('/') ? `${path}index.html` : path);

for (const route of routes) {
  const file = outputFile(route.path);
  const routeAssets = FORM_PAGES.includes(route.pageId) ? { ...assets, preloads: forms.imports } : assets;
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, renderPage(route, routeAssets));
}
await writeFile(outputFile(NOT_FOUND_PATH), renderPage(null, assets));

// Sitemap with hreflang alternates for every indexable page.
const origin = siteUrl;
const urls = routes.map((route) => {
  const versions = routes.filter((alt) => alt.pageId === route.pageId);
  const alternates = versions
    .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${origin}${alt.path}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${versions[0].path}"/>`)
    .join('\n');
  return `  <url>\n    <loc>${origin}${route.path}</loc>\n${alternates}\n  </url>`;
});
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
);

await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

// Build-only artifacts: not part of the published site.
await rm(ssrDir, { recursive: true, force: true });
await rm(join(dist, '.vite'), { recursive: true, force: true });

console.log(`Prerendered ${routes.length} pages + 404.html, sitemap.xml and robots.txt for ${origin}`);
if (/localhost/.test(origin)) {
  console.warn('\n⚠ VITE_SITE_URL points to localhost: canonical URLs, hreflang and the sitemap would be wrong in production.\n');
}
