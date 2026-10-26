// Build-time renderer: scripts/prerender.mjs (production) and the dev
// middleware in vite.config.js call renderPage() for every route. Pages are
// plain HTML; the only client code is src/client/main.js (menu) and the
// contact form island (src/client/contact.jsx).
import { renderToStaticMarkup } from 'react-dom/server';
import { languages, pageIds, paths } from './data/site';
import { LocaleProvider } from './i18n';
import { renderHead } from './seo/head';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Collaboration from './pages/Collaboration';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export { siteUrl } from './data/site';

const PAGES = { home: Home, services: Services, work: Work, collaboration: Collaboration, about: About, contact: Contact };

export const NOT_FOUND_PATH = '/404.html';

/** Every indexable route: { lang, pageId, path }. */
export const routes = languages.flatMap((lang) => pageIds.map((pageId) => ({ lang, pageId, path: paths[lang][pageId] })));

export function findRoute(path) {
  return routes.find((route) => route.path === path);
}

/**
 * @param route   { lang, pageId } from `routes`, or null for the 404 page
 * @param assets  { css, modules, preloads, islands: { contact } }
 */
export function renderPage(route, assets) {
  const { lang, pageId } = route ?? { lang: 'fr', pageId: 'notFound' };
  const Page = PAGES[pageId] ?? NotFound;
  const pageAssets = {
    ...assets,
    modules: pageId === 'contact' ? [...assets.modules, assets.islands.contact] : assets.modules,
  };

  const body = renderToStaticMarkup(
    <LocaleProvider lang={lang}>
      <Layout pageId={pageId}>
        <Page />
      </Layout>
    </LocaleProvider>,
  );

  return `<!doctype html>
<html lang="${lang}">
  <head>
    ${renderHead({ pageId, lang, assets: pageAssets, indexable: Boolean(route) })}
  </head>
  <body>
    ${body}
  </body>
</html>
`;
}
