// Language-independent site data. All translatable copy lives in ./locales/{fr,en}.js.
import { projects } from './projects';

export const brand = {
  name: 'TicTek',
  // Other spellings people type; helps Google tie them to the brand.
  alternateNames: ['Tictek', 'TICTEK', 'Tic Tek'],
  logo: '/img/logo/logo_vf_light.png',
  logoDark: '/img/logo/logo_vf_dark.png',
  logoSquare: '/icon-512.png',
  ogImage: { fr: '/img/og-image-fr.png', en: '/img/og-image-en.png' },
};

// Absolute origin used for canonical URLs, hreflang, the sitemap and Open
// Graph. tictek.mg redirects to www on Vercel, so www is the canonical host.
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://www.tictek.mg').replace(/\/+$/, '');

export const contactInfo = {
  email: 'contact@tictek.mg',
  phone: '+261 38 47 110 37',
  city: 'Antananarivo',
  countryCode: 'MG',
};

// Google Analytics 4 (src/client/consent.js). Empty: no banner, no analytics.
export const analyticsId = import.meta.env.VITE_GA_ID ?? '';

export const languages = ['fr', 'en'];
// Each language named in itself, for the language switcher.
export const languageNames = { fr: 'Français', en: 'English' };
export const defaultLang = 'fr';

// Page ids, in nav order. "work" is only built once projects.js has entries,
// so the site never shows an empty portfolio.
export const hasProjects = projects.length > 0;
export const pageIds = [
  'home',
  'services',
  ...(hasProjects ? ['work'] : []),
  'collaboration',
  'pricing',
  'about',
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
  },
};

export const absoluteUrl = (path) => `${siteUrl}${path}`;

// Service anchors on the services page, shared by both languages.
export const serviceIds = ['web', 'mobile', 'saas-api', 'automation', 'ai', 'web3', 'maintenance'];

// Technologies scrolled under the home hero. Logos are self-hosted in
// public/img/tech/ (Devicon, MIT; n8n, OpenAI, Expo, Ethereum and Ethers from Simple Icons, CC0).
// Single-colour black logos, inverted in the dark theme.
const MONO_LOGOS = new Set(['nextjs', 'expo', 'openai', 'solidity', 'ethereum']);

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
].map(([name, file]) => ({ name, logo: `/img/tech/${file}.svg`, mono: MONO_LOGOS.has(file) }));

export const modelIds = ['project', 'white-label', 'staff-augmentation'];
