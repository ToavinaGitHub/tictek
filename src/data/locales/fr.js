import forms from './form';

const fr = {
  lang: 'fr',
  ogLocale: 'fr_FR',

  common: {
    skipLink: 'Aller au contenu',
    menu: 'Menu',
    mainNav: 'Navigation principale',
    breadcrumb: "Fil d'Ariane",
    nav: {
      home: 'Accueil',
      services: 'Services',
      work: 'Réalisations',
      collaboration: 'Collaboration',
      about: 'À propos',
      contact: 'Contact',
      pricing: 'Tarifs',
      careers: 'Nous rejoindre',
      privacy: 'Confidentialité',
      blog: 'Blog',
    },
    ctaContact: 'Discutons de votre projet',
    cta: {
      title: 'Un projet en tête ?',
      text: 'Parlons-en, sans engagement.',
    },
    language: 'Langue',
    learnMore: 'En savoir plus',
    consent: {
      label: 'Cookies de mesure d’audience',
      text: 'Nous aimerions mesurer la fréquentation du site pour l’améliorer. Ces cookies ne sont déposés qu’avec votre accord.',
      more: 'En savoir plus',
      accept: 'Accepter',
      refuse: 'Refuser',
      manage: 'Gérer les cookies',
    },
    whatsapp: {
      label: 'Nous écrire sur WhatsApp',
      message: 'Bonjour TicTek, je souhaite discuter d’un projet.',
    },
    linkedin: 'TicTek sur LinkedIn',
    // Scrolling band above the footer (KeywordBand.jsx).
    keywords: ['Web', 'Mobile', 'SaaS', 'API', 'Automatisation', 'IA', 'Web3', 'Maintenance'],
  },

  // Keys follow site.js clientCountries.
  countries: {
    mu: 'Maurice',
    mg: 'Madagascar',
    fr: 'France',
    ae: 'Dubaï (Émirats arabes unis)',
  },

  // Keys follow site.js clocks.
  cities: {
    antananarivo: { city: 'Antananarivo', country: 'Madagascar' },
    'port-louis': { city: 'Port-Louis', country: 'Maurice' },
    dubai: { city: 'Dubaï', country: 'Émirats arabes unis' },
    paris: { city: 'Paris', country: 'France' },
    geneva: { city: 'Genève', country: 'Suisse' },
    montreal: { city: 'Montréal', country: 'Canada' },
  },

  footer: {
    about:
      'TicTek conçoit, développe et maintient des logiciels sur mesure : applications web et mobiles, SaaS, API, automatisation et intégration IA. Équipe basée à Madagascar, au service de clients à l’international, en français et en anglais.',
    servicesTitle: 'Services',
    companyTitle: 'Entreprise',
    contactTitle: 'Contact',
    location: 'Antananarivo, Madagascar · clients à l’international',
    rights: 'Tous droits réservés.',
  },

  // Shared by the home page and the services page. Keys follow site.js serviceIds.
  services: {
    web: {
      title: 'Applications web et logiciels métier',
      short: 'Outils internes, portails clients, back-offices.',
      problem:
        "Vos équipes jonglent entre tableurs, e-mails et outils qui ne communiquent pas, ou votre application actuelle freine votre activité au lieu de la soutenir.",
      deliverables: [
        'Application web sur mesure : outil interne, portail client, back-office',
        "Refonte ou reprise d'une application existante",
        'Interfaces responsives et accessibles',
        'Documentation technique et mise en production',
      ],
      audience:
        "PME et organisations dont les processus ne rentrent pas dans un logiciel standard, ou qui ont dépassé leurs tableurs.",
      tech: ['React', 'Next.js', 'Angular', 'Java / Spring Boot', 'Node.js', '.NET', 'PostgreSQL'],
    },
    mobile: {
      title: 'Applications mobiles iOS et Android',
      short: 'Une base de code, deux plateformes.',
      problem:
        "Vos clients ou vos équipes terrain ont besoin d'un outil utilisable sur téléphone, y compris avec une connexion instable.",
      deliverables: [
        'Application iOS et Android à partir d’une base de code commune',
        'Mode hors ligne et synchronisation des données',
        'Notifications et connexion à vos API',
        "Accompagnement à la publication sur l'App Store et Google Play",
      ],
      audience: 'Entreprises qui lancent un service mobile ou qui équipent leurs équipes sur le terrain.',
      tech: ['React Native', 'Expo', 'TypeScript'],
    },
    'saas-api': {
      title: 'SaaS, backend et API',
      short: 'Des fondations solides pour votre produit.',
      problem:
        'Vous lancez un produit en ligne, ou vos outils et vos partenaires doivent échanger des données de façon fiable et sécurisée.',
      deliverables: [
        'Architecture et développement backend',
        'API REST documentées',
        'Gestion des comptes, des rôles et des accès',
        'Conteneurisation Docker et pipelines CI/CD',
      ],
      audience:
        'Startups et éditeurs qui construisent un produit SaaS, entreprises qui ouvrent leurs données à des partenaires.',
      tech: ['Node.js', 'Java / Spring Boot', '.NET', 'PostgreSQL', 'Redis', 'Docker'],
    },
    automation: {
      title: 'Automatisation des processus',
      short: 'Fini le copier-coller entre vos outils.',
      problem:
        'Des heures sont perdues chaque semaine à recopier des données entre vos outils, avec des erreurs à la clé.',
      deliverables: [
        'Analyse des tâches répétitives et des flux de données',
        'Workflows automatisés avec n8n ou développement spécifique',
        'Connexion entre CRM, facturation, e-mails et outils internes',
        "Suivi des exécutions et alertes en cas d'échec",
      ],
      audience: 'Équipes administratives, commerciales ou opérationnelles qui utilisent plusieurs outils en parallèle.',
      tech: ['n8n', 'API REST', 'Node.js'],
    },
    ai: {
      title: 'Intégration de fonctionnalités IA',
      short: 'L’IA là où elle est vraiment utile.',
      problem:
        "Vous voulez exploiter l'IA générative dans vos outils ou sur vos propres données, sans vous lancer dans un projet expérimental sans fin.",
      deliverables: [
        "Identification de cas d'usage réalistes, et de ceux où l'IA n'est pas la bonne réponse",
        'Extraction et classement de documents, e-mails ou formulaires',
        'Assistants connectés à vos données',
        'Intégration dans vos applications existantes via API',
      ],
      audience: 'Entreprises qui traitent beaucoup de texte ou de documents et veulent gagner du temps.',
      tech: ['API OpenAI', 'Gemini', 'Pipelines de données'],
    },
    web3: {
      title: 'Blockchain et Web3',
      short: 'Smart contracts et applications décentralisées.',
      problem:
        'Vous voulez tokeniser un actif, certifier des données ou lancer une application décentralisée, sans prendre de risque sur la sécurité des contrats.',
      deliverables: [
        "Un avis franc sur l'intérêt réel de la blockchain pour votre cas",
        'Smart contracts en Solidity, couverts par des tests automatisés (Hardhat)',
        'Applications décentralisées (dApps) : interface web et connexion aux wallets',
        'Tokens et NFT selon les standards ERC-20 et ERC-721, intégration à vos applications',
      ],
      audience: 'Startups Web3 et entreprises qui explorent la traçabilité, la certification ou la tokenisation.',
      tech: ['Solidity', 'Hardhat', 'Ethers.js', 'Ethereum (EVM)', 'Polygon'],
    },
    maintenance: {
      title: "Maintenance évolutive et renfort d'équipe",
      short: 'Faire vivre et évoluer votre application.',
      problem:
        'Votre application doit continuer à évoluer, mais votre équipe manque de temps ou de compétences sur certaines technologies.',
      deliverables: [
        'Corrections et évolutions planifiées',
        'Mises à jour des dépendances et correctifs de sécurité',
        'Tests automatisés : unitaires, intégration, end-to-end',
        'Développeurs intégrés à votre équipe et à vos outils',
      ],
      audience: 'Entreprises avec un produit en production, agences et équipes techniques en manque de capacité.',
      tech: ['GitHub / GitLab', 'CI/CD', 'Playwright', 'Cypress'],
    },
  },

  // Keys follow site.js modelIds.
  models: {
    project: {
      title: 'Projet au forfait',
      short: 'Un besoin défini, un périmètre validé, une application livrée.',
      text:
        "Vous avez un besoin précis mais pas d'équipe technique. Nous cadrons le périmètre ensemble, puis nous réalisons l'application selon une estimation et un planning validés avant le démarrage.",
      points: [
        'Périmètre, livrables et étapes fixés par écrit',
        'Démonstrations régulières pendant le développement',
        'Recette avec vous avant la mise en production',
      ],
      fit: 'PME et organisations sans équipe de développement interne.',
    },
    'white-label': {
      title: 'Sous-traitance en marque blanche',
      short: 'Nous développons pour vos clients, sous votre marque.',
      text:
        'Vous êtes une agence. Vous gardez la relation avec votre client, nous prenons en charge tout ou partie de la réalisation technique, en toute discrétion.',
      points: [
        'Aucun contact direct avec votre client sans votre accord',
        'Travail dans vos outils et selon vos conventions',
        'Un interlocuteur technique unique pour votre équipe',
      ],
      fit: 'Agences web, digitales et de communication.',
    },
    'staff-augmentation': {
      title: "Renfort d'équipe",
      short: 'Des développeurs qui rejoignent votre équipe, vos outils et vos rituels.',
      text:
        "Votre équipe a besoin de capacité supplémentaire ou d'une compétence précise. Un ou plusieurs développeurs TicTek travaillent avec vous, dans votre organisation.",
      points: [
        'Intégration à vos outils : Git, tickets, messagerie',
        'Participation aux revues de code et aux rituels',
        'Volume et durée ajustables selon vos besoins',
      ],
      fit: 'Startups, éditeurs de logiciels et équipes techniques internes.',
    },
  },

  process: [
    { title: 'Premier échange', text: 'Un appel, sans engagement.' },
    { title: 'Cadrage', text: 'Le périmètre, clarifié par écrit.' },
    { title: 'Estimation', text: 'Étapes, planning et budget.' },
    { title: 'Développement', text: 'Itérations courtes, démos régulières.' },
    { title: 'Tests', text: 'Automatisés, puis validés avec vous.' },
    { title: 'Livraison', text: 'Mise en ligne et documentation.' },
    { title: 'Maintenance', text: 'Suivi et évolutions, si besoin.' },
  ],

  pages: {
    home: {
      title: 'TicTek | Développeurs à Madagascar : web, mobile, IA et Web3',
      description:
        'TicTek, équipe de développeurs basée à Antananarivo (Madagascar), conçoit vos applications web et mobiles, SaaS, API, automatisations, IA et Web3, partout dans le monde.',
      hero: {
        title: 'Votre partenaire de développement logiciel,',
        titleAccent: 'du besoin à la mise en production.',
        lede:
          'Une équipe de développeurs à Madagascar. Web, mobile, automatisation et IA, pour des clients du monde entier.',
        ctaWork: 'Découvrir nos réalisations',
        ctaServices: 'Découvrir nos services',
        visual: {
          url: 'app.votre-entreprise.com',
          dashboard: 'Tableau de bord',
          orders: 'Commandes',
          clients: 'Clients',
          activity: 'Activité',
          synced: 'Synchronisé',
          automation: 'Workflow automatisé',
        },
        stackTitle: 'Notre stack au quotidien',
        stackPause: 'Mettre en pause le défilement',
      },
      services: {
        title: 'Ce que nous développons pour vous',
        lede: 'Votre problème d’abord, la technologie ensuite.',
        link: 'Tous les services',
        otherTitle: 'Un autre besoin ?',
        otherText: 'Décrivez-le, on vous dit comment aider.',
      },
      work: {
        title: 'Réalisations récentes',
        link: 'Toutes les réalisations',
      },
      clients: {
        eyebrow: 'Nos clients',
        title: 'Des clients sur trois continents',
        lede: 'Océan Indien, Europe, Moyen-Orient. À distance, depuis Antananarivo.',
        listLabel: 'Pays de nos clients',
        stats: { countries: 'pays', continents: 'continents', languages: 'langues de travail' },
      },
      hours: {
        title: 'Notre heure, votre heure',
        lede: 'UTC+3 : une à deux heures d’écart avec l’Europe.',
        languagesLabel: 'Nous travaillons en',
        languages: ['Français', 'Anglais'],
        listLabel: 'Heure actuelle à Madagascar et chez nos clients',
        ours: 'Notre heure · UTC+3',
        same: 'Même heure',
        hourUnit: 'h',
        versus: 'par rapport à Madagascar',
      },
      models: {
        title: 'Trois façons de travailler ensemble',
        lede: 'Avec ou sans équipe technique.',
        link: 'Comparer les modes',
      },
      process: {
        title: 'Notre méthode',
      },
      trust: {
        title: 'Nos engagements',
        items: [
          {
            title: 'Un interlocuteur technique direct',
            text: 'Vous parlez directement aux développeurs.',
          },
          {
            title: 'Une estimation avant tout engagement',
            text: 'Périmètre et budget écrits avant de commencer.',
          },
          {
            title: 'De la visibilité en continu',
            text: 'Démos régulières : vous voyez le projet avancer.',
          },
          {
            title: 'Du code pensé pour durer',
            text: 'Tests, revues de code et documentation inclus.',
          },
        ],
      },
    },

    services: {
      title: 'Services : web, mobile, SaaS, API, IA et Web3 | TicTek',
      description:
        "Applications web et métier, mobile, SaaS et API, automatisation, intégration IA, blockchain et Web3, maintenance et renfort d'équipe : les services de TicTek.",
      h1: 'Services de développement logiciel sur mesure',
      lede:
        'Sept domaines d’intervention, présentés par le problème qu’ils résolvent. Si votre besoin ne rentre dans aucune case, décrivez-le-nous : il recoupe souvent plusieurs d’entre eux.',
      labels: {
        problem: 'Le problème',
        deliverables: 'Ce que nous livrons',
        audience: 'Pour qui',
        tech: 'Technologies',
        projects: 'Réalisations liées',
      },
      quality: {
        title: 'La qualité fait partie de chaque service',
        items: [
          'Tests automatisés intégrés au développement, exécutés à chaque modification via CI/CD',
          'Revues de code systématiques avant intégration',
          'Bonnes pratiques de sécurité applicative (référentiel OWASP Top 10)',
          'Environnements conteneurisés pour que la recette reflète la production',
        ],
      },
    },

    work: {
      title: 'Réalisations : projets web, mobiles et logiciels | TicTek',
      description:
        'Projets conçus et développés par TicTek : plateforme VTC avec IA et blockchain, outil d’aide aux décisions d’architecture, applications web et mobiles.',
      h1: 'Réalisations',
      lede: 'Quelques projets conçus et développés par l’équipe TicTek.',
      labels: {
        link: 'Voir le projet',
      },
    },

    collaboration: {
      title: 'Collaboration : forfait, marque blanche ou renfort d’équipe | TicTek',
      description:
        "Projet au forfait, sous-traitance en marque blanche pour les agences ou renfort d'équipe : comment TicTek travaille avec vous, étape par étape.",
      h1: 'Comment travailler avec TicTek',
      lede:
        'Trois modes de collaboration, une même méthode. Choisissez celui qui correspond à votre organisation : nous pouvons aussi en changer en cours de route.',
      fitLabel: 'Pour qui :',
      processTitle: 'Les étapes d’un projet',
      processLede: 'Pour un projet au forfait, toutes les étapes s’appliquent. En marque blanche ou en renfort, nous nous adaptons à votre propre processus.',
      estimateTitle: 'Ce qui nous aide à estimer votre projet',
      estimateItems: [
        'Le problème à résoudre et les personnes qui utiliseront le logiciel',
        'Les outils ou systèmes existants à connecter',
        'Vos contraintes de délai et, si possible, une enveloppe budgétaire',
        'Tout document existant : cahier des charges, maquettes, captures d’écran',
      ],
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          q: 'Combien coûte un projet ?',
          a: 'Cela dépend du périmètre, des intégrations et du niveau de qualité attendu. Notre taux horaire démarre à 8 $ US ; le budget total fait l’objet d’une estimation détaillée après le cadrage. Indiquer une enveloppe dans le formulaire nous aide à proposer une solution adaptée.',
        },
        {
          q: 'Comment se passe le travail à distance ?',
          a: 'Visioconférences pour les points importants, messagerie pour le quotidien, outil de tickets pour suivre les demandes, et démonstrations régulières sur un environnement de test.',
        },
        {
          q: 'Travaillez-vous avec des clients dans d’autres fuseaux horaires ?',
          a: 'Oui, nous travaillons à l’international. Madagascar est à UTC+3, sans changement d’heure : une à deux heures d’écart avec la France et la Suisse, sept à huit heures avec le Québec. Au démarrage, nous fixons ensemble des créneaux d’échange réguliers compatibles avec vos horaires ; le reste du suivi se fait de façon asynchrone dans vos outils.',
        },
        {
          q: 'Pouvez-vous reprendre une application existante ?',
          a: 'Oui. Nous commençons par examiner le code, les dépendances et l’infrastructure pour évaluer l’état du projet, puis nous proposons un plan de reprise.',
        },
      ],
    },

    pricing: {
      title: 'Tarifs : comment nous chiffrons votre projet logiciel | TicTek',
      description:
        "Taux horaire à partir de 8 $ US. Forfait, régie, maintenance mensuelle ou marque blanche : comment TicTek établit ses devis et ce qui fait varier le prix d'un projet.",
      h1: 'Tarifs',
      lede:
        'Chaque projet logiciel est différent, mais voici un repère : notre taux horaire démarre à 8 $ US. Voici comment nous facturons, ce qui fait varier le prix et comment obtenir une estimation.',
      rate: {
        label: 'Taux horaire',
        from: 'À partir de',
        value: '8 $ US',
        unit: '/ heure',
        note: 'Le taux exact dépend des compétences demandées et du volume de l’engagement. Il est toujours indiqué dans le devis, avant tout démarrage.',
      },
      modelsTitle: 'Nos modes de facturation',
      fitLabel: 'Pour :',
      models: [
        {
          id: 'forfait',
          title: 'Forfait',
          text: "Un prix global fixé à l'avance, pour un périmètre défini ensemble lors du cadrage.",
          points: [
            'Prix, livrables et étapes fixés dans le devis',
            'Évolutions hors périmètre chiffrées à part, avant réalisation',
            'Échéancier de paiement précisé dans le devis',
          ],
          fit: 'projets au besoin clair : application, logiciel métier, MVP.',
        },
        {
          id: 'regie',
          title: 'Régie',
          text: 'Vous réservez du temps de développement, facturé à l’heure ou au jour. Le périmètre peut évoluer librement.',
          points: [
            'À partir de 8 $ US de l’heure, taux précisé dans le devis',
            'Suivi du temps passé partagé avec vous',
            'Volume ajustable selon vos besoins',
          ],
          fit: "renfort d'équipe, produits en construction, besoins évolutifs.",
        },
        {
          id: 'maintenance',
          title: 'Maintenance mensuelle',
          text: 'Un montant mensuel pour maintenir et faire évoluer une application en production.',
          points: [
            'Mises à jour de sécurité et des dépendances',
            'Corrections et petites évolutions',
            'Volume mensuel défini ensemble',
          ],
          fit: 'applications déjà en production.',
        },
        {
          id: 'marque-blanche',
          title: 'Marque blanche',
          text: 'Des conditions adaptées aux agences qui intègrent nos développements dans leurs propres offres.',
          points: [
            'Au forfait par projet ou en régie',
            'Facturation à votre agence uniquement',
            'Discrétion totale vis-à-vis de vos clients',
          ],
          fit: 'agences web, digitales et de communication.',
        },
      ],
      factorsTitle: 'Ce qui fait varier le prix',
      factors: [
        { title: 'Le périmètre', text: "Nombre d'écrans, de fonctionnalités et de types d'utilisateurs." },
        { title: 'Les plateformes', text: 'Web, iOS, Android, ou plusieurs à la fois.' },
        { title: 'Les intégrations', text: 'Connexion à vos outils existants, paiement en ligne, API tierces, IA.' },
        { title: 'Le design', text: "Maquettes fournies par vous, ou conception de l'interface par nos soins." },
        { title: "Le niveau d'exigence", text: 'Volume de données, sécurité, couverture de tests, disponibilité attendue.' },
        { title: 'Les délais', text: 'Un calendrier serré peut demander plus de développeurs en parallèle.' },
      ],
      stepsTitle: 'Comment obtenir un devis',
      steps: [
        'Vous décrivez votre projet via le formulaire de contact, en indiquant si possible une enveloppe budgétaire.',
        'Nous en parlons lors d’un premier appel, gratuit et sans engagement.',
        'Nous vous envoyons une estimation écrite : périmètre, étapes, planning et prix.',
      ],
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          q: 'Pourquoi pas de prix fixe par type de projet ?',
          a: 'Notre taux horaire démarre à 8 $ US, mais le coût total dépend du temps nécessaire. Deux applications qui se ressemblent peuvent demander des efforts très différents selon les intégrations, les volumes et le niveau d’exigence. Un prix forfaitaire affiché sans connaître votre projet serait soit trompeur, soit gonflé par précaution.',
        },
        {
          q: 'Le premier échange est-il payant ?',
          a: 'Non, le premier appel est gratuit et sans engagement. Pour un projet complexe, nous pouvons proposer une phase de cadrage avant l’estimation définitive ; elle est alors chiffrée à l’avance.',
        },
        {
          q: 'Comment se passe le paiement ?',
          a: 'L’échéancier (acompte, étapes, solde) est précisé dans chaque devis et validé avec vous avant tout démarrage.',
        },
      ],
      cta: 'Demander un devis',
    },

    careers: {
      title: 'Nous rejoindre : candidature spontanée | TicTek',
      description:
        'Développeur web, mobile, back-end, QA ou DevOps ? Envoyez votre candidature spontanée à TicTek : projets variés pour des clients à l’international.',
      h1: 'Nous rejoindre',
      lede:
        'Nous n’avons pas de poste ouvert en ce moment, mais nous lisons toutes les candidatures spontanées. Si votre profil correspond à un besoin actuel ou à venir, nous vous recontactons.',
      whyTitle: 'Travailler chez TicTek',
      why: [
        { title: 'Des projets variés', text: 'Applications web et mobiles, API, automatisation et IA, pour des clients à l’international.' },
        { title: 'Une stack moderne', text: 'React, Next.js, Node.js, Java / Spring Boot, .NET, React Native, Docker…' },
        { title: 'La qualité comme habitude', text: 'Revues de code, tests automatisés et intégration continue au quotidien.' },
        { title: 'Français et anglais', text: 'Vous échangez avec des clients et des équipes dans les deux langues.' },
      ],
      profilesTitle: 'Les profils qui nous intéressent',
      profiles: [
        'Développeur·se front-end : React, Angular, Vue.js',
        'Développeur·se back-end : Node.js, Java, .NET, PHP',
        'Développeur·se mobile : React Native',
        'QA et automatisation des tests',
        'DevOps et cloud',
        'Développeur·se blockchain : Solidity, Ethers.js',
        'Un autre profil technique ? Écrivez-nous quand même.',
      ],
      processTitle: 'Comment ça se passe',
      process: [
        'Vous envoyez votre candidature avec le formulaire ci-dessous.',
        'Vous recevez aussitôt un e-mail de confirmation.',
        'Nous étudions votre profil et revenons vers vous s’il correspond à un besoin.',
      ],
      formTitle: 'Candidature spontanée',
    },

    about: {
      title: 'À propos de TicTek, équipe de développeurs à Antananarivo, Madagascar',
      description:
        'TicTek, équipe de développeurs basée à Antananarivo (Madagascar) et tournée vers l’international : mission, compétences, organisation et approche qualité.',
      h1: 'À propos de TicTek',
      lede:
        'TicTek est une équipe de développeurs basée à Antananarivo, à Madagascar, qui travaille à distance avec des clients à l’international. Nous concevons, développons et maintenons des logiciels pour des entreprises qui cherchent un partenaire technique fiable, flexible et attentif aux coûts.',
      sections: [
        {
          id: 'mission',
          title: 'Notre mission',
          paragraphs: [
            "Rendre le développement logiciel sur mesure accessible aux entreprises qui n'ont pas d'équipe technique, et apporter un renfort fiable à celles qui en ont une.",
          ],
        },
        {
          id: 'equipe',
          title: 'Comment nous fonctionnons',
          paragraphs: [
            'Chaque projet a un responsable technique identifié, qui est votre interlocuteur du cadrage à la livraison.',
            'Le travail est organisé en itérations courtes, suivies dans un outil de tickets partagé. Chaque modification passe par une revue de code et des tests automatisés avant d’être livrée.',
          ],
        },
        {
          id: 'qualite',
          title: 'Notre approche de la qualité',
          paragraphs: [
            'Nous considérons la qualité comme une discipline quotidienne, pas comme une phase de fin de projet : typage, tests automatisés, intégration continue, bonnes pratiques de sécurité et environnements conteneurisés.',
            'Le but est simple : un logiciel que vos équipes peuvent faire évoluer sans devoir le réécrire.',
          ],
        },
        {
          id: 'distance',
          title: 'Collaboration à distance',
          paragraphs: [
            'Depuis Madagascar, nous travaillons à distance avec des entreprises à l’international, en français et en anglais. Madagascar est à UTC+3, ce qui laisse une large plage horaire commune avec l’Europe ; avec les autres fuseaux, nous convenons de créneaux d’échange adaptés.',
            'Les échanges se font par visioconférence, messagerie et outils de suivi partagés, selon vos habitudes.',
          ],
        },
      ],
      teamTitle: 'L’équipe',
      teamLede: 'Les personnes qui conçoivent et développent vos projets, et avec qui vous échangez directement.',
      skillsTitle: 'Compétences techniques',
      skills: [
        { name: 'Front-end', items: ['TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js'] },
        { name: 'Back-end', items: ['Java / Spring Boot', 'Node.js', 'C# / .NET', 'PHP'] },
        { name: 'Mobile', items: ['React Native', 'Expo'] },
        { name: 'Données', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'] },
        { name: 'DevOps', items: ['Docker', 'CI/CD', 'GitHub Actions', 'GitLab CI'] },
        { name: 'IA et automatisation', items: ['API OpenAI', 'Gemini', 'n8n'] },
        { name: 'Blockchain et Web3', items: ['Solidity', 'Hardhat', 'Ethers.js', 'Polygon'] },
      ],
    },

    contact: {
      title: 'Contact : parlez-nous de votre projet logiciel | TicTek',
      description:
        "Décrivez votre projet d'application web, mobile, SaaS, d'automatisation ou d'intégration IA. TicTek vous répond par e-mail pour convenir d'un premier échange.",
      h1: 'Discutons de votre projet',
      lede: "Décrivez votre besoin en quelques lignes. Nous vous répondons par e-mail pour convenir d'un premier échange.",
      nextTitle: 'Et ensuite ?',
      next: [
        'Nous lisons votre demande et revenons vers vous par e-mail, avec nos questions éventuelles.',
        'Nous organisons un premier échange en visioconférence, sans engagement.',
        'Si le projet nous correspond, nous vous proposons un cadrage et une estimation écrite.',
      ],
      directTitle: 'Nous écrire directement',
    },

    blog: {
      title: 'Blog : la vie et les projets de TicTek à Madagascar | TicTek',
      description:
        'Les coulisses de TicTek, équipe de développeurs à Madagascar : projets en cours, façon de travailler et vie d’équipe.',
      h1: 'Blog',
      lede: 'Les coulisses de TicTek : nos projets, notre façon de travailler et la vie de l’équipe à Madagascar.',
      readMore: 'Lire l’article',
      allPosts: 'Tous les articles',
    },

    privacy: {
      title: 'Confidentialité et cookies | TicTek',
      description:
        'Quelles données le site TicTek collecte, pourquoi, avec quels services (EmailJS, Google Analytics, Vercel) et comment exercer vos droits.',
      h1: 'Confidentialité et cookies',
      lede: 'Ce site collecte le minimum de données nécessaire. Voici lesquelles, pourquoi et comment exercer vos droits.',
      sections: [
        {
          id: 'responsable',
          title: 'Qui est responsable',
          paragraphs: ['TicTek, équipe de développeurs basée à Antananarivo, Madagascar. Pour toute question sur vos données : {email}.'],
        },
        {
          id: 'formulaires',
          title: 'Formulaires de contact et de candidature',
          paragraphs: [
            'Les informations que vous saisissez (nom, e-mail, description du projet ou candidature) servent uniquement à vous répondre. Elles nous sont transmises par e-mail via le service EmailJS, puis conservées dans notre messagerie le temps nécessaire au suivi de votre demande.',
            'Elles ne sont ni revendues, ni utilisées pour de la prospection.',
          ],
        },
        {
          id: 'mesure-audience',
          title: 'Mesure d’audience (Google Analytics)',
          paragraphs: [
            'Avec votre accord uniquement, nous utilisons Google Analytics 4 pour savoir quelles pages sont consultées et d’où viennent les visiteurs. Tant que vous n’avez pas accepté, aucun script Google n’est chargé et aucun cookie n’est déposé.',
            'Cookies utilisés après accord : _ga et _ga_<identifiant>, d’une durée de 13 mois au maximum. Les fonctions publicitaires de Google restent désactivées.',
            'Vous pouvez changer d’avis à tout moment avec le lien « Gérer les cookies » en bas de chaque page.',
          ],
        },
        {
          id: 'preferences',
          title: 'Préférences enregistrées sur votre appareil',
          paragraphs: [
            'Votre choix concernant les cookies est enregistré dans le stockage local de votre navigateur, et le fait d’avoir déjà vu l’animation d’ouverture dans son stockage de session. Rien de cela n’est transmis à TicTek.',
          ],
        },
        {
          id: 'hebergement',
          title: 'Hébergement',
          paragraphs: ['Le site est hébergé par Vercel Inc., qui traite les données techniques nécessaires à l’affichage des pages (adresse IP, journaux de connexion).'],
        },
        {
          id: 'droits',
          title: 'Vos droits',
          paragraphs: [
            'Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à {email}. Si vous résidez dans l’Union européenne, vous pouvez aussi adresser une réclamation à l’autorité de protection des données de votre pays (la CNIL en France).',
          ],
        },
      ],
    },

    notFound: {
      title: 'Page introuvable | TicTek',
      description: "Cette page n'existe pas ou a été déplacée.",
      h1: 'Page introuvable',
      lede: "Cette page n'existe pas ou a été déplacée. Voici quelques liens utiles :",
    },
  },

  form: forms.fr,
};

export default fr;
