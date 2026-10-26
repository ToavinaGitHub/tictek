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
    },
    ctaContact: 'Discutons de votre projet',
    cta: {
      title: 'Un projet, une idée, une application à reprendre ?',
      text: 'Expliquez-nous où vous en êtes. Nous vous dirons ce que nous pouvons faire, comment et dans quelles conditions.',
    },
    switchLang: { label: 'EN', title: 'Read this page in English' },
    learnMore: 'En savoir plus',
  },

  footer: {
    about:
      'TicTek conçoit, développe et maintient des logiciels sur mesure : applications web et mobiles, SaaS, API, automatisation et intégration IA. Équipe basée à Madagascar, travail à distance en français et en anglais.',
    servicesTitle: 'Services',
    companyTitle: 'Entreprise',
    contactTitle: 'Contact',
    location: 'Antananarivo, Madagascar',
    rights: 'Tous droits réservés.',
  },

  // Shared by the home page and the services page. Keys follow site.js serviceIds.
  services: {
    web: {
      title: 'Applications web et logiciels métier',
      short: 'Outils internes, portails clients, back-offices : des applications adaptées à vos processus.',
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
      short: 'Une seule base de code pour les deux plateformes, avec mode hors ligne si nécessaire.',
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
      short: 'Des fondations solides pour votre produit en ligne et des API fiables pour vos échanges de données.',
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
      short: 'Moins de saisie manuelle : vos outils échangent leurs données sans copier-coller.',
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
      short: "L'IA générative appliquée à vos documents, vos données et vos outils, là où elle est réellement utile.",
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
    maintenance: {
      title: "Maintenance évolutive et renfort d'équipe",
      short: 'Faire vivre une application existante ou renforcer votre équipe technique.',
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
    { title: 'Premier échange', text: 'Un appel pour comprendre votre besoin, vos contraintes et vos priorités. Sans engagement.' },
    { title: 'Cadrage', text: 'Fonctionnalités, utilisateurs, intégrations, risques : nous clarifions le périmètre et vous remettons une synthèse écrite.' },
    { title: 'Estimation', text: 'Une proposition détaillée : découpage en étapes, planning et budget.' },
    { title: 'Développement', text: 'Des itérations courtes et des démonstrations régulières sur un environnement de test.' },
    { title: 'Tests', text: 'Tests automatisés et recette fonctionnelle avec vous avant chaque mise en production.' },
    { title: 'Livraison', text: 'Mise en production, documentation technique et passation.' },
    { title: 'Maintenance', text: 'Si vous le souhaitez, nous assurons ensuite le suivi, les corrections et les évolutions.' },
  ],

  pages: {
    home: {
      title: 'TicTek | Développement logiciel sur mesure : web, mobile, SaaS et IA',
      description:
        'TicTek conçoit et développe vos applications web et mobiles, SaaS, API et automatisations, avec intégration IA. Équipe basée à Madagascar, en français et en anglais.',
      hero: {
        eyebrow: 'Entreprise de services numériques',
        title: 'Votre partenaire de développement logiciel, du besoin à la mise en production.',
        lede:
          "TicTek accompagne les entreprises dans la création de logiciels web et mobiles, l'automatisation de leurs processus et l'intégration de l'IA. Notre équipe technique, basée à Madagascar, travaille à distance avec ses clients, en français comme en anglais.",
        ctaWork: 'Découvrir nos réalisations',
        ctaServices: 'Découvrir nos services',
        asideTitle: 'Trois façons de travailler avec nous',
      },
      services: {
        title: 'Ce que nous développons pour vous',
        lede: 'Du logiciel métier à l’intégration IA, nous partons de votre problème avant de choisir la technologie.',
        link: 'Voir le détail des services',
      },
      work: {
        title: 'Réalisations récentes',
        link: 'Voir toutes les réalisations',
      },
      models: {
        title: 'Un mode de collaboration adapté à votre situation',
        lede: 'Avec ou sans équipe technique, en direct ou pour le compte de vos clients.',
        link: 'Comparer les modes de collaboration',
      },
      process: {
        title: 'Une méthode claire, du premier échange à la mise en production',
      },
      trust: {
        title: 'Ce sur quoi vous pouvez compter',
        items: [
          {
            title: 'Un interlocuteur technique direct',
            text: 'Vous échangez avec les personnes qui conçoivent et développent votre projet, sans intermédiaire commercial.',
          },
          {
            title: 'Une estimation avant tout engagement',
            text: 'Périmètre, étapes et budget sont posés par écrit avant le démarrage.',
          },
          {
            title: 'De la visibilité en continu',
            text: "Démonstrations régulières et accès à l'environnement de test : vous voyez le logiciel avancer.",
          },
          {
            title: 'Du code pensé pour durer',
            text: 'Tests automatisés, revues de code et documentation font partie du travail, pas des options.',
          },
          {
            title: 'Français et anglais',
            text: "Nous travaillons dans les deux langues, à l'écrit comme à l'oral.",
          },
          {
            title: 'Un décalage horaire réduit avec l’Europe',
            text: 'Madagascar est à UTC+3 : une à deux heures d’écart avec la France et la Suisse.',
          },
        ],
      },
    },

    services: {
      title: 'Services : applications web, mobiles, SaaS, API et IA | TicTek',
      description:
        "Applications web et métier, applications mobiles, SaaS et API, automatisation des processus, intégration IA, maintenance et renfort d'équipe : les services de TicTek.",
      h1: 'Services de développement logiciel sur mesure',
      lede:
        'Six domaines d’intervention, présentés par le problème qu’ils résolvent. Si votre besoin ne rentre dans aucune case, décrivez-le-nous : il recoupe souvent plusieurs d’entre eux.',
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
        'Projets réalisés par TicTek : contexte, problème, solution, stack technique et rôle exact de l’équipe.',
      h1: 'Réalisations',
      lede: 'Chaque projet précise sa nature (client, contribution en équipe, projet interne ou prototype) et le rôle exact de TicTek.',
      kinds: {
        client: 'Projet client',
        team: 'Contribution en équipe',
        personal: 'Projet interne',
        prototype: 'Prototype',
      },
      labels: {
        context: 'Contexte',
        problem: 'Problème initial',
        solution: 'Solution',
        features: 'Fonctionnalités clés',
        stack: 'Stack technique',
        role: 'Rôle de TicTek',
        results: 'Résultats mesurés',
        services: 'Services concernés',
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
          a: 'Cela dépend du périmètre, des intégrations et du niveau de qualité attendu. Nous ne publions pas de grille tarifaire : chaque projet fait l’objet d’une estimation détaillée après le cadrage. Indiquer une enveloppe dans le formulaire nous aide à proposer une solution adaptée.',
        },
        {
          q: 'Comment se passe le travail à distance ?',
          a: 'Visioconférences pour les points importants, messagerie pour le quotidien, outil de tickets pour suivre les demandes, et démonstrations régulières sur un environnement de test.',
        },
        {
          q: 'Quel est le décalage horaire ?',
          a: 'Madagascar est à UTC+3, sans changement d’heure. L’écart est d’une à deux heures avec la France et la Suisse. Avec le Québec, il est de sept à huit heures : la fin de journée à Madagascar correspond à la matinée à Montréal.',
        },
        {
          q: 'Pouvez-vous reprendre une application existante ?',
          a: 'Oui. Nous commençons par examiner le code, les dépendances et l’infrastructure pour évaluer l’état du projet, puis nous proposons un plan de reprise.',
        },
      ],
    },

    about: {
      title: 'À propos de TicTek, entreprise de développement logiciel | TicTek',
      description:
        'TicTek est une entreprise de services numériques basée à Antananarivo, Madagascar : mission, compétences, organisation, approche qualité et collaboration à distance.',
      h1: 'À propos de TicTek',
      lede:
        'TicTek est une entreprise de services numériques basée à Antananarivo, à Madagascar. Nous concevons, développons et maintenons des logiciels pour des entreprises qui cherchent un partenaire technique fiable, flexible et attentif aux coûts.',
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
            'Nous travaillons à distance, en français et en anglais. Madagascar est à UTC+3, ce qui laisse une large plage horaire commune avec l’Europe, et des créneaux en fin de journée pour l’Amérique du Nord.',
            'Les échanges se font par visioconférence, messagerie et outils de suivi partagés, selon vos habitudes.',
          ],
        },
      ],
      skillsTitle: 'Compétences techniques',
      skills: [
        { name: 'Front-end', items: ['TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js'] },
        { name: 'Back-end', items: ['Java / Spring Boot', 'Node.js', 'C# / .NET', 'PHP'] },
        { name: 'Mobile', items: ['React Native', 'Expo'] },
        { name: 'Données', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'] },
        { name: 'DevOps', items: ['Docker', 'CI/CD', 'GitHub Actions', 'GitLab CI'] },
        { name: 'IA et automatisation', items: ['API OpenAI', 'Gemini', 'n8n'] },
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
      locationLabel: 'Équipe basée à',
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
