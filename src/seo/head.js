import { absoluteUrl, brand, clientCountries, contactInfo, findPost, languages, defaultLang, paths, serviceIds, siteUrl, socialLinks } from '../data/site';
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
    alternateName: brand.alternateNames,
    description: translations.fr.pages.home.description,
    url: absoluteUrl('/'),
    // Google needs a logo at least 112px on each side: the square mark, not the wordmark.
    logo: absoluteUrl(brand.logoSquare),
    email: contactInfo.email,
    telephone: contactInfo.phone.replace(/\s+/g, ''),
    address: {
      '@type': 'PostalAddress',
      addressLocality: contactInfo.city,
      addressCountry: contactInfo.countryCode,
    },
    areaServed: clientCountries.map((code) => ({ '@type': 'Country', name: code.toUpperCase() })),
    sameAs: Object.values(socialLinks),
  };
}

/** Title and description of a page; blog posts take theirs from posts.js. */
function pageMeta(pageId, lang) {
  const post = findPost(pageId);
  if (!post) return translations[lang].pages[pageId];
  return { title: `${post.title[lang]} | ${brand.name}`, description: post.excerpt[lang], post };
}

function structuredData(pageId, lang) {
  const t = translations[lang];
  const url = absoluteUrl(paths[lang][pageId]);
  const post = findPost(pageId);

  if (post) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.common.nav.home, item: absoluteUrl(paths[lang].home) },
            { '@type': 'ListItem', position: 2, name: t.common.nav.blog, item: absoluteUrl(paths[lang].blog) },
            { '@type': 'ListItem', position: 3, name: post.title[lang], item: url },
          ],
        },
        organization(),
        {
          '@type': 'BlogPosting',
          headline: post.title[lang],
          description: post.excerpt[lang],
          image: absoluteUrl(post.image.src),
          datePublished: post.date,
          inLanguage: lang,
          url,
          mainEntityOfPage: url,
          author: { '@id': organizationId },
          publisher: { '@id': organizationId },
        },
      ],
    };
  }

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
          alternateName: brand.alternateNames,
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
  const page = pageMeta(pageId, lang);
  const path = paths[lang][pageId];
  const tags = [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}">`,
    // Skips the opening animation after the first page of a session (Loader.jsx).
    '<script src="/js/loader.js"></script>',
    '<meta name="color-scheme" content="light">',
    '<meta name="theme-color" content="#ffffff">',
    // Google's result favicon: /favicon.ico or a PNG that is a multiple of 48px.
    '<link rel="icon" href="/favicon.ico" sizes="48x48">',
    '<link rel="icon" href="/favicon-48x48.png" type="image/png" sizes="48x48">',
    '<link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192">',
    '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
    '<link rel="manifest" href="/site.webmanifest">',
    '<link rel="preload" href="/fonts/ibm-plex-sans-latin-var.woff2" as="font" type="font/woff2" crossorigin>',
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
    const { post } = page;
    const image = post
      ? { src: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt[lang] }
      : { src: brand.ogImage[lang], width: 1200, height: 630, alt: brand.name };
    tags.push(
      `<meta property="og:type" content="${post ? 'article' : 'website'}">`,
      ...(post ? [`<meta property="article:published_time" content="${post.date}">`] : []),
      `<meta property="og:site_name" content="${brand.name}">`,
      `<meta property="og:title" content="${escapeHtml(page.title)}">`,
      `<meta property="og:description" content="${escapeHtml(page.description)}">`,
      `<meta property="og:url" content="${url}">`,
      `<meta property="og:image" content="${absoluteUrl(image.src)}">`,
      `<meta property="og:image:width" content="${image.width}">`,
      `<meta property="og:image:height" content="${image.height}">`,
      `<meta property="og:image:alt" content="${escapeHtml(image.alt)}">`,
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
