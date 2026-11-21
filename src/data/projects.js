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
//   services: ['mobile', 'saas-api'],          // ids from site.js expertiseIds, for cross-links
//   origin: 'provider',                        // optional: 'provider' (delivered by TicTek as a service provider)
//                                              // shows a badge; omit for TicTek's own website.
//   link: 'https://…',                         // optional public project or demo
//   linkLabel: { fr: '…', en: '…' },           // optional, defaults to "Voir le projet"
//   image: { src: '/img/projects/….jpg', small: '/img/projects/…-960.jpg', width: 1280, height: 800, alt: { fr: '…', en: '…' } },
//   // Optional case study (Work page). Every field takes { fr, en }; lists take { fr: [], en: [] }.
//   caseStudy: {
//     context, problem, solution,             // one or two sentences each
//     features: [],                           // main features
//     role,                                   // what TicTek actually did
//     facts: [],                              // optional: facts published with the project, never estimates
//   },
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
    origin: 'provider',
    caseStudy: {
      context: {
        fr: 'Dans les grandes villes malgaches, le prix d’une course se négocie, le paiement se fait souvent en espèces et la confiance repose sur le bouche-à-oreille.',
        en: 'In Madagascar’s large cities, ride fares are negotiated, payment is often made in cash and trust relies on word of mouth.',
      },
      problem: {
        fr: 'Des tarifs opaques et sans trace, aucun recours fiable en cas de litige, des chauffeurs qui ne peuvent pas taper sur un écran en conduisant, et des avis en français, en malgache ou mélangés, difficiles à exploiter.',
        en: 'Opaque fares with no record, no reliable recourse in a dispute, drivers who cannot type on a screen while driving, and reviews in French, Malagasy or both, hard to make use of.',
      },
      solution: {
        fr: 'Une application mobile pour passagers et chauffeurs et un back-office web : le passager fixe un prix maximum, les chauffeurs enchérissent en direct, à la voix, et chaque chauffeur engage une garantie inscrite sur la blockchain Polygon.',
        en: 'A mobile app for riders and drivers plus a web back office: the rider sets a maximum price, drivers bid live, by voice, and each driver commits a guarantee recorded on the Polygon blockchain.',
      },
      features: {
        fr: [
          'Enchères en temps réel entre chauffeurs (Socket.IO)',
          'Réponse vocale du chauffeur, transcrite puis interprétée par l’IA',
          'Portefeuille en jetons rechargé par mobile money',
          'Clôture de course par code PIN et paiement transactionnel',
          'Modération des avis par IA et gestion des litiges',
          'Garantie conducteur sur un smart contract Polygon',
        ],
        en: [
          'Real-time bidding between drivers (Socket.IO)',
          'Driver voice replies, transcribed then interpreted by AI',
          'Token wallet topped up by mobile money',
          'Ride closing with a PIN code and transactional payment',
          'AI review moderation and dispute management',
          'Driver guarantee on a Polygon smart contract',
        ],
      },
      role: {
        fr: 'Réalisé par TicTek en tant que prestataire, de bout en bout, par deux développeurs : cadrage, architecture microservices, développement mobile, web et backend, smart contract, tests et évaluation de l’IA.',
        en: 'Delivered end to end by TicTek as a service provider, with two developers: scoping, microservice architecture, mobile, web and back-end development, smart contract, testing and AI evaluation.',
      },
      facts: {
        fr: ['6 briques logicielles', '96 endpoints REST', '92 tests automatisés au vert', 'Juin à octobre 2026'],
        en: ['6 software components', '96 REST endpoints', '92 passing automated tests', 'June to October 2026'],
      },
    },
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
    origin: 'provider',
    caseStudy: {
      context: {
        fr: 'Au démarrage d’un projet logiciel, les choix d’architecture engagent les coûts et les délais pour des années, alors que le besoin est encore décrit en quelques phrases.',
        en: 'When a software project starts, architecture choices commit costs and timelines for years, while the need is still described in a few sentences.',
      },
      problem: {
        fr: 'Passer d’une idée exprimée en langage naturel à des choix techniques argumentés, sans oublier les exigences ni les informations manquantes.',
        en: 'Going from an idea written in plain language to well-argued technical choices, without missing requirements or information.',
      },
      solution: {
        fr: 'Une application web qui analyse la description du projet (utilisateurs, fonctionnalités, équipe, budget, délai) avec Google Gemini, relève les exigences et les manques, puis propose des architectures justifiées et comparables.',
        en: 'A web application that analyzes the project description (users, features, team, budget, deadline) with Google Gemini, identifies requirements and gaps, then proposes justified, comparable architectures.',
      },
      features: {
        fr: [
          'Description du projet en langage naturel',
          'Extraction des exigences et des informations manquantes',
          'Architectures comparées et décisions argumentées',
          'Diagramme, scénarios « what-if » et audit',
          'Assistant et rapport final',
        ],
        en: [
          'Project description in plain language',
          'Extraction of requirements and missing information',
          'Compared architectures and argued decisions',
          'Diagram, what-if scenarios and audit',
          'Assistant and final report',
        ],
      },
      role: {
        fr: 'Réalisé par TicTek en tant que prestataire : conception produit, interface, intégration de Google Gemini et mise en ligne.',
        en: 'Delivered by TicTek as a service provider: product design, interface, Google Gemini integration and deployment.',
      },
    },
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
    slug: 'applycheck',
    title: { fr: 'ApplyCheck', en: 'ApplyCheck' },
    summary: {
      fr: 'Assistant de candidature par IA : à partir d’un CV et d’une offre, il produit un rapport noté, des lettres de motivation sur mesure et des messages adaptés à chaque plateforme, sans compte.',
      en: 'AI job application assistant: from a CV and a job description, it produces a scored report, tailored cover letters and platform-specific messages, with no account required.',
    },
    stack: ['Next.js', 'TypeScript', 'Claude', 'Gemini'],
    services: ['ai', 'web'],
    link: 'https://applycheck.tictek.mg/',
    linkLabel: { fr: 'Essayer l’application', en: 'Try the application' },
    origin: 'provider',
    caseStudy: {
      context: {
        fr: 'Préparer une candidature demande d’adapter son CV, sa lettre et ses messages à chaque offre et à chaque plateforme, et les erreurs passent facilement inaperçues.',
        en: 'Preparing a job application means adapting your CV, cover letter and messages to every posting and platform, and mistakes easily go unnoticed.',
      },
      problem: {
        fr: 'Repérer les incohérences entre un CV et une offre, puis produire des documents sur mesure sans inventer d’expérience et sans conserver les documents de l’utilisateur.',
        en: 'Spotting inconsistencies between a CV and a job posting, then producing tailored documents without inventing experience and without keeping the user’s documents.',
      },
      solution: {
        fr: 'Un assistant web, sans compte, qui lit le CV et l’offre côte à côte, produit un rapport noté et génère lettres et messages à partir de l’expérience réelle du candidat. Les fichiers sont traités en mémoire, sans stockage.',
        en: 'A web assistant, with no account, that reads the CV and the posting side by side, produces a scored report and generates letters and messages from the candidate’s real experience. Files are processed in memory, never stored.',
      },
      features: {
        fr: [
          'Rapport noté avec citations des documents',
          'Lettres de motivation en trois versions et six langues',
          'Messages adaptés à chaque plateforme (e-mail, LinkedIn, WhatsApp…)',
          'Suggestions d’amélioration du CV à valider une à une',
          'Aucun compte, aucun stockage de documents',
        ],
        en: [
          'Scored report quoting the documents',
          'Cover letters in three versions and six languages',
          'Messages shaped for each platform (email, LinkedIn, WhatsApp…)',
          'CV improvement suggestions to accept one by one',
          'No account, no document storage',
        ],
      },
      role: {
        fr: 'Réalisé par TicTek en tant que prestataire : produit, interface bilingue, intégration des modèles d’IA (Anthropic Claude et Google Gemini) et respect de la confidentialité.',
        en: 'Delivered by TicTek as a service provider: product, bilingual interface, AI model integration (Anthropic Claude and Google Gemini) and privacy by design.',
      },
    },
    image: {
      src: '/img/projects/applycheck.jpg',
      small: '/img/projects/applycheck-960.jpg',
      width: 1280,
      height: 800,
      alt: {
        fr: 'Page d’accueil d’ApplyCheck : préparation de candidature et exemple de rapport noté 78 sur 100',
        en: 'ApplyCheck home page: application preparation and a sample report scored 78 out of 100',
      },
    },
  },
  {
    slug: 'site-tictek',
    title: { fr: 'Site web de TicTek', en: 'TicTek website' },
    summary: {
      fr: 'Le site que vous consultez : bilingue, rapide et accessible, avec formulaires de contact et de candidature, et SEO technique intégré.',
      en: 'The site you are browsing: bilingual, fast and accessible, with contact and application forms, and built-in technical SEO.',
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
        fr: 'Page d’accueil du site TicTek',
        en: 'TicTek website home page',
      },
    },
  },
];
