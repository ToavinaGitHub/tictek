// Case studies shown on /realisations/ (FR) and /en/work/ (EN).
//
// The page, its nav link, its sitemap entry and the home page section only
// appear once this list has at least one entry. Only publish real, approved
// information: leave a field out rather than guessing it.
//
// Shape of an entry (every text field takes { fr, en }):
//
// {
//   slug: 'gestion-stock-terrain',             // anchor id, stable
//   kind: 'client',                            // 'client' | 'team' | 'personal' | 'prototype'
//   year: 2026,                                // optional
//   title: { fr: '…', en: '…' },
//   context: { fr: '…', en: '…' },
//   problem: { fr: '…', en: '…' },
//   solution: { fr: '…', en: '…' },
//   features: { fr: ['…'], en: ['…'] },
//   stack: ['React Native', 'Node.js'],
//   role: { fr: 'Conception et développement complet', en: '…' },   // TicTek's actual role
//   results: { fr: ['…'], en: ['…'] },        // optional, measured results only
//   services: ['mobile', 'saas-api'],          // ids from site.js serviceIds, for cross-links
//   link: 'https://…',                         // optional public demo or project
//   image: { src: '/img/projects/….webp', width: 1280, height: 800, alt: { fr: '…', en: '…' } }, // optional
// }
export const projects = [];
