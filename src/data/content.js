export const navLinks = [
  { href: '#hero', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#methodologie', label: 'Méthodologie' },
  { href: '#stack', label: 'Stack' },
  { href: '#qa', label: 'Qualité' },
  { href: '#etudes-de-cas', label: 'Études de cas' },
  { href: '#contact', label: 'Contact' },
];

export const contactInfo = {
  phone: '+261 38 47 110 37',
  email: 'team.tictek.IT@outlook.com',
  address: 'Antananarivo, Madagascar',
};

export const hero = {
  kicker: 'ESN Technique — Développement, Mobile, QA & Cloud',
  title: 'Construit pour scaler. Testé pour ne jamais tomber.',
  lede: "TicTek conçoit, développe et audite vos plateformes web et mobiles avec la rigueur d'une ingénierie critique : architectures scalables, couverture de tests exhaustive, déploiements sans stress. De l'architecture au monitoring en production, chaque livrable passe par notre process qualité avant de passer par le vôtre.",
  ctaPrimary: 'Planifier un audit technique gratuit',
  ctaSecondary: 'Explorer notre stack technique',
  panels: [
    { text: 'Build #482 — Passed ✓', className: 'p1', style: { top: '6%', left: '2%' } },
    { text: 'Test Coverage 98%', className: 'p2', style: { top: '38%', right: 0 } },
    { text: 'Deploy → Production ✓', className: 'p3', style: { bottom: '8%', left: '8%' } },
  ],
};

export const metrics = [
  { num: '<4 sem.', label: "pour la mise en production d'un MVP fonctionnel" },
  { num: '98%', label: 'de couverture de tests automatisés livrée en standard' },
  { num: '99.9%', label: 'de disponibilité infrastructure garantie (SLA contractuel)' },
  { num: '0', label: 'faille critique OWASP non détectée en pré-production sur 12 mois' },
];

export const badges = ['Conforme RGPD', 'Audit OWASP Top 10', 'AWS · GCP · OVHcloud', 'CI/CD sur chaque commit'];

export const services = [
  {
    span: 'span3',
    tag: 'Web',
    title: 'Développement Web Sur-Mesure',
    desc: "Des plateformes pensées pour encaisser votre croissance, pas pour tenir jusqu'à la prochaine levée de fonds. Architecture microservices, frontend React/Next.js, backend Spring Boot, API documentées et pensées pour durer.",
    features: [
      'React & Next.js (SSR, SSG, hybride)',
      'Spring Boot & architectures microservices',
      'APIs REST/GraphQL documentées et versionnées',
      'Infrastructure cloud-native scalable horizontalement',
    ],
    benefit: '→ Une plateforme qui absorbe votre croissance sans refonte.',
  },
  {
    span: 'span3',
    tag: 'Mobile',
    title: 'Applications Mobiles Natives & Cross-Platform',
    desc: "Une seule équipe, un seul time-to-market, deux stores. React Native/Expo pour la vitesse, développement natif iOS/Android quand la performance ou l'accès matériel l'exige.",
    features: [
      'React Native & Expo',
      'Développement natif iOS (Swift) & Android (Kotlin)',
      'Publication et suivi App Store / Google Play gérés',
      'Performance perçue équivalente au natif',
    ],
    benefit: '→ Une seule base de code, deux stores, zéro compromis UX.',
  },
  {
    span: 'span4',
    tag: 'QA & Automatisation',
    title: 'Assurance Qualité & Tests Automatisés',
    desc: "La QA n'est pas une étape de contrôle en fin de projet, c'est une discipline intégrée dès le premier sprint. Tests end-to-end, tests de charge, audit de sécurité OWASP — avant que vos utilisateurs ne les découvrent pour vous.",
    features: [
      'Tests E2E automatisés (Playwright / Cypress)',
      'Tests de charge & de performance (k6 / JMeter)',
      'Audit de sécurité OWASP Top 10 & Mobile Top 10',
      'Suites de tests intégrées au pipeline CI/CD',
    ],
    benefit: '→ Chaque bug trouvé en pré-prod est un incident évité en production.',
  },
  {
    span: 'span2',
    tag: 'Cloud & DevOps',
    title: 'Cloud, DevOps & CI/CD',
    desc: 'Infrastructure conteneurisée, pipelines automatisés, déploiements fréquents et sans stress.',
    features: [
      'Docker & orchestration Kubernetes',
      'Pipelines CI/CD (GitHub Actions / GitLab CI)',
      'Infrastructure as Code (Terraform)',
      'Monitoring & alerting proactif',
    ],
    benefit: '→ Déployez plusieurs fois par semaine, sans redouter le vendredi.',
  },
];

export const methodologySteps = [
  {
    n: '01',
    title: 'Cadrage & Architecture',
    text: "Avant d'écrire une ligne de code, nous cartographions votre besoin métier, vos contraintes de charge et votre trajectoire de croissance.",
    deliverable: "Livrable → Document d'architecture technique (C4, choix d'infrastructure, modèle de données) validé avant le premier sprint",
  },
  {
    n: '02',
    title: 'Développement en sprints',
    text: 'Cycles courts de 2 semaines, démonstration systématique en fin de cycle. Chaque fonctionnalité est développée avec sa suite de tests associée — jamais après coup.',
    deliverable: 'Livrable → Incrément fonctionnel déployé en environnement de recette à chaque fin de sprint',
  },
  {
    n: '03',
    title: 'Assurance Qualité & Recette',
    text: "Passage systématique par notre process QA indépendant : tests E2E, tests de charge, audit OWASP. Aucune fonctionnalité ne passe en production sans validation par un testeur qui n'a pas écrit le code.",
    deliverable: 'Livrable → Rapport de recette détaillé : couverture, anomalies détectées, statut de résolution',
  },
  {
    n: '04',
    title: 'Déploiement & Monitoring',
    text: 'Mise en production via pipeline CI/CD automatisé (bleu-vert ou canary selon criticité), suivie d’un monitoring actif de la performance et des erreurs.',
    deliverable: 'Livrable → Dashboard de monitoring temps réel + astreinte pendant la stabilisation post-lancement',
  },
];

export const stackCategories = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'] },
  { name: 'Backend', items: ['Spring Boot', 'Java', 'Node.js', 'PostgreSQL'] },
  { name: 'Mobile', items: ['React Native', 'Expo', 'Swift', 'Kotlin'] },
  { name: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'GitHub Actions'] },
  { name: 'QA & Sécurité', items: ['Playwright', 'Cypress', 'k6', 'JMeter', 'OWASP ZAP', 'SonarQube'] },
];

