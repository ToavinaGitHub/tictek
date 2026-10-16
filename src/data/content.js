// Language-independent data. All translatable copy lives in ./locales/{fr,en}.js.
import fr from './locales/fr';
import en from './locales/en';

export const translations = { fr, en };
export const languages = ['fr', 'en'];

export const contactInfo = {
  phone: '+261 38 47 110 37',
  email: 'andiejessica2020@gmail.com',
  address: 'Antananarivo, Madagascar',
};

// No longer used to build a mailto: link: QuoteRequest now sends through
// the portfolio's EmailJS template (see .env), whose "To Email" is fixed on
// the EmailJS dashboard. Kept as a reminder of the intended recipient in
// case that template's recipient needs to be updated or a dedicated
// template is created for tictek later.
export const quoteEmail = 'rtoavina.andriantahiry@gmail.com';

// Section anchors, in nav order. Labels are in locales/*.nav.links.
export const sectionIds = ['hero', 'services', 'methodologie', 'stack', 'qa', 'etudes-de-cas', 'tarifs', 'devis', 'contact'];

// Quote form select values. Labels are in locales/*.quote.projectTypes.
export const projectTypeIds = ['web', 'mobile', 'qa', 'cloud', 'other'];

export const heroPanels = [
  { text: 'Build #842: Passed ✓', className: 'p1', style: { top: '6%', left: '2%' } },
  { text: 'Test Coverage 95%+', className: 'p2', style: { top: '38%', right: 0 } },
  { text: 'Deploy → Production ✓', className: 'p3', style: { bottom: '8%', left: '8%' } },
];
