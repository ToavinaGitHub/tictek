import { absoluteUrl, brand, contactInfo, languages, defaultLang, paths, serviceIds, siteUrl } from '../data/site';
import { translations } from '../i18n';

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// JSON-LD lives inside <script>: escape "<" so the content can't close the tag.
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

const organizationId = `${siteUrl}/#organization`;

function organization() {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: brand.name,
    url: absoluteUrl('/'),
    logo: absoluteUrl(brand.logo),
    email: contactInfo.email,
    telephone: contactInfo.phone.replace(/\s+/g, ''),
    address: {
      '@type': 'PostalAddress',
      addressLocality: contactInfo.city,
      addressCountry: contactInfo.countryCode,
    },
  };
}

function structuredData(pageId, lang) {
  const t = translations[lang];
  const url = absoluteUrl(paths[lang][pageId]);

  if (pageId === 'home') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        organization(),
        {
          '@type': 'WebSite',
          '@id': `${absoluteUrl(paths[lang].home)}#website`,
          url: absoluteUrl(paths[lang].home),
          name: brand.name,
          inLanguage: lang,
          publisher: { '@id': organizationId },
        },
      ],
    };
  }

  const graph = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.common.nav.home, item: absoluteUrl(paths[lang].home) },
        { '@type': 'ListItem', position: 2, name: t.common.nav[pageId], item: url },
      ],
    },
  ];

  if (pageId === 'services') {
    graph.push(organization());
    for (const id of serviceIds) {
      graph.push({
        '@type': 'Service',
        name: t.services[id].title,
        description: t.services[id].short,
        url: `${url}#${id}`,
        provider: { '@id': organizationId },
      });
    }
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * Builds the <head> contents for one page.
 * `assets` = { css: [hrefs], modules: [srcs], preloads: [srcs] } from the build manifest (or dev server).
 */
export function renderHead({ pageId, lang, assets, indexable = true }) {
  const t = translations[lang];
  const page = t.pages[pageId];
  const path = paths[lang][pageId];
  const tags = [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}">`,
    '<meta name="theme-color" content="#ffffff">',
    '<meta name="color-scheme" content="light">',
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
    '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
    '<link rel="preload" href="/fonts/manrope-latin-var.woff2" as="font" type="font/woff2" crossorigin>',
    ...assets.css.map((href) => `<link rel="stylesheet" href="${href}">`),
    ...assets.preloads.map((src) => `<link rel="modulepreload" href="${src}">`),
  ];

  if (indexable && path) {
    const url = absoluteUrl(path);
    tags.push(`<link rel="canonical" href="${url}">`);
    for (const code of languages) {
      tags.push(`<link rel="alternate" hreflang="${code}" href="${absoluteUrl(paths[code][pageId])}">`);
    }
    tags.push(`<link rel="alternate" hreflang="x-default" href="${absoluteUrl(paths[defaultLang][pageId])}">`);

    const otherLangs = languages.filter((code) => code !== lang);
    tags.push(
      '<meta property="og:type" content="website">',
      `<meta property="og:site_name" content="${brand.name}">`,
      `<meta property="og:title" content="${escapeHtml(page.title)}">`,
      `<meta property="og:description" content="${escapeHtml(page.description)}">`,
      `<meta property="og:url" content="${url}">`,
      `<meta property="og:image" content="${absoluteUrl(brand.ogImage[lang])}">`,
      '<meta property="og:image:width" content="1200">',
      '<meta property="og:image:height" content="630">',
      `<meta property="og:image:alt" content="${brand.name}">`,
      `<meta property="og:locale" content="${t.ogLocale}">`,
      ...otherLangs.map((code) => `<meta property="og:locale:alternate" content="${translations[code].ogLocale}">`),
      '<meta name="twitter:card" content="summary_large_image">',
      jsonLd(structuredData(pageId, lang)),
    );
  } else {
    tags.push('<meta name="robots" content="noindex">');
  }

  tags.push(...assets.modules.map((src) => `<script type="module" src="${src}"></script>`));
  return tags.join('\n    ');
}
