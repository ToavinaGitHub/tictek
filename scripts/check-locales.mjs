// Checks that the French and English copy have exactly the same keys (and
// list lengths), so no page shows a missing string in one language.
// Loads the locales through Vite, which resolves extensionless imports.
import { createServer } from 'vite';

const server = await createServer({ logLevel: 'error', server: { middlewareMode: true }, appType: 'custom' });
let failed = false;
try {
  const load = async (path) => (await server.ssrLoadModule(path)).default;
  const fr = await load('/src/data/locales/fr.js');
  const en = await load('/src/data/locales/en.js');
  const shape = (value, path = '') =>
    value && typeof value === 'object'
      ? Object.entries(value).flatMap(([key, child]) => [`${path}.${key}`, ...shape(child, `${path}.${key}`)])
      : [];
  const a = new Set(shape(fr));
  const b = new Set(shape(en));
  const onlyFr = [...a].filter((key) => !b.has(key));
  const onlyEn = [...b].filter((key) => !a.has(key));
  for (const key of onlyFr) console.error(`error only in fr.js: ${key}`);
  for (const key of onlyEn) console.error(`error only in en.js: ${key}`);
  failed = onlyFr.length + onlyEn.length > 0;
  if (!failed) console.log(`Locales match: ${a.size} keys in each language.`);
} finally {
  await server.close();
}
process.exit(failed ? 1 : 0);
