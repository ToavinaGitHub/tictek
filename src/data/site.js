// Language-independent site data. All translatable copy lives in ./locales/{fr,en}.js.
import { projects } from './projects';

export const brand = {
  name: 'TicTek',
  logo: '/img/logo/logo_vf_light.png',
  ogImage: { fr: '/img/og-image-fr.png', en: '/img/og-image-en.png' },
};

// Absolute origin used for canonical URLs, hreflang, the sitemap and Open
// Graph. Set VITE_SITE_URL in .env.production to the real domain.
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://www.tictek.example').replace(/\/+$/, '');

export const contactInfo = {
  email: 'andiejessica2020@gmail.com',
  phone: '+261 38 47 110 37',
  city: 'Antananarivo',
  countryCode: 'MG',
};

export const languages = ['fr', 'en'];
export const defaultLang = 'fr';

// Page ids, in nav order. "work" is only built once projects.js has entries,
// so the site never shows an empty portfolio.
export const hasProjects = projects.length > 0;
export const pageIds = ['home', 'services', ...(hasProjects ? ['work'] : []), 'collaboration', 'about', 'contact'];
export const navIds = pageIds.filter((id) => id !== 'home' && id !== 'contact');

export const paths = {
  fr: {
    home: '/',
    services: '/services/',
    work: '/realisations/',
    collaboration: '/collaboration/',
    about: '/a-propos/',
    contact: '/contact/',
  },
  en: {
    home: '/en/',
    services: '/en/services/',
    work: '/en/work/',
    collaboration: '/en/engagement-models/',
    about: '/en/about/',
    contact: '/en/contact/',
  },
};

export const absoluteUrl = (path) => `${siteUrl}${path}`;

// Service anchors on the services page, shared by both languages.
export const serviceIds = ['web', 'mobile', 'saas-api', 'automation', 'ai', 'maintenance'];
export const modelIds = ['project', 'white-label', 'staff-augmentation'];
