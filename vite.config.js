import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The stylesheet is its own entry so every page links it in <head>, in dev
// as in production: importing it from JS would paint the page unstyled first.
const CLIENT_ENTRIES = {
  style: 'src/styles/style.css',
  main: 'src/client/main.js',
  forms: 'src/client/forms.jsx',
};

/**
 * Dev server: renders each page on request with the same code the
 * production prerender uses (src/entry-server.jsx), so `npm run dev`
 * shows real URLs (/services/, /en/about/…) instead of a SPA shell.
 */
function prerenderedPagesInDev() {
  return {
    name: 'tictek-dev-pages',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url.split('?')[0];
        if (!path.endsWith('/') && !path.endsWith('.html')) return next();

        try {
          const { findRoute, renderPage } = await server.ssrLoadModule('/src/entry-server.jsx');
          const route = findRoute(path);
          const html = renderPage(route ?? null, {
            css: [`/${CLIENT_ENTRIES.style}`],
            preloads: [],
            modules: [`/${CLIENT_ENTRIES.main}`],
            islands: { forms: `/${CLIENT_ENTRIES.forms}` },
          });
          res.statusCode = route ? 200 : 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(await server.transformIndexHtml(req.url, html));
        } catch (error) {
          server.ssrFixStacktrace(error);
          next(error);
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), prerenderedPagesInDev()],
  // Multi-page: real HTML per URL, no SPA fallback (unknown URLs get 404.html).
  appType: 'mpa',
  build: {
    manifest: true,
    rollupOptions: { input: CLIENT_ENTRIES },
  },
});
