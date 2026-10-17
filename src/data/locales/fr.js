const fr = {
  meta: {
    title: 'TicTek | Ingénierie logicielle Web, Mobile & QA',
    description:
      "TicTek conçoit, développe et audite vos plateformes web et mobiles avec la rigueur d'une ingénierie critique : architectures scalables, couverture de tests exhaustive, déploiements sans stress.",
  },

  topbar: {
    language: 'Langue',
    toLight: 'Activer le thème clair',
    toDark: 'Activer le thème sombre',
  },

  nav: {
    openMenu: 'Ouvrir le menu',
    links: {
      hero: 'Accueil',
      services: 'Services',
      methodologie: 'Méthodologie',
      stack: 'Stack Technique',
      qa: 'Qualité & QA',
      'etudes-de-cas': 'Nos Réalisations',
      tarifs: 'Tarifs',
      devis: 'Devis',
      contact: 'Contact',
    },
  },

  backToTop: 'Retour en haut de page',

  hero: {
    kicker: 'Ingénierie Logicielle, Mobile, QA, Cloud & Automatisation',
    title: 'Vos projets numériques. Construits pour scaler, testés pour durer.',
    lede: "TicTek est une entreprise de services numériques (ESN) spécialisée dans la conception, le développement et la sécurisation d'applications web et mobiles. De l'architecture cloud à la couverture de tests automatisée, notre équipe vous accompagne pour livrer des produits robustes, performants et prêts pour la production.",
    ctaPrimary: 'Demander un devis / un audit gratuit',
    ctaSecondary: 'Explorer nos services',
  },

  metrics: [
    { num: '<4 sem.', label: "Temps moyen pour la mise en production d'un MVP fonctionnel" },
    { num: '95%+', label: 'De couverture de tests automatisés sur les cœurs métiers' },
    { num: '100%', label: 'De projets livrés avec pipeline CI/CD automatisé' },
    { num: '24/7', label: 'Rigueur architecturale & monitoring continu des applications' },
  ],

  badges: [
    'Développement Sur-Mesure',
    'Applications Web & Mobile',
    'QA & Tests Automatisés',
    'Cloud, DevOps & Solutions IA',
    'Automatisation des Processus',
  ],

  techBanner: {
    label: 'Les technologies que nous utilisons au quotidien',
  },

  services: {
    eyebrow: 'Nos expertises',
    title: 'Une ingénierie complète, du code à la production',
    lede: 'Web, mobile, assurance qualité, cloud et automatisation : cinq disciplines que nous maîtrisons en interne, sans sous-traitance ni maillon faible.',
    items: [
      {
        span: 'span3',
        tag: 'Web & API',
        title: 'Développement Web & Architecture Backend',
        desc: "Conception de plateformes web sur-mesure, performantes et sécurisées. Nous développons des architectures évolutives (microservices ou monolithes modulaires avec Java Spring Boot, Node.js, C# .NET) combinées à des frontends réactifs (React, Next.js, Angular).",
        features: [
          'Architectures Microservices & APIs RESTful / GraphQL',
          'Frontends modernes & réactifs (React, Next.js, Angular)',
          'Backends robustes (Java Spring Boot, Node.js, C# ASP.NET)',
          'Gestion et optimisation de bases de données (PostgreSQL, MySQL, SQL Server)',
        ],
        benefit: '→ Une plateforme évolutive qui absorbe votre croissance sans dette technique.',
      },
      {
        span: 'span3',
        tag: 'Mobile',
        title: 'Applications Mobiles iOS & Android',
        desc: "Développement d'applications mobiles fluides et ergonomiques. Nous privilégions React Native & Expo pour maximiser votre time-to-market avec une seule base de code performante, ou le développement natif selon vos besoins matériels.",
        features: [
          'React Native & Expo (déploiement iOS & Android simultané)',
          'Design d’interfaces modernes et parcours utilisateur optimisés',
          'Intégration d’APIs temps réel, notifications et fonctionnalités hors-ligne',
          'Publication et accompagnement sur App Store et Google Play',
        ],
        benefit: '→ Un seul codebase, deux stores, une expérience utilisateur sans compromis.',
      },
      {
        span: 'span2',
        tag: 'QA & Sécurité',
        title: 'Assurance Qualité & Tests Automatisés',
        desc: "Pour TicTek, la QA n'est pas une option de fin de projet mais une discipline intégrée au quotidien. Nous automatisons les tests E2E, de performance et d'intégration afin de bloquer les régressions avant qu'elles n'atteignent vos utilisateurs.",
        features: [
          'Tests E2E automatisés (Playwright / Cypress) & Unitaires',
          'Tests de charge et de montée en puissance (k6 / JMeter)',
          'Audit de code, conformité et sécurité (OWASP Top 10)',
          'Intégration de Quality Gates bloquants dans vos pipelines CI/CD',
        ],
        benefit: '→ Moins de bugs en prod, des releases sereines et une réputation préservée.',
      },
      {
        span: 'span2',
        tag: 'Cloud & IA',
        title: 'Cloud DevOps & Intégration d’IA',
        desc: "Industrialisation de vos déploiements et enrichissement de vos outils métiers grâce à l'intégration d'APIs d'intelligence artificielle (LLM, vision, analyse automatique).",
        features: [
          'Conteneurisation Docker & orchestration cloud',
          'Pipelines CI/CD automatisés (GitHub Actions / GitLab CI)',
          'Intégration d’APIs IA (OpenAI, Gemini API, automatisation de workflows)',
          'Monitoring, alerting proactif et gestion d’infrastructure',
        ],
        benefit: '→ Des déploiements automatisés et des fonctionnalités augmentées par l’IA.',
      },
      {
        span: 'span2',
        tag: 'Automatisation',
        title: 'Automatisation des Processus Métier',
        desc: "Vos équipes passent des heures à copier des données d'un outil à l'autre ? Nous automatisons ces tâches répétitives et connectons vos logiciels entre eux pour qu'ils travaillent ensemble.",
        features: [
          'Workflows automatisés avec n8n',
          'Synchronisation de vos outils de gestion de projet, CRM et emails',
          'Intégrations entre vos outils (CRM, ERP, facturation, emails) via API',
          'IA générative pour trier, extraire et traiter vos données',
        ],
        benefit: '→ Des heures de saisie en moins chaque semaine et zéro erreur de copier-coller.',
      },
    ],
  },

  methodology: {
    eyebrow: 'Méthodologie',
    title: 'Du cadrage au monitoring, un process qui ne saute aucune étape',
    steps: [
      {
        n: '01',
        title: 'Cadrage & Architecture',
        text: "Nous analysons en détail vos besoins métiers, vos contraintes techniques et modélisons la base de données et l'architecture applicative avant d'écrire la première ligne de code.",
        deliverable: "Livrable → Dossier d'architecture technique, modélisation de données & roadmap projet",
      },
      {
        n: '02',
        title: 'Développement Agile en Sprints',
        text: 'Sprints de 2 semaines avec démonstration des fonctionnalités à chaque fin de cycle. Le code backend et frontend est développé en parallèle de sa suite de tests.',
        deliverable: 'Livrable → Incrément logiciel fonctionnel déployé en environnement de recette à chaque sprint',
      },
      {
        n: '03',
        title: 'Assurance Qualité & Recette',
        text: 'Validation rigoureuse par notre pôle QA : exécution des tests automatisés, tests de charge et audits de sécurité pour garantir un produit zéro défaut.',
        deliverable: 'Livrable → Rapport de recette complet, couverture de tests et PV de validation',
      },
      {
        n: '04',
        title: 'Déploiement & Stabilisation',
        text: 'Mise en production sécurisée via pipeline CI/CD, suivie d’un monitoring des performances en temps réel et d’un accompagnement post-lancement.',
        deliverable: 'Livrable → Plateforme en production, conteneurisée et sous surveillance continue',
      },
    ],
  },

  stack: {
    eyebrow: 'Stack technique & rigueur',
    title: 'Des outils choisis par adéquation, pas par habitude',
    lede: 'Voici les technologies que nous maîtrisons en profondeur et déployons en production, pas en side-project.',
    categories: [
      { name: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'C# / .NET', 'PHP'] },
      { name: 'Frontend', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS'] },
      { name: 'Mobile', items: ['React Native', 'Expo'] },
      { name: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Elasticsearch'] },
      { name: 'Architecture & DevOps', items: ['Microservices', 'API REST', 'Docker', 'RabbitMQ', 'CI/CD', 'GitHub', 'GitLab'] },
      { name: 'IA & Data', items: ['IA générative', 'Gemini', 'Scraping web', 'Pipelines de données'] },
      { name: 'Automatisation', items: ['n8n', "Intégration d'API"] },
      { name: 'Blockchain / Web3', items: ['Solidity', 'Hardhat', 'Ethers.js', 'Polygon', 'Smart Contracts'] },
      { name: 'Méthodes & outils', items: ['Agile (Scrum / Kanban)', 'Postman', 'Notion', 'Trello'] },
    ],
  },

  qa: {
    eyebrow: 'Assurance Qualité',
    title: "Le bug le plus cher est celui qu'on trouve en production",
    intro: "Chez TicTek, la qualité logicielle est la clé de voûte de nos interventions. Nous intégrons des critères de qualité stricts dès le design d'architecture jusqu'au déploiement final : typage fort, tests automatisés à chaque commit, audit de sécurité et conteneurisation pour des livraisons parfaitement stables.",
    cards: [
      {
        letter: 'A',
        title: 'Automatisation CI/CD',
        text: 'Intégration continue avec passage obligatoire des tests unitaires, d’intégration et E2E. Un build non conforme ou sous le seuil de couverture est automatiquement rejeté.',
      },
      {
        letter: 'B',
        title: 'Architectures Éprouvées',
        text: 'Conception basée sur des frameworks professionnels (Spring Boot, ASP.NET, Node.js) garantissant la séparation des responsabilités, la sécurité des accès et la maintenabilité.',
      },
      {
        letter: 'C',
        title: 'Sécurité & Standards OWASP',
        text: 'Audits de sécurité réguliers, protection contre les vulnérabilités courantes (OWASP Top 10) et gestion stricte des authentifications et autorisations.',
      },
      {
        letter: 'D',
        title: 'Environnements Isomorphes',
        text: 'Utilisation systématique de conteneurs Docker pour garantir que le comportement de l’application en recette soit rigoureusement identique à celui en production.',
      },
    ],
    metrics: [
      { num: '95%+', label: 'De couverture de tests automatisés sur les modules critiques' },
      { num: '100%', label: 'Des projets déployés via un pipeline CI/CD sécurisé' },
      { num: 'Top 10', label: 'Conformité aux exigences de sécurité OWASP Web & Mobile' },
      { num: '<24h', label: 'Délai de réactivité garanti pour la prise en charge des demandes' },
    ],
    cta: 'Discuter de votre stratégie de tests actuelle',
  },

  caseStudies: {
    eyebrow: 'Études de cas',
    title: 'La preuve, pas la promesse',
    labels: {
      problem: 'Problème initial',
      solution: 'Solution technique TicTek',
      result: 'Résultats chiffrés',
    },
    items: [
      {
        tag: 'SaaS & Applications Web sur-mesure',
        problem: "Obligation de refondre une plateforme de gestion vieillissante subissant des ralentissements de charge et des difficultés d'évolution.",
        solution: "Découpage et reconstruction de l'application en architecture API REST / Microservices (Spring Boot & Node.js) couplée à un frontend moderne Next.js et conteneurisation Docker.",
        result: "Temps de chargement divisé par 3, capacité de traitement multipliée par 5 sans interruption de service et livraison de nouvelles fonctionnalités simplifiée.",
      },
      {
        tag: 'Digitalisation & Applications Mobiles Métier',
        problem: "Absence d'outil mobile sur le terrain nécessitant des saisies manuelles sur papier, générant pertes de temps et erreurs de stock.",
        solution: "Développement d'une application mobile cross-platform sous React Native / Expo connectée en temps réel aux APIs backend et fonctionnant en mode hors-ligne.",
        result: "Gains de productivité de 40% pour les équipes terrain, élimination des erreurs de saisie et synchronisation instantanée des données.",
      },
      {
        tag: 'Automation, QA & Outillage IA',
        problem: "Cycles de livraison ralentis par des phases de tests manuels répétitives et un manque de visibilité sur la qualité du code.",
        solution: "Mise en place d'une suite de tests E2E automatisés intégrée dans GitHub Actions, combinée à un outil interne d'analyse automatisée de code assistée par IA.",
        result: "Durée des recettes réduite de 70%, détection précoce des anomalies et cadence de déploiement accélérée pour le client.",
      },
    ],
    note: '⚠️ Ces études de cas suivent une structure prête à publier ; les chiffres illustrent le niveau de rigueur attendu et doivent être remplacés par les données réelles et validées de vos projets clients avant mise en ligne.',
  },

  pricing: {
    eyebrow: 'Tarifs',
    title: 'Un engagement clair, adapté à la maturité de votre projet',
    lede: "Pas de grille tarifaire figée pour du sur-mesure : voici les niveaux d'accompagnement que nous proposons le plus souvent, à affiner ensemble lors d'un premier échange technique.",
    plans: [
      {
        name: 'MVP',
        tag: 'Valider une idée',
        price: 'Sur devis',
        description: "Un premier produit fonctionnel, cadré et testé, pour confronter votre idée au marché sans attendre.",
        features: [
          'Cadrage & architecture technique',
          '1 plateforme web ou mobile',
          'Tests unitaires sur le cœur métier',
          'Déploiement en environnement de recette',
          'Accompagnement post-lancement',
        ],
        cta: 'Discuter de mon MVP',
        highlighted: false,
      },
      {
        name: 'Croissance',
        tag: 'Le plus demandé',
        price: 'Sur devis',
        description: 'Une plateforme robuste, testée et industrialisée, pensée pour absorber votre montée en charge.',
        features: [
          'Architecture microservices ou modulaire',
          'Web & mobile combinés',
          'Couverture de tests automatisés 90%+',
          'Pipeline CI/CD complet',
          'Monitoring & alerting en production',
          'Support prioritaire',
        ],
        cta: 'Planifier mon projet',
        highlighted: true,
      },
      {
        name: 'Sur-mesure',
        tag: 'Projets complexes',
        price: 'Sur devis',
        description: 'Une équipe dédiée pour vos besoins spécifiques : intégrations, IA, conformité, infrastructure cloud.',
        features: [
          'Équipe dédiée multi-compétences',
          'Intégration IA & automatisation',
          'Audit de sécurité OWASP complet',
          'Infrastructure cloud multi-environnements',
          'SLA & accompagnement continu',
        ],
        cta: 'Demander un devis',
        highlighted: false,
      },
    ],
    note: "Chaque projet étant unique, nos tarifs sont établis après un premier échange technique gratuit. Ces formules donnent un ordre de grandeur du périmètre couvert à chaque niveau d'engagement.",
  },

  quote: {
    eyebrow: 'Demande de devis',
    title: 'Décrivez votre projet, recevez un retour sous 24h',
    lede: "Ce formulaire envoie votre demande directement à notre équipe technique. Pas d'intermédiaire, pas de spam.",
    projectTypes: {
      web: 'Application Web',
      mobile: 'Application Mobile',
      qa: 'QA & Tests Automatisés',
      cloud: 'Cloud, DevOps & IA',
      automation: 'Automatisation des processus',
      other: 'Autre / Je ne sais pas encore',
    },
    fields: {
      name: 'Nom complet',
      email: 'Email',
      company: 'Entreprise (optionnel)',
      projectType: 'Type de projet',
      message: 'Décrivez votre besoin',
    },
    placeholders: {
      name: 'Jean Dupont',
      email: 'jean@entreprise.com',
      company: 'Nom de votre entreprise',
      message: 'Contexte, objectifs, délais envisagés...',
    },
    submit: 'Envoyer ma demande de devis',
    sending: 'Envoi en cours...',
    micro: 'Envoyé directement à notre équipe technique.',
    success: '✓ Votre demande a bien été envoyée. Nous revenons vers vous sous 24h.',
    error: "Une erreur est survenue lors de l'envoi. Merci de réessayer.",
  },

  cta: {
    title: 'Votre prochain projet mérite une ingénierie qui ne cède pas sous la charge.',
    text: 'Parlez 30 minutes avec un architecte TicTek, pas un commercial. Vous repartez avec un avis technique concret sur votre projet, que vous travailliez avec nous ensuite ou non.',
    button: 'Réserver mon appel technique',
    micro: 'Réponse garantie sous 24h ouvrées.',
  },

  footer: {
    about: "TicTek est une ESN spécialisée en ingénierie logicielle : développement web sur-mesure, applications mobiles, assurance qualité et infrastructure cloud. Nous livrons du code que vos équipes n'auront pas à réécrire dans 18 mois.",
    columns: [
      {
        title: 'Nos Services',
        links: [
          { label: 'Développement Web & API', href: '#services' },
          { label: 'Applications Mobiles', href: '#services' },
          { label: 'QA & Tests Automatisés', href: '#qa' },
          { label: 'Cloud, DevOps & IA', href: '#services' },
          { label: 'Automatisation des Processus', href: '#services' },
        ],
      },
      {
        title: 'Entreprise',
        links: [
          { label: 'Nos Réalisations', href: '#etudes-de-cas' },
          { label: 'Notre Méthodologie', href: '#methodologie' },
          { label: 'Stack Technique', href: '#stack' },
          { label: 'Tarifs', href: '#tarifs' },
          { label: 'Demander un devis', href: '#devis' },
          { label: 'Contact', href: '#contact' },
        ],
      },
    ],
    contactTitle: 'Contact',
    rights: 'Tous droits réservés. Conçu et développé avec la même rigueur que ce que nous livrons à nos clients.',
  },
};

export default fr;
