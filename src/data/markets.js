// International market pages (Market.jsx). One entry per country page; the
// copy lives in locales/{fr,en}.js under pages.<id>, with the same keys for
// every market (see the Switzerland entry).
//
// To add a market (United Kingdom, United States, Australia, France…):
//   1. add an entry here, with its own paths in both languages;
//   2. add pages.<id> to fr.js and en.js, following an existing market;
//   3. add its flag to components/Flag.jsx if it is missing.
// The page, its sitemap entry, hreflang and footer link follow automatically.
// Only add a market when it has real, specific content: no thin copies.
//
// `clocks`: time zones shown on the page next to Madagascar's.
export const markets = [
  {
    id: 'switzerland',
    flag: 'ch',
    paths: {
      fr: '/externalisation-informatique-suisse/',
      en: '/en/software-development-outsourcing-switzerland/',
    },
    clocks: [{ id: 'geneva', timeZone: 'Europe/Zurich', flag: 'ch' }],
  },
  {
    id: 'canada',
    flag: 'ca',
    paths: {
      fr: '/externalisation-informatique-canada/',
      en: '/en/software-development-outsourcing-canada/',
    },
    clocks: [
      { id: 'montreal', timeZone: 'America/Toronto', flag: 'ca' },
      { id: 'vancouver', timeZone: 'America/Vancouver', flag: 'ca' },
    ],
  },
];

export const marketIds = markets.map((market) => market.id);
export const findMarket = (pageId) => markets.find((market) => market.id === pageId);
