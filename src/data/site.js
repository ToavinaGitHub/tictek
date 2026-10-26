// Language-independent site data. All translatable copy lives in ./locales/{fr,en}.js.
import { projects } from './projects';

export const brand = {
  name: 'TicTek',
  logo: '/img/logo/logo_vf_light.png',
  logoDark: '/img/logo/logo_vf_dark.png',
  ogImage: { fr: '/img/og-image-fr.png', en: '/img/og-image-en.png' },
};

// Absolute origin used for canonical URLs, hreflang, the sitemap and Open
// Graph. Set VITE_SITE_URL in .env.production to the real domain.
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://www.tictek.example').replace(/\/+$/, '');

export const contactInfo = {
  email: 'contact@tictek.mg',
  phone: '+261 38 47 110 37',
  city: 'Antananarivo',
  countryCode: 'MG',
};

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
];
// Header links (Contact is the header button). Careers lives in the footer.
export const navIds = pageIds.filter((id) => !['home', 'contact', 'careers'].includes(id));
// Footer "Company" column.
export const companyIds = pageIds.filter((id) => !['home', 'services', 'contact'].includes(id));

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
  },
};

export const absoluteUrl = (path) => `${siteUrl}${path}`;

// Service anchors on the services page, shared by both languages.
export const serviceIds = ['web', 'mobile', 'saas-api', 'automation', 'ai', 'maintenance'];

// Technologies scrolled under the home hero. Logos are self-hosted in
// public/img/tech/ (Devicon, MIT; n8n, OpenAI and Expo from Simple Icons, CC0).
// Single-colour black logos, inverted in the dark theme.
const MONO_LOGOS = new Set(['nextjs', 'expo', 'openai']);

export const techLogos = [
  ['React', 'react'],
  ['Next.js', 'nextjs'],
  ['Angular', 'angular'],
  ['Vue.js', 'vuejs'],
  ['TypeScript', 'typescript'],
  ['Tailwind CSS', 'tailwindcss'],
  ['Node.js', 'nodejs'],
  ['Java', 'java'],
  ['Spring Boot', 'spring'],
  ['.NET', 'dotnetcore'],
  ['C#', 'csharp'],
  ['PHP', 'php'],
  ['React Native', 'react'],
  ['Expo', 'expo'],
  ['PostgreSQL', 'postgresql'],
  ['MySQL', 'mysql'],
  ['MongoDB', 'mongodb'],
  ['Redis', 'redis'],
  ['Docker', 'docker'],
  ['GitHub Actions', 'githubactions'],
  ['GitLab CI', 'gitlab'],
  ['n8n', 'n8n'],
  ['OpenAI', 'openai'],
].map(([name, file]) => ({ name, logo: `/img/tech/${file}.svg`, mono: MONO_LOGOS.has(file) }));

export const modelIds = ['project', 'white-label', 'staff-augmentation'];