export const qaIntro = "Chez la plupart des ESN, la QA est une étape de contrôle en fin de projet. Chez TicTek, c'est une discipline d'ingénierie à part entière, intégrée dès le premier sprint. Chaque fonctionnalité est développée avec sa suite de tests, chaque release passe par un pipeline qui refuse le code non couvert, et chaque application est auditée sur les mêmes référentiels de sécurité que ceux utilisés par les équipes SRE des plus grandes plateformes.";

export const qaCards = [
  {
    letter: 'A',
    title: 'Automatisation à chaque étage',
    text: 'Tests end-to-end (Playwright / Cypress), tests d’intégration API et tests unitaires backend, avec seuils de couverture bloquants en CI — un build est refusé sous 85% de couverture sur le code critique.',
  },
  {
    letter: 'B',
    title: 'Détection avant la prod, pas après',
    text: 'Tests de charge (k6 / JMeter) simulant des pics de trafic réels, tests de non-régression automatisés sur chaque pull request, environnements de recette isomorphes à la production.',
  },
  {
    letter: 'C',
    title: 'Sécurité — le référentiel OWASP appliqué, pas juste cité',
    text: "Audit systématique OWASP Top 10 (web) et OWASP Mobile Top 10, scans de dépendances (SCA) pour détecter les vulnérabilités connues dans les librairies tierces, tests d'intrusion ciblés sur les parcours sensibles (authentification, paiement, données personnelles).",
  },
  {
    letter: 'D',
    title: 'Traçabilité complète',
    text: 'Chaque anomalie détectée est documentée, priorisée, liée au commit qui l’a introduite et suivie jusqu’à sa résolution. Un rapport de recette est livré avant chaque mise en production.',
  },
];

export const qaMetrics = [
  { num: '98%', label: 'de couverture de tests automatisés sur les modules critiques' },
  { num: '100%', label: 'des releases passées par un pipeline CI avec quality gate bloquant' },
  { num: 'Top 10', label: 'OWASP Web & Mobile audités avant chaque mise en production majeure' },
  { num: '<4h', label: 'délai moyen de cycle de validation QA sur une pull request standard' },
];

export const caseStudies = [
  {
    tag: 'SaaS B2B — Secteur Logistique',
    problem: "Une plateforme de gestion de flotte reposait sur un monolithe PHP vieux de 8 ans. Chaque déploiement immobilisait le service pendant 20 à 40 minutes, et la moindre montée en charge (pic saisonnier) provoquait des ralentissements généralisés.",
    solution: "Refonte progressive en architecture microservices : API Spring Boot découpées par domaine métier, frontend Next.js en rendu hybride SSR/CSR, conteneurisation Docker orchestrée sur Kubernetes, pipeline CI/CD avec déploiement bleu-vert.",
    result: "Temps de déploiement réduit de 35 min à 4 min (-88%) · Charge absorbée multipliée par 3 sans incident lors du pic saisonnier suivant · Disponibilité mesurée à 99,95% sur les 6 mois post-migration · Délai de mise à disposition de nouvelles fonctionnalités divisé par 2,5.",
  },
  {
    tag: 'Application Mobile — Secteur Fintech',
    problem: "Une application de paiement mobile cumulait un taux de crash de 6,4% et une note moyenne de 3,2/5 sur les stores, principalement due à des régressions non détectées avant mise en production — les tests étaient exclusivement manuels.",
    solution: "Suite de tests E2E automatisés (Playwright + Detox) intégrée au pipeline CI, exécutée sur chaque pull request. Audit de sécurité complet aligné sur l'OWASP Mobile Top 10, avec correction des vulnérabilités avant chaque release.",
    result: "Taux de crash ramené de 6,4% à 0,5% (-92%) · Cycle de validation QA réduit de 5 jours à 4 heures · Note moyenne sur les stores passée de 3,2 à 4,7 · 0 vulnérabilité critique résiduelle après audit.",
  },
];

export const footerColumns = [
  {
    title: 'Expertises',
    links: [
      { label: 'Développement Web', href: '#services' },
      { label: 'Applications Mobiles', href: '#services' },
      { label: 'QA & Tests Automatisés', href: '#qa' },
      { label: 'Cloud & DevOps', href: '#services' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Études de cas', href: '#etudes-de-cas' },
      { label: 'Stack technique', href: '#stack' },
      { label: 'Méthodologie', href: '#methodologie' },
    ],
  },
];
