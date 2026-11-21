import forms from './form';
import marketPages from './markets.fr';

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
      outsourcing: 'Externalisation',
      work: 'Réalisations',
      collaboration: 'Collaboration',
      about: 'À propos',
      contact: 'Contact',
      pricing: 'Tarifs',
      careers: 'Nous rejoindre',
      privacy: 'Confidentialité',
      blog: 'Blog',
      switzerland: 'Suisse',
      canada: 'Canada',
    },
    slogan: 'Votre partenaire international en développement logiciel, basé à Madagascar.',
    ctaContact: 'Discuter de votre projet',
    requestQuote: 'Demander un devis',
    cta: {
      title: 'Vous avez un projet ou souhaitez renforcer votre équipe technique ? Parlons-en.',
      text: 'Ressources techniques supplémentaires, partenaire de développement ou automatisation de vos opérations : TicTek est prête à vous accompagner.',
      button: 'Démarrer la conversation',
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
    linkedinProfile: 'Voir le profil LinkedIn',
    booking: 'Réserver un appel de 30 min',
    // Commitments shown on the home, about and contact pages (Guarantees.jsx).
    guarantees: {
      title: 'Nos engagements',
      items: [
        { icon: 'code', title: 'Le code vous appartient', text: 'Une fois payé, le code source et tous les accès sont à vous.' },
        { icon: 'lock', title: 'Confidentialité', text: 'Nous signons un accord de confidentialité (NDA) sur simple demande.' },
        { icon: 'shield', title: 'Garantie de correction', text: 'Les bugs constatés après livraison sont corrigés gratuitement, sur une durée précisée dans le devis.' },
        { icon: 'clock', title: 'Réponse sous 24 h', text: 'Chaque demande reçoit une réponse sous un jour ouvré.' },
      ],
    },
    // Scrolling band above the footer (KeywordBand.jsx).
    keywords: ['Développement logiciel', 'Développeurs dédiés', 'Externalisation IT', 'Marque blanche', 'Automatisation IA', 'Maintenance'],
    // Hero trust points (Home.jsx) and the outsourcing page.
    trust: ['Équipe basée à Madagascar', 'Collaboration internationale', 'Français et anglais', 'Solutions sur mesure', 'Coûts optimisés'],
  },

  // Keys follow site.js clocks and markets.js clocks.
  cities: {
    antananarivo: { city: 'Antananarivo', country: 'Madagascar' },
    geneva: { city: 'Genève', country: 'Suisse' },
    paris: { city: 'Paris', country: 'France' },
    london: { city: 'Londres', country: 'Royaume-Uni' },
    montreal: { city: 'Montréal', country: 'Canada' },
    vancouver: { city: 'Vancouver', country: 'Canada' },
    'new-york': { city: 'New York', country: 'États-Unis' },
    dubai: { city: 'Dubaï', country: 'Émirats arabes unis' },
    sydney: { city: 'Sydney', country: 'Australie' },
  },

  // Live clocks (Clocks.jsx).
  hours: {
    languagesLabel: 'Nous travaillons en',
    languages: ['Français', 'Anglais'],
    listLabel: 'Heure actuelle à Madagascar et chez nos clients',
    ours: 'Notre heure · UTC+3',
    same: 'Même heure',
    hourUnit: 'h',
    versus: 'par rapport à Madagascar',
  },

  footer: {
    about:
      'TicTek est une équipe de développement logiciel basée à Madagascar, au service d’entreprises du monde entier, en français et en anglais : logiciels sur mesure, développeurs dédiés, externalisation informatique, marque blanche, automatisation IA et maintenance.',
    servicesTitle: 'Services',
    marketsTitle: 'Externalisation',
    companyTitle: 'Entreprise',
    contactTitle: 'Contact',
    location: 'Antananarivo, Madagascar · clients à l’international',
    rights: 'Tous droits réservés.',
  },

  // The six offers. Keys follow site.js offerIds.
  offers: {
    development: {
      title: 'Développement logiciel',
      short: 'Applications web, mobiles et logiciels métier conçus autour de vos processus.',
      need: 'Les outils du marché ne correspondent pas à votre façon de travailler, ou vous devez créer un nouveau produit.',
      points: [
        'Applications web, portails clients et outils internes',
        'Applications iOS et Android à partir d’une base de code commune',
        'Produits SaaS, backends et API',
        'Du cadrage à la mise en production, avec la documentation',
      ],
      audience: 'PME, startups et organisations avec un besoin spécifique.',
      type: 'custom',
    },
    dedicated: {
      title: 'Développeurs dédiés',
      short: 'Des développeurs qui rejoignent votre équipe et travaillent dans vos outils.',
      need: 'Votre feuille de route avance plus vite que votre équipe, et recruter localement prend des mois.',
      points: [
        'Un ou plusieurs développeurs aux côtés de votre équipe',
        'Intégration à votre Git, vos tickets et votre messagerie',
        'Revues de code et rituels d’équipe',
        'Capacité ajustée à vos besoins',
      ],
      audience: 'Startups, éditeurs de logiciels et équipes informatiques internes.',
      type: 'dedicated',
    },
    outsourcing: {
      title: 'Externalisation informatique',
      short: 'Confiez une partie de votre activité informatique à une équipe qui s’en charge.',
      need: 'Vous voulez déléguer du développement ou des tâches techniques sans constituer ni encadrer une équipe interne.',
      points: [
        'Un projet complet ou un périmètre bien défini',
        'Un interlocuteur technique unique qui pilote pour vous',
        'Points d’avancement et démonstrations réguliers',
        'Un code documenté qui vous appartient',
      ],
      audience: 'Entreprises sans équipe technique, ou qui veulent libérer la leur.',
      type: 'team',
    },
    'white-label': {
      title: 'Développement en marque blanche',
      short: 'La réalisation technique pour les agences et partenaires, sous votre marque.',
      need: 'Votre agence remporte des projets mais manque de capacité technique pour tous les réaliser.',
      points: [
        'Tout ou partie de vos projets, réalisés en toute discrétion',
        'Aucun contact avec vos clients sans votre accord',
        'Travail dans vos outils, selon vos conventions',
        'Facturation à votre agence uniquement',
      ],
      audience: 'Agences web, digitales et de communication, cabinets de conseil.',
      type: 'white-label',
    },
    'ai-automation': {
      title: 'IA et automatisation',
      short: 'Automatisez les tâches répétitives et utilisez l’IA là où elle est vraiment utile.',
      need: 'Vos équipes perdent des heures à recopier des données entre vos outils, ou vous voulez exploiter l’IA sur vos données sans expérimentation sans fin.',
      points: [
        'Workflows automatisés entre CRM, facturation, e-mails et outils internes',
        'Agents et assistants IA connectés à vos données',
        'Traitement de documents, d’e-mails et de formulaires',
        'Un avis franc sur les cas où l’IA n’est pas la bonne réponse',
      ],
      audience: 'Équipes commerciales, administratives et opérationnelles, entreprises qui traitent beaucoup de texte.',
      type: 'ai-automation',
    },
    support: {
      title: 'Maintenance et support technique',
      short: 'Un logiciel sécurisé, fonctionnel et qui continue d’évoluer.',
      need: 'Votre application est en production et demande corrections, mises à jour et évolutions, mais personne n’a le temps de s’en occuper.',
      points: [
        'Corrections et évolutions planifiées',
        'Mises à jour des dépendances et correctifs de sécurité',
        'Reprise d’applications existantes après audit du code',
        'Volume mensuel défini ensemble',
      ],
      audience: 'Entreprises dont un logiciel est en production.',
      type: 'maintenance',
    },
  },

  // Technical areas of expertise (services page). Keys follow site.js expertiseIds.
  expertise: {
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
  modelLabels: {
    audience: 'Pour qui',
    when: 'Quand le choisir',
    how: 'Comment ça marche',
    benefits: 'Les avantages',
  },
  models: {
    'staff-augmentation': {
      title: 'Développeur dédié',
      short: 'Un développeur qui travaille à distance au sein de votre équipe.',
      audience: 'Entreprises avec une équipe technique ou un responsable technique : startups, éditeurs de logiciels, DSI.',
      when: 'Vous avez besoin de capacité supplémentaire ou d’une compétence précise, pour quelques mois ou plus, sans passer par un recrutement local.',
      how: 'Le développeur rejoint vos outils (Git, tickets, messagerie) et vos rituels, et travaille sur vos priorités. Vous gérez le backlog, nous nous occupons du reste.',
      benefits: [
        'Pas de long processus de recrutement',
        'Volume ajusté à l’évolution de vos besoins',
        'Plages horaires communes fixées au démarrage',
        'Un interlocuteur TicTek pour le suivi',
      ],
      cta: 'Intégrer un développeur dédié',
      type: 'dedicated',
    },
    project: {
      title: 'Équipe de développement externalisée',
      short: 'TicTek prend en charge une partie ou la totalité de votre projet.',
      audience: 'PME et organisations sans équipe de développement, ou équipes qui veulent déléguer un périmètre complet.',
      when: 'Vous avez un besoin défini, comme une application, un MVP ou un outil à remplacer, et vous voulez une équipe qui le livre.',
      how: 'Nous cadrons le projet avec vous, fixons par écrit le périmètre, les étapes et le budget, puis développons en itérations courtes avec des démonstrations régulières jusqu’à la livraison.',
      benefits: [
        'Un interlocuteur unique du cadrage à la livraison',
        'Périmètre, planning et budget fixés avant le démarrage',
        'Recette avec vous avant la mise en production',
        'Un code documenté qui vous appartient',
      ],
      cta: 'Externaliser votre projet',
      type: 'team',
    },
    'white-label': {
      title: 'Partenariat en marque blanche',
      short: 'Nous travaillons en coulisses pour les agences et partenaires.',
      audience: 'Agences web, digitales et de communication, cabinets de conseil et ESN.',
      when: 'Vous voulez prendre plus de projets, ou proposer des services techniques que vous n’avez pas en interne, tout en gardant la relation client.',
      how: 'Vous gardez la relation et la marque ; nous réalisons tout ou partie du travail technique, dans vos outils et selon vos conventions.',
      benefits: [
        'Aucun contact direct avec votre client sans votre accord',
        'Un interlocuteur technique unique pour votre équipe',
        'Forfait par projet ou volume mensuel',
        'Discrétion totale',
      ],
      cta: 'Devenir partenaire',
      type: 'white-label',
    },
  },

  process: [
    { title: 'Découverte', text: 'Nous comprenons vos besoins, votre contexte et vos contraintes.' },
    { title: 'Planification', text: 'Nous définissons la solution, les délais et le budget, par écrit.' },
    { title: 'Développement', text: 'Nous développons en itérations courtes, avec un suivi régulier.' },
    { title: 'Livraison', text: 'Nous validons la solution avec vous, puis la mettons en production.' },
    { title: 'Support', text: 'Nous assurons la maintenance et les évolutions.' },
  ],

  // Four reasons to choose TicTek (home page).
  advantages: [
    {
      icon: 'coins',
      title: 'Des coûts optimisés',
      text: 'Travaillez avec une équipe de développement basée à Madagascar et réduisez le coût de vos logiciels, sans transiger sur la qualité.',
    },
    {
      icon: 'layers',
      title: 'Une collaboration flexible',
      text: 'Mission ponctuelle, renfort technique ou collaboration continue : vous choisissez le niveau d’intervention et l’ajustez en cours de route.',
    },
    {
      icon: 'globe',
      title: 'Une communication internationale',
      text: 'Échangez en français ou en anglais, directement avec les développeurs, sur des créneaux adaptés à votre fuseau horaire.',
    },
    {
      icon: 'code',
      title: 'Une expertise technique',
      text: 'Backend, frontend, mobile, automatisation et IA : une seule équipe pour les compétences dont votre projet a besoin.',
    },
  ],

  // Security and trust practices (Security.jsx). No certification is claimed.
  security: {
    eyebrow: 'Sécurité et confiance',
    title: 'Des pratiques professionnelles sur lesquelles vous pouvez compter',
    lede: 'Travailler avec une équipe à distance demande de la confiance. Voici comment nous protégeons vos projets et vos informations.',
    items: [
      { icon: 'lock', title: 'Confidentialité', text: 'Votre projet et vos informations restent entre nous. Rien n’est partagé ni réutilisé sans votre accord.' },
      { icon: 'key', title: 'Gestion des accès', text: 'Les accès sont limités aux personnes qui travaillent sur votre projet, et rendus ou révoqués à la fin de la mission.' },
      { icon: 'shield', title: 'Protection des informations', text: 'Aucun identifiant n’est envoyé en clair par e-mail ou messagerie, et les données de production ne sont utilisées que lorsque le travail l’exige.' },
      { icon: 'branch', title: 'Gestion du code source', text: 'Le code est versionné dans un dépôt Git, idéalement le vôtre, avec des modifications relues et un historique complet.' },
      { icon: 'file', title: 'Documentation', text: 'La documentation technique accompagne le code, pour que votre équipe ou un autre prestataire puisse reprendre le projet.' },
      { icon: 'list', title: 'Suivi des tâches', text: 'Chaque demande est suivie dans un outil partagé : vous savez toujours ce qui est en cours.' },
      { icon: 'chat', title: 'Communication régulière', text: 'Points réguliers et démonstrations, avec un interlocuteur identifié qui répond à vos questions.' },
      { icon: 'signature', title: 'NDA sur demande', text: 'Nous signons un accord de confidentialité avant que vous partagiez des informations sensibles.' },
    ],
    note: 'Ce sont nos pratiques de travail, pas des certifications. Nous pouvons les inscrire dans votre contrat.',
  },

  // Home page FAQ (also FAQPage structured data).
  faq: [
    {
      q: 'Pourquoi externaliser son développement logiciel à Madagascar ?',
      a: 'Madagascar associe une structure de coûts plus légère qu’en Europe ou en Amérique du Nord et une équipe qui travaille en français et en anglais. À UTC+3, l’île partage l’essentiel de la journée de travail avec l’Europe, et des créneaux convenus fonctionnent avec l’Amérique du Nord et l’Australie. Vous accédez à des compétences de développement à coût optimisé, sans les contraintes d’un recrutement local.',
    },
    {
      q: 'Comment se passe la collaboration à distance ?',
      a: 'Visioconférence pour les échanges importants, messagerie pour le quotidien, outil de tickets partagé pour suivre les demandes et démonstrations régulières sur un environnement de test. Si vous avez déjà vos outils, nous travaillons dedans.',
    },
    {
      q: 'Travaillez-vous avec des entreprises internationales ?',
      a: 'Oui. Nous travaillons à distance avec des entreprises dans différents pays et fuseaux horaires. Au démarrage, nous fixons des créneaux d’échange réguliers adaptés à vos horaires ; le reste du suivi se fait en asynchrone dans vos outils.',
    },
    {
      q: 'Parlez-vous français et anglais ?',
      a: 'Oui. Appels, échanges écrits, documentation et livrables peuvent être en français ou en anglais, selon votre préférence.',
    },
    {
      q: 'Peut-on recruter un développeur dédié ?',
      a: 'Oui. Un développeur TicTek peut rejoindre votre équipe à distance, travailler dans vos outils et suivre vos priorités. Le volume et la durée sont fixés ensemble et peuvent évoluer.',
    },
    {
      q: 'Proposez-vous du développement en marque blanche ?',
      a: 'Oui. Agences et partenaires peuvent nous confier tout ou partie de leurs projets. Vous gardez la relation client et votre marque ; nous n’avons aucun contact direct avec votre client sans votre accord.',
    },
    {
      q: 'Comment gérez-vous la sécurité des projets ?',
      a: 'Accès limités aux personnes du projet, code dans un dépôt Git avec des modifications relues, aucun identifiant envoyé en clair, documentation livrée avec le code et NDA sur demande. Une fois le travail payé, le code source et tous les accès vous appartiennent.',
    },
    {
      q: 'Comment vos services sont-ils facturés ?',
      a: 'Selon le modèle de collaboration et votre projet : devis par projet, collaboration mensuelle, développeur dédié, équipe externalisée ou contrat de maintenance. Chaque prix est fixé par écrit avant le démarrage.',
    },
    {
      q: 'Peut-on commencer par un petit projet ?',
      a: 'Oui, et c’est souvent la meilleure façon de commencer : un périmètre défini, un délai court et une base concrète pour décider de la suite.',
    },
    {
      q: 'Assurez-vous la maintenance dans la durée ?',
      a: 'Oui. Nous maintenons et faisons évoluer des applications en production, que nous les ayons développées ou non (après un audit du code) : corrections, mises à jour, correctifs de sécurité et nouvelles fonctionnalités.',
    },
  ],

  pages: {
    home: {
      title: 'Externalisation informatique à Madagascar | TicTek',
      description:
        'TicTek, votre équipe de développement externalisée à Madagascar : logiciels sur mesure, développeurs dédiés, externalisation et IA, en français ou en anglais.',
      hero: {
        // titleAccent is written in hollow handwritten letters (Home.jsx).
        title: 'Votre équipe technique externalisée,',
        titleAccent: 'sans recruter.',
        lede:
          'Nous développons, maintenons et faisons évoluer vos logiciels et votre système d’information, depuis Madagascar, sur vos horaires.',
        ctaContact: 'Discutons de votre projet',
        ctaWork: 'Découvrir nos réalisations',
        ctaServices: 'Découvrir nos services',
        trustLabel: 'Ce que vous apporte TicTek',
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
      why: {
        eyebrow: 'Pourquoi TicTek',
        title: 'Pourquoi choisir TicTek ?',
        lede: 'Un partenaire technique qui s’adapte à votre façon de travailler, et non l’inverse.',
      },
      services: {
        eyebrow: 'Services',
        title: 'Nos services',
        lede: 'Vos besoins d’abord, la technologie ensuite.',
        link: 'Tous les services',
      },
      models: {
        eyebrow: 'Collaboration',
        title: 'Trois façons de travailler ensemble',
        lede: 'Choisissez le modèle adapté à votre organisation. Vous pourrez en changer en cours de route.',
        link: 'Comparer les modèles',
      },
      work: {
        eyebrow: 'Études de cas',
        title: 'Nos réalisations',
        lede: 'Des projets réalisés par TicTek en tant que prestataire, du cadrage à la mise en production.',
        link: 'Toutes les études de cas',
        read: 'Lire l’étude de cas',
      },
      process: {
        eyebrow: 'Méthode',
        title: 'Notre processus',
        lede: 'Cinq étapes, du premier échange au support dans la durée.',
      },
      clients: {
        eyebrow: 'Collaboration internationale',
        title: 'Nous travaillons à votre heure',
        lede: 'Depuis Madagascar (UTC+3) : une à deux heures d’écart avec l’Europe, des créneaux convenus avec l’Amérique du Nord et l’Australie.',
      },
      team: {
        eyebrow: 'L’équipe',
        title: 'Les personnes derrière TicTek',
        lede: 'Vous échangez directement avec nous, sans intermédiaire.',
        link: 'En savoir plus sur nous',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions fréquentes',
      },
    },

    services: {
      title: 'Services : développement logiciel et externalisation IT | TicTek',
      description:
        'Développement logiciel sur mesure, développeurs dédiés, externalisation informatique, marque blanche, IA et automatisation, maintenance : les services de TicTek.',
      h1: 'Développement logiciel et externalisation informatique',
      lede:
        'Six façons d’accompagner votre entreprise, présentées par le besoin auquel elles répondent. Vous hésitez ? Décrivez-nous votre projet : il en combine souvent plusieurs.',
      labels: {
        need: 'Votre besoin',
        deliverables: 'Ce que nous livrons',
        audience: 'Pour qui',
        problem: 'Le problème',
        tech: 'Technologies',
        projects: 'Réalisations liées',
        cta: 'Discuter de ce service',
      },
      expertise: {
        eyebrow: 'Expertise technique',
        title: 'L’expertise derrière nos services',
        lede: 'Les domaines techniques dans lesquels notre équipe travaille au quotidien. Chacun part d’un problème à résoudre.',
      },
      quality: {
        title: 'La qualité fait partie de chaque service',
        items: [
          'Tests automatisés écrits avec le code et exécutés à chaque modification via la CI/CD',
          'Revue de code avant chaque intégration',
          'Bonnes pratiques de sécurité applicative (OWASP Top 10)',
          'Environnements conteneurisés : le test reflète la production',
        ],
      },
    },

    work: {
      title: 'Réalisations : études de cas logiciels, IA et mobile | TicTek',
      description:
        'Études de cas de projets conçus et développés par TicTek : plateforme VTC avec IA et blockchain, moteur de décision d’architecture, assistant de candidature IA.',
      h1: 'Nos réalisations',
      lede:
        'Des projets réalisés par TicTek en tant que prestataire, du cadrage à la mise en production. Ils montrent notre façon de travailler et ce que nous pouvons construire pour vous.',
      labels: {
        link: 'Voir le projet',
        origin: { provider: 'Réalisé en tant que prestataire' },
        context: 'Contexte',
        problem: 'Le problème',
        solution: 'La solution',
        features: 'Fonctionnalités principales',
        role: 'Contribution de TicTek',
        facts: 'En bref',
        tech: 'Technologies',
      },
    },

    collaboration: {
      title: 'Collaboration : développeur dédié, équipe ou marque blanche | TicTek',
      description:
        'Développeur dédié, équipe externalisée ou marque blanche : pour qui, quand choisir chaque modèle de collaboration TicTek et comment il fonctionne.',
      h1: 'Comment travailler avec TicTek',
      lede: 'Trois modèles de collaboration, une seule méthode. Choisissez celui qui correspond à votre organisation ; vous pourrez en changer en cours de route.',
      processTitle: 'Notre processus',
      processLede: 'Chaque étape s’applique à un projet externalisé. Pour un développeur dédié ou un partenariat en marque blanche, nous suivons votre propre processus.',
      estimateTitle: 'Ce qui nous aide à estimer votre projet',
      estimateItems: [
        'Le problème à résoudre et les personnes qui utiliseront le logiciel',
        'Les outils ou systèmes existants à connecter',
        'Vos contraintes de délai et, si possible, une fourchette de budget',
        'Tout support existant : cahier des charges, maquettes, captures d’écran',
      ],
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          q: 'Combien coûte un projet ?',
          a: 'Cela dépend du modèle de collaboration, du périmètre, des intégrations et du niveau de qualité attendu. Le prix est fixé dans un devis écrit après le cadrage, avant tout démarrage. Indiquer une fourchette de budget dans le formulaire nous aide à proposer une approche adaptée.',
        },
        {
          q: 'Peut-on changer de modèle en cours de route ?',
          a: 'Oui. Beaucoup de collaborations commencent par un projet défini, puis se poursuivent en maintenance ou avec un développeur dédié. Nous ajustons l’organisation avec vous.',
        },
        {
          q: 'Travaillez-vous avec des clients dans d’autres fuseaux horaires ?',
          a: 'Oui, nous travaillons à l’international. Madagascar est à UTC+3, sans changement d’heure : une à deux heures d’écart avec la France et la Suisse, sept à huit heures avec l’Est du Canada. Au démarrage, nous fixons des créneaux d’échange réguliers adaptés à vos horaires ; le reste du suivi se fait en asynchrone dans vos outils.',
        },
        {
          q: 'Pouvez-vous reprendre une application existante ?',
          a: 'Oui. Nous commençons par un audit du code, des dépendances et de l’infrastructure pour évaluer le projet, puis nous proposons un plan de reprise.',
        },
      ],
    },

    pricing: {
      title: 'Tarifs : des prix adaptés à vos besoins | TicTek',
      description:
        'Devis par projet, collaboration mensuelle, développeur dédié, équipe externalisée ou contrat de maintenance : comment TicTek fixe ses prix et comment obtenir un devis.',
      h1: 'Des tarifs adaptés à vos besoins, à votre projet et à votre modèle de collaboration.',
      lede:
        'Chaque projet est différent. Nos prix dépendent de vos besoins, de votre projet et du modèle de collaboration choisi, et sont toujours fixés par écrit avant le démarrage.',
      optionsTitle: 'Les formules possibles',
      fitLabel: 'Idéal pour :',
      options: [
        {
          id: 'devis-projet',
          icon: 'project',
          title: 'Devis par projet',
          text: 'Un prix global pour un périmètre défini ensemble lors du cadrage.',
          points: ['Prix, livrables et étapes fixés dans le devis', 'Hors périmètre chiffré à part, avant tout travail'],
          fit: 'applications, logiciels métier, MVP, projets en marque blanche.',
        },
        {
          id: 'mensuel',
          icon: 'calendar',
          title: 'Collaboration mensuelle',
          text: 'Un volume mensuel de temps de développement, pour un produit qui évolue.',
          points: ['Volume fixé ensemble et ajustable', 'Suivi du temps partagé avec vous'],
          fit: 'produits en cours, besoins évolutifs, agences.',
        },
        {
          id: 'developpeur-dedie',
          icon: 'staff-augmentation',
          title: 'Développeur dédié',
          text: 'Un développeur qui rejoint votre équipe, facturé au mois.',
          points: ['Profil choisi selon vos besoins', 'Durée fixée ensemble'],
          fit: 'entreprises avec une équipe technique.',
        },
        {
          id: 'equipe-externalisee',
          icon: 'layers',
          title: 'Équipe externalisée',
          text: 'Une équipe qui prend en charge un projet complet ou un périmètre défini.',
          points: ['Un interlocuteur unique qui pilote le projet', 'Étapes et échéancier fixés dans le devis'],
          fit: 'entreprises sans équipe de développement.',
        },
        {
          id: 'maintenance',
          icon: 'maintenance',
          title: 'Contrat de maintenance',
          text: 'Un montant mensuel pour garder une application en production sécurisée et à jour.',
          points: ['Mises à jour de sécurité et des dépendances', 'Corrections et petites évolutions'],
          fit: 'applications déjà en production.',
        },
      ],
      factorsTitle: 'Ce qui fait varier le prix',
      factors: [
        { title: 'Modèle de collaboration', text: 'Devis par projet, volume mensuel, développeur dédié ou contrat de maintenance.' },
        { title: 'Périmètre', text: 'Nombre d’écrans, de fonctionnalités et de types d’utilisateurs.' },
        { title: 'Plateformes', text: 'Web, iOS, Android, ou plusieurs à la fois.' },
        { title: 'Intégrations', text: 'Connexion à vos outils existants, paiement en ligne, API tierces, IA.' },
        { title: 'Exigences', text: 'Volume de données, sécurité, couverture de tests, disponibilité attendue.' },
        { title: 'Délai', text: 'Un planning serré peut demander plus de développeurs en parallèle.' },
      ],
      stepsTitle: 'Comment obtenir un devis',
      steps: [
        'Décrivez votre projet via le formulaire de contact, idéalement avec une fourchette de budget.',
        'Nous en discutons lors d’un premier échange, gratuit et sans engagement.',
        'Nous vous envoyons une proposition écrite : périmètre, étapes, planning et prix.',
      ],
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          q: 'Pourquoi ne pas afficher de prix fixes ?',
          a: 'Deux projets qui se ressemblent peuvent demander des efforts très différents selon les intégrations, les volumes et les exigences. Un prix affiché sans connaître votre projet serait soit trompeur, soit gonflé par précaution. Nous préférons vous remettre un devis écrit précis.',
        },
        {
          q: 'Le premier échange est-il gratuit ?',
          a: 'Oui, le premier échange est gratuit et sans engagement. Pour un projet complexe, nous pouvons proposer une phase de cadrage avant le devis définitif ; elle est alors chiffrée à l’avance.',
        },
        {
          q: 'Peut-on commencer petit ?',
          a: 'Oui. Un premier projet de taille réduite est un bon moyen de tester la collaboration avant d’aller plus loin.',
        },
        {
          q: 'Comment se passe le paiement ?',
          a: 'L’échéancier (acompte, étapes, solde ou facturation mensuelle) est précisé dans chaque devis et validé avec vous avant tout démarrage.',
        },
      ],
    },

    outsourcing: {
      title: 'Externalisation du développement logiciel à Madagascar | TicTek',
      description:
        'Externalisez votre développement informatique avec TicTek, équipe à distance à Madagascar : développeur dédié, équipe externalisée ou marque blanche.',
      h1: 'Externalisez votre développement informatique avec TicTek.',
      lede:
        'Une équipe de développement à distance, basée à Madagascar, qui conçoit, maintient et fait évoluer vos logiciels, en français ou en anglais, à coût optimisé et avec les pratiques professionnelles que vous attendez.',
      why: {
        eyebrow: 'Pourquoi externaliser',
        title: 'Recruter ou externaliser ?',
        lede: 'L’externalisation fait avancer vos logiciels sans le coût, les délais ni la charge d’encadrement d’un recrutement.',
        inhouse: {
          title: 'Recruter en interne',
          items: [
            'Souvent des mois pour trouver le bon profil',
            'Salaires et charges fixes, même en période creuse',
            'Une compétence par personne recrutée',
            'Le savoir part avec la personne',
            'Le management reste à votre charge',
          ],
        },
        tictek: {
          title: 'Externaliser chez TicTek',
          items: [
            'Démarrage dès que le périmètre est validé',
            'Une capacité qui suit vos projets',
            'Web, mobile, backend, IA : plusieurs compétences dans une équipe',
            'Code documenté : la continuité est assurée',
            'Un interlocuteur unique qui pilote pour vous',
          ],
        },
      },
      madagascar: {
        eyebrow: 'Pourquoi Madagascar',
        title: 'Pourquoi travailler avec une équipe à Madagascar ?',
        items: [
          {
            icon: 'clock',
            title: 'Un fuseau horaire pratique',
            text: 'UTC+3, sans changement d’heure : une à deux heures d’écart avec l’Europe de l’Ouest, et des créneaux convenus avec l’Amérique du Nord et l’Australie.',
          },
          {
            icon: 'globe',
            title: 'Français et anglais',
            text: 'Le français est une langue d’affaires courante à Madagascar, et notre équipe travaille en anglais avec ses clients internationaux.',
          },
          {
            icon: 'coins',
            title: 'Des coûts optimisés',
            text: 'Une structure de coûts plus légère qu’en Europe ou en Amérique du Nord : une plus grande part de votre budget va à votre produit.',
          },
          {
            icon: 'code',
            title: 'Des standards professionnels',
            text: 'Des outils et pratiques modernes : Git, revues de code, tests automatisés, intégration continue et documentation.',
          },
        ],
      },
      remote: {
        title: 'Les avantages d’une équipe à distance',
        items: [
          'Ni recrutement local, ni intégration, ni frais de bureaux',
          'Une capacité qui augmente ou diminue avec vos projets',
          'Plusieurs compétences dans une équipe, au lieu d’un recrutement par compétence',
          'Un travail qui avance en asynchrone pendant que vous êtes déconnecté',
          'Un code documenté : le savoir reste dans votre entreprise',
        ],
      },
      models: {
        eyebrow: 'Modèles de collaboration',
        title: 'Choisissez votre modèle de collaboration',
        lede: 'Trois organisations possibles, selon que vous avez une équipe technique et ce que vous souhaitez déléguer.',
      },
      skills: {
        title: 'Les compétences mobilisables',
        lede: 'Les technologies avec lesquelles notre équipe travaille. Dites-nous ce dont vous avez besoin : nous vous dirons franchement si nous sommes la bonne équipe.',
      },
      audiences: {
        title: 'À qui s’adressent nos services ?',
        items: [
          { icon: 'building', title: 'PME', text: 'Des outils sur mesure et de l’automatisation, sans constituer d’équipe technique interne.' },
          { icon: 'rocket', title: 'Startups', text: 'Construisez votre MVP ou renforcez votre équipe rapidement, en gardant vos coûts sous contrôle.' },
          { icon: 'white-label', title: 'Agences digitales', text: 'Prenez plus de projets avec un partenaire de développement en marque blanche.' },
          { icon: 'briefcase', title: 'Cabinets de conseil', text: 'Transformez vos recommandations en logiciels opérationnels pour vos clients.' },
          { icon: 'users', title: 'Entreprises non techniques', text: 'Appuyez-vous sur une équipe qui explique clairement et prend en charge la partie technique.' },
          { icon: 'staff-augmentation', title: 'Entreprises avec une équipe IT', text: 'Ajoutez de la capacité ou une compétence précise à votre équipe, aussi longtemps que nécessaire.' },
        ],
      },
      process: {
        title: 'Comment nous travaillons ensemble',
        lede: 'Une méthode claire, quel que soit le modèle de collaboration.',
      },
      maintenance: {
        title: 'La maintenance après la livraison',
        text: 'La livraison n’est pas une fin. Nous pouvons garder votre logiciel sécurisé et à jour, et continuer à le faire évoluer avec votre activité.',
        points: [
          'Corrections et évolutions planifiées',
          'Mises à jour des dépendances et correctifs de sécurité',
          'Volume mensuel défini ensemble',
        ],
        link: 'Maintenance et support technique',
      },
      ctaMid: {
        title: 'Vous hésitez entre plusieurs modèles ?',
        text: 'Décrivez-nous votre situation : nous vous proposons le modèle de collaboration adapté lors d’un premier échange, gratuit et sans engagement.',
      },
      faqTitle: 'Externalisation : questions fréquentes',
      faq: [
        {
          q: 'Que peut-on externaliser chez TicTek ?',
          a: 'Le développement d’une nouvelle application, une partie d’un projet existant, la maintenance, l’automatisation de processus ou l’intégration de l’IA. Vous pouvez aussi intégrer un développeur à votre propre équipe.',
        },
        {
          q: 'Dans quels délais pouvez-vous démarrer ?',
          a: 'Dès que le périmètre et le modèle de collaboration sont validés. Un premier échange suffit pour vous dire quand nous pouvons démarrer votre projet.',
        },
        {
          q: 'À qui appartient le code ?',
          a: 'À vous. Une fois le travail payé, le code source et tous les accès vous appartiennent. Idéalement, le code est dans votre propre dépôt dès le premier jour.',
        },
        {
          q: 'Pourra-t-on réinternaliser le développement plus tard ?',
          a: 'Oui. Un code documenté, un historique Git complet et une passation avec votre équipe rendent cette transition simple.',
        },
      ],
    },

    // Country pages (Market.jsx), keys from data/markets.js.
    ...marketPages,

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
      title: 'À propos de TicTek, équipe de développement logiciel à Madagascar',
      description:
        'TicTek, équipe de développement logiciel basée à Antananarivo (Madagascar) au service d’entreprises du monde entier : mission, vision, valeurs, équipe et méthodes.',
      h1: 'À propos de TicTek',
      lede:
        'TicTek est une équipe de développement logiciel basée à Antananarivo, à Madagascar, qui travaille à distance avec des entreprises du monde entier, en français et en anglais. Nous concevons, développons et maintenons des logiciels pour des entreprises qui cherchent un partenaire technique fiable, flexible et attentif aux coûts.',
      intro: [
        {
          id: 'mission',
          title: 'Notre mission',
          text: 'Donner aux entreprises de toutes tailles accès à une équipe de développement fiable : des logiciels sur mesure pour celles qui n’ont pas d’équipe technique, et un renfort solide pour celles qui en ont une.',
        },
        {
          id: 'vision',
          title: 'Notre vision',
          text: 'Montrer qu’une équipe basée à Madagascar peut être un partenaire technique durable pour des entreprises internationales, choisie pour la qualité de son travail et de sa communication, pas seulement pour ses coûts.',
        },
      ],
      valuesTitle: 'Nos valeurs',
      values: [
        { title: 'Transparence', text: 'Des estimations claires et des conseils francs, y compris quand la réponse est « vous n’en avez pas besoin ».' },
        { title: 'Fiabilité', text: 'Nous faisons ce que nous annonçons, dans les délais convenus, et prévenons tôt quand quelque chose change.' },
        { title: 'Qualité', text: 'Un code testé, relu et documenté, que votre équipe peut continuer à faire évoluer.' },
        { title: 'Partenariat', text: 'Nous travaillons comme une extension de votre équipe, avec vos objectifs en tête.' },
      ],
      teamTitle: 'L’équipe',
      teamLede: 'Les personnes qui conçoivent et développent vos projets, et avec qui vous échangez directement.',
      workTitle: 'Comment nous travaillons',
      work: [
        {
          title: 'Organisation',
          text: 'Chaque projet a un responsable technique identifié, votre interlocuteur du cadrage à la livraison. Le travail est organisé en itérations courtes, suivies dans un outil de tickets partagé.',
        },
        {
          title: 'Qualité',
          text: 'Chaque modification passe par une revue de code et des tests automatisés avant d’être livrée. Typage, intégration continue et environnements conteneurisés font partie du quotidien.',
        },
        {
          title: 'Collaboration',
          text: 'Visioconférence pour les échanges importants, messagerie pour le quotidien, démonstrations régulières. Nous suivons vos habitudes et vos outils quand vous en avez.',
        },
        {
          title: 'À distance, depuis Madagascar',
          text: 'Madagascar est à UTC+3, avec une large plage horaire commune avec l’Europe. Avec les autres fuseaux, nous convenons de créneaux adaptés à vos horaires.',
        },
      ],
      skillsTitle: 'Compétences techniques',
      skills: [
        { name: 'Front-end', items: ['TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js'] },
        { name: 'Back-end', items: ['Java / Spring Boot', 'Node.js', 'C# / .NET', 'PHP'] },
        { name: 'Mobile', items: ['React Native', 'Expo'] },
        { name: 'Données', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'] },
        { name: 'DevOps', items: ['Docker', 'CI/CD', 'GitHub Actions', 'GitLab CI'] },
        { name: 'IA et automatisation', items: ['API OpenAI', 'Gemini', 'Claude', 'n8n'] },
        { name: 'Blockchain et Web3', items: ['Solidity', 'Hardhat', 'Ethers.js', 'Polygon'] },
      ],
      commitmentTitle: 'Notre engagement envers nos clients',
      commitmentLede: 'Ce que vous pouvez attendre de nous sur chaque projet.',
    },

    contact: {
      title: 'Contact : discutons de votre projet logiciel | TicTek',
      description:
        'Parlez-nous de votre projet : développeur dédié, équipe externalisée, marque blanche, logiciel sur mesure, IA ou maintenance. Réponse sous un jour ouvré.',
      h1: 'Discutons de votre projet',
      lede: 'Décrivez votre besoin en quelques lignes. Nous vous répondons sous un jour ouvré pour convenir d’un premier échange, en français ou en anglais.',
      formTitle: 'Parlez-nous de votre projet',
      nextTitle: 'Et ensuite ?',
      next: [
        'Nous lisons votre demande et revenons vers vous par e-mail, avec nos questions éventuelles.',
        'Nous organisons un premier échange en visioconférence, gratuit et sans engagement.',
        'Nous vous envoyons une proposition écrite adaptée à votre besoin et à votre modèle de collaboration.',
      ],
      directTitle: 'Nous contacter directement',
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
            'Les informations que vous saisissez (nom, e-mail, entreprise, pays, site web, description du projet, budget et délai, ou candidature) servent uniquement à vous répondre. Elles nous sont transmises par e-mail via le service EmailJS, puis conservées dans notre messagerie le temps nécessaire au suivi de votre demande.',
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
