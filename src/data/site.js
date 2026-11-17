// Language-independent site data. All translatable copy lives in ./locales/{fr,en}.js.
import { projects } from './projects';
import { posts } from './posts';

export const brand = {
  name: 'TicTek',
  // Other spellings people type; helps Google tie them to the brand.
  alternateNames: ['Tictek', 'TICTEK', 'Tic Tek'],
  logo: '/img/logo/logo_vf_light.png',
  logoSquare: '/icon-512.png',
  ogImage: { fr: '/img/og-image-fr.png', en: '/img/og-image-en.png' },
};

// Absolute origin used for canonical URLs, hreflang, the sitemap and Open
// Graph. tictek.mg redirects to www on Vercel, so www is the canonical host.
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://www.tictek.mg').replace(/\/+$/, '');

export const contactInfo = {
  email: 'contact@tictek.mg',
  phone: '+261 38 47 110 37',
  // Same number, digits only, for wa.me links (WhatsAppButton.jsx).
  whatsapp: '261384711037',
  city: 'Antananarivo',
  countryCode: 'MG',
};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/tictek-mg',
};

// Countries we have worked for, shown on the home page and given to Google
// as areaServed. Lowercase ISO codes: they key the flags (Flag.jsx) and the
// names in locales (countries). Only list countries with real clients.
export const clientCountries = ['mu', 'mg', 'fr', 'ae'];
// Continents covered by clientCountries (Africa, Europe, Asia), shown on the home page.
export const continentCount = 3;

// Live clocks on the home page (src/client/clocks.js fills in the time and
// the gap with Madagascar, so daylight saving time is always right). The
// first entry is our own time zone. City names live in locales (cities).
export const clocks = [
  { id: 'antananarivo', flag: 'mg', timeZone: 'Indian/Antananarivo' },
  { id: 'port-louis', flag: 'mu', timeZone: 'Indian/Mauritius' },
  { id: 'dubai', flag: 'ae', timeZone: 'Asia/Dubai' },
  { id: 'paris', flag: 'fr', timeZone: 'Europe/Paris' },
  { id: 'geneva', flag: 'ch', timeZone: 'Europe/Zurich' },
  { id: 'montreal', flag: 'ca', timeZone: 'America/Toronto' },
];

// Google Analytics 4 (src/client/consent.js). Empty: no banner, no analytics.
export const analyticsId = import.meta.env.VITE_GA_ID ?? '';

export const languages = ['fr', 'en'];
// Each language named in itself, for the language switcher.
export const languageNames = { fr: 'Français', en: 'English' };
export const defaultLang = 'fr';

// Page ids, in nav order. "work" and "blog" are only built once projects.js
// and posts.js have entries, so the site never shows an empty page.
export const hasProjects = projects.length > 0;
export const hasPosts = posts.length > 0;
export const pageIds = [
  'home',
  'services',
  ...(hasProjects ? ['work'] : []),
  'collaboration',
  'pricing',
  'about',
  ...(hasPosts ? ['blog'] : []),
  'careers',
  'contact',
  'privacy',
];
// Header links (Contact is the header button). Careers lives in the footer.
export const navIds = pageIds.filter((id) => !['home', 'contact', 'careers', 'privacy'].includes(id));
// Footer "Company" column. Privacy is linked in the footer's bottom line.
export const companyIds = pageIds.filter((id) => !['home', 'services', 'contact', 'privacy'].includes(id));

export const paths = {
  fr: {
    home: '/',
    services: '/services/',
    work: '/realisations/',
    collaboration: '/collaboration/',
    pricing: '/tarifs/',
    about: '/a-propos/',
    careers: '/nous-rejoindre/',
    contact: '/contact/',
    privacy: '/confidentialite/',
    blog: '/blog/',
  },
  en: {
    home: '/en/',
    services: '/en/services/',
    work: '/en/work/',
    collaboration: '/en/engagement-models/',
    pricing: '/en/pricing/',
    about: '/en/about/',
    careers: '/en/careers/',
    contact: '/en/contact/',
    privacy: '/en/privacy/',
    blog: '/en/blog/',
  },
};

// Each blog post is a page of its own, with the id "post:<slug>". They are
// not in pageIds (no nav or footer link) but get routes, paths and a sitemap
// entry like any other page.
export const postPageId = (slug) => `post:${slug}`;
export const postPageIds = posts.map((post) => postPageId(post.slug));
for (const lang of Object.keys(paths)) {
  for (const post of posts) paths[lang][postPageId(post.slug)] = `${paths[lang].blog}${post.slug}/`;
}
export const findPost = (pageId) => posts.find((post) => postPageId(post.slug) === pageId);

export const absoluteUrl = (path) => `${siteUrl}${path}`;

// Service anchors on the services page, shared by both languages.
export const serviceIds = ['web', 'mobile', 'saas-api', 'automation', 'ai', 'web3', 'maintenance'];

// Technologies scrolled under the home hero. Logos are self-hosted in
// public/img/tech/ (Devicon, MIT; n8n, OpenAI, Expo, Ethereum and Ethers from Simple Icons, CC0).
// Categories are interleaved so each kind (web, back end, mobile, AI, Web3…)
// shows up within the first seconds of the scroll.
export const techLogos = [
  ['React', 'react'],
  ['Node.js', 'nodejs'],
  ['Solidity', 'solidity'],
  ['React Native', 'react'],
  ['Spring Boot', 'spring'],
  ['Ethereum', 'ethereum'],
  ['Next.js', 'nextjs'],
  ['OpenAI', 'openai'],
  ['Polygon', 'polygon'],
  ['PostgreSQL', 'postgresql'],
  ['Hardhat', 'hardhat'],
  ['TypeScript', 'typescript'],
  ['Docker', 'docker'],
  ['Ethers.js', 'ethers'],
  ['Angular', 'angular'],
  ['n8n', 'n8n'],
  ['Java', 'java'],
  ['Vue.js', 'vuejs'],
  ['.NET', 'dotnetcore'],
  ['Expo', 'expo'],
  ['MongoDB', 'mongodb'],
  ['Tailwind CSS', 'tailwindcss'],
  ['C#', 'csharp'],
  ['Redis', 'redis'],
  ['PHP', 'php'],
  ['MySQL', 'mysql'],
  ['GitHub Actions', 'githubactions'],
  ['GitLab CI', 'gitlab'],
].map(([name, file]) => ({ name, logo: `/img/tech/${file}.svg` }));

export const modelIds = ['project', 'white-label', 'staff-augmentation'];
