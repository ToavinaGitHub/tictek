const en = {
  meta: {
    title: 'TicTek | Web, Mobile & QA Software Engineering',
    description:
      'TicTek designs, builds and audits your web and mobile platforms with the rigor of critical engineering: scalable architectures, thorough test coverage and stress-free deployments.',
  },

  topbar: {
    language: 'Language',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },

  nav: {
    openMenu: 'Open menu',
    links: {
      hero: 'Home',
      services: 'Services',
      methodologie: 'Methodology',
      stack: 'Tech Stack',
      qa: 'Quality & QA',
      'etudes-de-cas': 'Our Work',
      tarifs: 'Pricing',
      devis: 'Quote',
      contact: 'Contact',
    },
  },

  backToTop: 'Back to top',

  hero: {
    kicker: 'Software Engineering, Mobile, QA, Cloud & Automation',
    title: 'Your digital products. Built to scale, tested to last.',
    lede: 'TicTek is an IT services company specializing in the design, development and security of web and mobile applications. From cloud architecture to automated test coverage, our team helps you ship robust, high-performance, production-ready products.',
    ctaPrimary: 'Request a free quote / audit',
    ctaSecondary: 'Explore our services',
  },

  metrics: [
    { num: '<4 wks', label: 'Average time to ship a working MVP to production' },
    { num: '95%+', label: 'Automated test coverage on core business logic' },
    { num: '100%', label: 'Of projects delivered with an automated CI/CD pipeline' },
    { num: '24/7', label: 'Architectural rigor & continuous application monitoring' },
  ],

  badges: [
    'Custom Development',
    'Web & Mobile Apps',
    'QA & Test Automation',
    'Cloud, DevOps & AI Solutions',
    'Process Automation',
  ],

  techBanner: {
    label: 'The technologies we use every day',
  },

  services: {
    eyebrow: 'Our expertise',
    title: 'End-to-end engineering, from code to production',
    lede: 'Web, mobile, quality assurance, cloud and automation: five disciplines we handle in-house, with no subcontracting and no weak link.',
    items: [
      {
        span: 'span3',
        tag: 'Web & API',
        title: 'Web Development & Backend Architecture',
        desc: 'Custom web platforms that are fast and secure. We build scalable architectures (microservices or modular monoliths with Java Spring Boot, Node.js, C# .NET) paired with responsive frontends (React, Next.js, Angular).',
        features: [
          'Microservice architectures & RESTful / GraphQL APIs',
          'Modern, responsive frontends (React, Next.js, Angular)',
          'Robust backends (Java Spring Boot, Node.js, C# ASP.NET)',
          'Database design and tuning (PostgreSQL, MySQL, SQL Server)',
        ],
        benefit: '→ A platform that grows with you, without piling up technical debt.',
      },
      {
        span: 'span3',
        tag: 'Mobile',
        title: 'iOS & Android Mobile Apps',
        desc: 'Smooth, user-friendly mobile apps. We favor React Native & Expo to speed up your time-to-market with a single high-performance codebase, or go native when your hardware needs call for it.',
        features: [
          'React Native & Expo (simultaneous iOS & Android release)',
          'Modern interface design and optimized user journeys',
          'Real-time APIs, push notifications and offline features',
          'App Store and Google Play publishing and support',
        ],
        benefit: '→ One codebase, two stores, no compromise on user experience.',
      },
      {
        span: 'span2',
        tag: 'QA & Security',
        title: 'Quality Assurance & Test Automation',
        desc: 'At TicTek, QA is not an end-of-project option but a daily discipline. We automate E2E, performance and integration tests to stop regressions before they reach your users.',
        features: [
          'Automated E2E tests (Playwright / Cypress) & unit tests',
          'Load and scalability testing (k6 / JMeter)',
          'Code, compliance and security audits (OWASP Top 10)',
          'Blocking quality gates in your CI/CD pipelines',
        ],
        benefit: '→ Fewer bugs in production, calmer releases and a protected reputation.',
      },
      {
        span: 'span2',
        tag: 'Cloud & AI',
        title: 'Cloud DevOps & AI Integration',
        desc: 'Industrialized deployments and smarter business tools through AI API integration (LLMs, vision, automated analysis).',
        features: [
          'Docker containerization & cloud orchestration',
          'Automated CI/CD pipelines (GitHub Actions / GitLab CI)',
          'AI API integration (OpenAI, Gemini API, workflow automation)',
          'Monitoring, proactive alerting and infrastructure management',
        ],
        benefit: '→ Automated deployments and AI-powered features.',
      },
      {
        span: 'span2',
        tag: 'Automation',
        title: 'Business Process Automation',
        desc: 'Do your teams spend hours copying data from one tool to another? We automate those repetitive tasks and connect your software so it works together.',
        features: [
          'Automated workflows with n8n',
          'Syncing your project management tools, CRM and email',
          'Integrations between your tools (CRM, ERP, invoicing, email) via API',
          'Generative AI to sort, extract and process your data',
        ],
        benefit: '→ Hours of data entry saved every week, and no more copy-paste errors.',
      },
    ],
  },

  methodology: {
    eyebrow: 'Methodology',
    title: 'From scoping to monitoring, a process that skips no step',
    steps: [
      {
        n: '01',
        title: 'Scoping & Architecture',
        text: 'We analyze your business needs and technical constraints in detail, then model the database and application architecture before writing a single line of code.',
        deliverable: 'Deliverable → Technical architecture document, data model & project roadmap',
      },
      {
        n: '02',
        title: 'Agile Development in Sprints',
        text: 'Two-week sprints with a feature demo at the end of each cycle. Backend and frontend code is written alongside its test suite.',
        deliverable: 'Deliverable → A working software increment deployed to staging every sprint',
      },
      {
        n: '03',
        title: 'Quality Assurance & Acceptance',
        text: 'Thorough validation by our QA team: automated test runs, load testing and security audits to deliver a zero-defect product.',
        deliverable: 'Deliverable → Full acceptance report, test coverage and sign-off',
      },
      {
        n: '04',
        title: 'Deployment & Stabilization',
        text: 'Secure release through a CI/CD pipeline, followed by real-time performance monitoring and post-launch support.',
        deliverable: 'Deliverable → A containerized platform in production under continuous monitoring',
      },
    ],
  },

  stack: {
    eyebrow: 'Tech stack & rigor',
    title: 'Tools chosen for fit, not out of habit',
    lede: 'These are the technologies we know in depth and run in production, not in side projects.',
    categories: [
      { name: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'C# / .NET', 'PHP'] },
      { name: 'Frontend', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS'] },
      { name: 'Mobile', items: ['React Native', 'Expo'] },
      { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Elasticsearch'] },
      { name: 'Architecture & DevOps', items: ['Microservices', 'REST APIs', 'Docker', 'RabbitMQ', 'CI/CD', 'GitHub', 'GitLab'] },
      { name: 'AI & Data', items: ['Generative AI', 'Gemini', 'Web scraping', 'Data pipelines'] },
      { name: 'Automation', items: ['n8n', 'API integration'] },
      { name: 'Blockchain / Web3', items: ['Solidity', 'Hardhat', 'Ethers.js', 'Polygon', 'Smart Contracts'] },
      { name: 'Methods & tools', items: ['Agile (Scrum / Kanban)', 'Postman', 'Notion', 'Trello'] },
    ],
  },

  qa: {
    eyebrow: 'Quality Assurance',
    title: 'The most expensive bug is the one found in production',
    intro: 'At TicTek, software quality is the cornerstone of everything we do. We apply strict quality criteria from architecture design to final deployment: strong typing, automated tests on every commit, security audits and containerization for rock-solid releases.',
    cards: [
      {
        letter: 'A',
        title: 'CI/CD Automation',
        text: 'Continuous integration with mandatory unit, integration and E2E tests. A non-compliant build, or one below the coverage threshold, is automatically rejected.',
      },
      {
        letter: 'B',
        title: 'Proven Architectures',
        text: 'Built on professional frameworks (Spring Boot, ASP.NET, Node.js) that ensure separation of concerns, secure access and maintainability.',
      },
      {
        letter: 'C',
        title: 'Security & OWASP Standards',
        text: 'Regular security audits, protection against common vulnerabilities (OWASP Top 10) and strict authentication and authorization handling.',
      },
      {
        letter: 'D',
        title: 'Identical Environments',
        text: 'Docker containers everywhere, so the application behaves exactly the same in staging as it does in production.',
      },
    ],
    metrics: [
      { num: '95%+', label: 'Automated test coverage on critical modules' },
      { num: '100%', label: 'Of projects deployed through a secure CI/CD pipeline' },
      { num: 'Top 10', label: 'Compliance with OWASP Web & Mobile security requirements' },
      { num: '<24h', label: 'Guaranteed response time for incoming requests' },
    ],
    cta: 'Discuss your current testing strategy',
  },

  caseStudies: {
    eyebrow: 'Case studies',
    title: 'Proof, not promises',
    labels: {
      problem: 'Initial problem',
      solution: 'TicTek technical solution',
      result: 'Measured results',
    },
    items: [
      {
        tag: 'SaaS & Custom Web Applications',
        problem: 'An aging management platform had to be rebuilt: it slowed down under load and had become hard to evolve.',
        solution: 'Split and rebuilt the application as a REST API / microservice architecture (Spring Boot & Node.js) with a modern Next.js frontend and Docker containerization.',
        result: '3x faster load times, 5x processing capacity with zero downtime, and much simpler delivery of new features.',
      },
      {
        tag: 'Digitalization & Field Mobile Apps',
        problem: 'No mobile tool in the field meant manual paper entry, wasting time and causing stock errors.',
        solution: 'Built a cross-platform React Native / Expo mobile app connected in real time to the backend APIs, with full offline support.',
        result: '40% productivity gain for field teams, no more data-entry errors and instant data sync.',
      },
      {
        tag: 'Automation, QA & AI Tooling',
        problem: 'Release cycles slowed down by repetitive manual testing and little visibility into code quality.',
        solution: 'Set up an automated E2E test suite in GitHub Actions, combined with an internal AI-assisted code analysis tool.',
        result: '70% shorter acceptance phases, earlier defect detection and a faster release cadence for the client.',
      },
    ],
    note: '⚠️ These case studies follow a publish-ready structure; the figures illustrate the expected level of rigor and must be replaced with real, validated data from your client projects before going live.',
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'A clear commitment, matched to your project’s maturity',
    lede: 'No fixed price list for custom work: here are the engagement levels we offer most often, to be refined together during a first technical call.',
    plans: [
      {
        name: 'MVP',
        tag: 'Validate an idea',
        price: 'Custom quote',
        description: 'A first working product, scoped and tested, to put your idea in front of the market without delay.',
        features: [
          'Scoping & technical architecture',
          '1 web or mobile platform',
          'Unit tests on core business logic',
          'Deployment to a staging environment',
          'Post-launch support',
        ],
        cta: 'Discuss my MVP',
        highlighted: false,
      },
      {
        name: 'Growth',
        tag: 'Most popular',
        price: 'Custom quote',
        description: 'A robust, tested and industrialized platform designed to handle your growth.',
        features: [
          'Microservice or modular architecture',
          'Web & mobile combined',
          '90%+ automated test coverage',
          'Full CI/CD pipeline',
          'Production monitoring & alerting',
          'Priority support',
        ],
        cta: 'Plan my project',
        highlighted: true,
      },
      {
        name: 'Custom',
        tag: 'Complex projects',
        price: 'Custom quote',
        description: 'A dedicated team for your specific needs: integrations, AI, compliance, cloud infrastructure.',
        features: [
          'Dedicated cross-functional team',
          'AI integration & automation',
          'Full OWASP security audit',
          'Multi-environment cloud infrastructure',
          'SLA & ongoing support',
        ],
        cta: 'Request a quote',
        highlighted: false,
      },
    ],
    note: 'Since every project is unique, our prices are set after a free initial technical call. These plans give a sense of the scope covered at each level of engagement.',
  },

  quote: {
    eyebrow: 'Request a quote',
    title: 'Describe your project, hear back within 24h',
    lede: 'This form sends your request straight to our technical team. No middleman, no spam.',
    projectTypes: {
      web: 'Web Application',
      mobile: 'Mobile Application',
      qa: 'QA & Test Automation',
      cloud: 'Cloud, DevOps & AI',
      automation: 'Process Automation',
      other: 'Other / Not sure yet',
    },
    fields: {
      name: 'Full name',
      email: 'Email',
      company: 'Company (optional)',
      projectType: 'Project type',
      message: 'Describe your needs',
    },
    placeholders: {
      name: 'John Smith',
      email: 'john@company.com',
      company: 'Your company name',
      message: 'Context, goals, expected timeline...',
    },
    submit: 'Send my quote request',
    sending: 'Sending...',
    micro: 'Sent directly to our technical team.',
    success: '✓ Your request has been sent. We will get back to you within 24h.',
    error: 'Something went wrong while sending. Please try again.',
  },

  cta: {
    title: 'Your next project deserves engineering that holds up under load.',
    text: 'Spend 30 minutes with a TicTek architect, not a salesperson. You leave with concrete technical feedback on your project, whether or not you work with us afterwards.',
    button: 'Book my technical call',
    micro: 'Guaranteed reply within 24 business hours.',
  },

  footer: {
    about: 'TicTek is an IT services company focused on software engineering: custom web development, mobile apps, quality assurance and cloud infrastructure. We ship code your teams won’t have to rewrite in 18 months.',
    columns: [
      {
        title: 'Our Services',
        links: [
          { label: 'Web & API Development', href: '#services' },
          { label: 'Mobile Apps', href: '#services' },
          { label: 'QA & Test Automation', href: '#qa' },
          { label: 'Cloud, DevOps & AI', href: '#services' },
          { label: 'Process Automation', href: '#services' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'Our Work', href: '#etudes-de-cas' },
          { label: 'Our Methodology', href: '#methodologie' },
          { label: 'Tech Stack', href: '#stack' },
          { label: 'Pricing', href: '#tarifs' },
          { label: 'Request a quote', href: '#devis' },
          { label: 'Contact', href: '#contact' },
        ],
      },
    ],
    contactTitle: 'Contact',
    rights: 'All rights reserved. Designed and built with the same rigor we bring to our clients.',
  },
};

export default en;
