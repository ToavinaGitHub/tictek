export const navLinks = [
  { href: '#hero', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#methodologie', label: 'Méthodologie' },
  { href: '#stack', label: 'Stack Technique' },
  { href: '#qa', label: 'Qualité & QA' },
  { href: '#etudes-de-cas', label: 'Nos Réalisations' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#devis', label: 'Devis' },
  { href: '#contact', label: 'Contact' },
];

export const contactInfo = {
  phone: '+261 38 47 110 37',
  email: 'team.tictek.IT@outlook.com',
  address: 'Antananarivo, Madagascar',
};

export const quoteEmail = 'rtoavina.andriantahiry@gmail.com';

export const projectTypes = [
  'Application Web',
  'Application Mobile',
  'QA & Tests Automatisés',
  'Cloud, DevOps & IA',
  'Autre / Je ne sais pas encore',
];

export const hero = {
  kicker: 'Ingénierie Logicielle, Mobile, QA & Cloud',
  title: 'Vos projets numériques. Construits pour scaler, testés pour durer.',
  lede: "TicTek est une entreprise de services numériques (ESN) spécialisée dans la conception, le développement et la sécurisation d'applications web et mobiles. De l'architecture cloud à la couverture de tests automatisée, notre équipe vous accompagne pour livrer des produits robustes, performants et prêts pour la production.",
  ctaPrimary: 'Demander un devis / un audit gratuit',
  ctaSecondary: 'Explorer nos services',
  panels: [
    { text: 'Build #842 — Passed ✓', className: 'p1', style: { top: '6%', left: '2%' } },
    { text: 'Test Coverage 95%+', className: 'p2', style: { top: '38%', right: 0 } },
    { text: 'Deploy → Production ✓', className: 'p3', style: { bottom: '8%', left: '8%' } },
  ],
};

export const metrics = [
  { num: '<4 sem.', label: "Temps moyen pour la mise en production d'un MVP fonctionnel" },
  { num: '95%+', label: 'De couverture de tests automatisés sur les cœurs métiers' },
  { num: '100%', label: 'De projets livrés avec pipeline CI/CD automatisé' },
  { num: '24/7', label: 'Rigueur architecturale & monitoring continu des applications' },
];

export const badges = [
  'Développement Sur-Mesure',
  'Applications Web & Mobile',
  'QA & Tests Automatisés',
  'Cloud, DevOps & Solutions IA',
];

export const services = [
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
    span: 'span4',
    tag: 'QA & Sécurité',
    title: 'Assurance Qualité & Tests Automatisés',
    desc: "Pour TicTek, la QA n'est pas une option de fin de projet mais une discipline intégrée au quotidien. Nous automatisons les tests E2E, de performance et d'intégration afin de bloquer les régression avant qu'elles n'atteignent vos utilisateurs.",
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
];

export const methodologySteps = [
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
];

export const stackCategories = [
  { name: 'Backend', items: ['Java / Spring Boot', 'Node.js', 'C# / .NET', 'PostgreSQL', 'MySQL', 'SQL Server'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'Angular', 'TypeScript', 'TailwindCSS', 'Bootstrap'] },
  { name: 'Mobile', items: ['React Native', 'Expo',  'Android (Kotlin)'] },
  { name: 'Cloud & DevOps', items: ['Docker', 'GitHub Actions', 'AWS',  'Kubernetes'] },
  { name: 'QA & Outillage IA', items: ['Playwright', 'Cypress', 'Postman', 'JMeter', 'Gemini / OpenAI APIs', 'SonarQube'] },
];

export const qaIntro = "Chez TicTek, la qualité logicielle est la clé de voûte de nos interventions. Nous intégrons des critères de qualité stricts dès le design d'architecture jusqu'au déploiement final : typage fort, tests automatisés à chaque commit, audit de sécurité et conteneurisation pour des livraisons parfaitement stables.";

export const qaCards = [
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
];

export const qaMetrics = [
  { num: '95%+', label: 'De couverture de tests automatisés sur les modules critiques' },
  { num: '100%', label: 'Des projets déployés via un pipeline CI/CD sécurisé' },
  { num: 'Top 10', label: 'Conformité aux exigences de sécurité OWASP Web & Mobile' },
  { num: '<24h', label: 'Délai de réactivité garanti pour la prise en charge des demandes' },
];

export const caseStudies = [
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
];

export const pricingPlans = [
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
];

export const pricingNote = "Chaque projet étant unique, nos tarifs sont établis après un premier échange technique gratuit. Ces formules donnent un ordre de grandeur du périmètre couvert à chaque niveau d'engagement.";

export const footerColumns = [
  {
    title: 'Nos Services',
    links: [
      { label: 'Développement Web & API', href: '#services' },
      { label: 'Applications Mobiles', href: '#services' },
      { label: 'QA & Tests Automatisés', href: '#qa' },
      { label: 'Cloud, DevOps & IA', href: '#services' },
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
];