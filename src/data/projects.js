// Projects shown on /realisations/ (FR) and /en/work/ (EN), and on the home page.
//
// The page, its nav link, its sitemap entry and the home page section only
// appear once this list has at least one entry. Keep each entry short: the
// link leads to the project itself for details. Only publish real information.
//
// Shape of an entry (text fields take { fr, en }):
//
// {
//   slug: 'mon-projet',                        // anchor id, stable
//   title: { fr: '…', en: '…' },
//   summary: { fr: 'Une ou deux phrases.', en: '…' },
//   stack: ['React Native', 'Node.js'],        // a few key technologies
//   services: ['mobile', 'saas-api'],          // ids from site.js serviceIds, for cross-links
//   link: 'https://…',                         // optional public project or demo
//   linkLabel: { fr: '…', en: '…' },           // optional, defaults to "Voir le projet"
//   image: { src: '/img/projects/….jpg', small: '/img/projects/…-960.jpg', width: 1280, height: 800, alt: { fr: '…', en: '…' } },
// }
export const projects = [
  {
    slug: 'trust-and-ride',
    title: { fr: 'Trust & Ride', en: 'Trust & Ride' },
    summary: {
      fr: 'Plateforme VTC pensée pour Madagascar : enchères en temps réel, réponse vocale des chauffeurs grâce à l’IA et garantie conducteur sur la blockchain Polygon.',
      en: 'Ride-hailing platform designed for Madagascar: real-time bidding, AI-powered voice replies for drivers and a driver guarantee on the Polygon blockchain.',
    },
    stack: ['React Native', 'Spring Boot', 'Node.js', 'Gemini', 'Solidity'],
    services: ['mobile', 'ai', 'web3'],
    link: 'https://ridenao.tictek.mg/',
    linkLabel: { fr: 'Voir l’étude de cas', en: 'View the case study' },
    image: {
      src: '/img/projects/ridenao.jpg',
      small: '/img/projects/ridenao-960.jpg',
      width: 1280,
      height: 800,
      alt: {
        fr: 'Page de présentation de Trust & Ride : une course en direct avec enchère vocale et garantie sur Polygon',
        en: 'Trust & Ride overview page: a live ride with a voice bid and a guarantee on Polygon',
      },
    },
  },
  {
    slug: 'architecture-decision-engine',
    title: { fr: 'Architecture Decision Engine', en: 'Architecture Decision Engine' },
    summary: {
      fr: 'Application web qui transforme une idée de projet, décrite en langage naturel, en décisions d’architecture justifiées et comparables, avec Google Gemini.',
      en: 'Web application that turns a project idea, described in plain language, into justified and comparable architecture decisions, with Google Gemini.',
    },
    stack: ['Next.js', 'React', 'Gemini'],
    services: ['ai', 'web'],
    link: 'https://techversus-ruby.vercel.app/',
    linkLabel: { fr: 'Essayer l’application', en: 'Try the application' },
    image: {
      src: '/img/projects/techversus.jpg',
      small: '/img/projects/techversus-960.jpg',
      width: 1280,
      height: 800,
      alt: {
        fr: 'Écran d’accueil d’Architecture Decision Engine : description du projet et exemples',
        en: 'Architecture Decision Engine home screen: project description and examples',
      },
    },
  },
  {
    slug: 'site-tictek',
    title: { fr: 'Site web de TicTek', en: 'TicTek website' },
    summary: {
      fr: 'Le site que vous consultez : bilingue, rapide et accessible, avec thème clair ou sombre, formulaires de contact et de candidature, et SEO technique intégré.',
      en: 'The site you are browsing: bilingual, fast and accessible, with light or dark theme, contact and application forms, and built-in technical SEO.',
    },
    stack: ['React', 'Vite', 'EmailJS', 'Vercel'],
    services: ['web'],
    link: 'https://www.tictek.mg/',
    linkLabel: { fr: 'Voir le site', en: 'Visit the site' },
    image: {
      src: '/img/projects/tictek.jpg',
      small: '/img/projects/tictek-960.jpg',
      width: 1280,
      height: 800,
      alt: {
        fr: 'Page d’accueil du site TicTek en thème clair',
        en: 'TicTek website home page in light theme',
      },
    },
  },
];
