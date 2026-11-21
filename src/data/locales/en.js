import forms from './form';
import marketPages from './markets.en';

const en = {
  lang: 'en',
  ogLocale: 'en_US',

  common: {
    skipLink: 'Skip to content',
    menu: 'Menu',
    mainNav: 'Main navigation',
    breadcrumb: 'Breadcrumb',
    nav: {
      home: 'Home',
      services: 'Services',
      outsourcing: 'Outsourcing',
      work: 'Work',
      collaboration: 'Engagement models',
      about: 'About',
      contact: 'Contact',
      pricing: 'Pricing',
      careers: 'Careers',
      privacy: 'Privacy',
      blog: 'Blog',
      switzerland: 'Switzerland',
      canada: 'Canada',
    },
    slogan: 'Your International Software Development Partner, Based in Madagascar.',
    ctaContact: 'Discuss Your Project',
    requestQuote: 'Request a Quote',
    cta: {
      title: 'Let’s Build Something Together.',
      text: 'Whether you need additional technical resources, a software development partner or business automation, TicTek is ready to help.',
      button: 'Start a Conversation',
    },
    language: 'Language',
    learnMore: 'Learn more',
    consent: {
      label: 'Analytics cookies',
      text: 'We would like to measure site traffic to improve it. These cookies are only set with your consent.',
      more: 'Learn more',
      accept: 'Accept',
      refuse: 'Decline',
      manage: 'Manage cookies',
    },
    whatsapp: {
      label: 'Message us on WhatsApp',
      message: 'Hello TicTek, I would like to discuss a project.',
    },
    linkedin: 'TicTek on LinkedIn',
    linkedinProfile: 'View LinkedIn profile',
    booking: 'Book a 30-min call',
    // Commitments shown on the home, about and contact pages (Guarantees.jsx).
    guarantees: {
      title: 'Our commitments',
      items: [
        { icon: 'code', title: 'You own the code', text: 'Once paid, the source code and every access are yours.' },
        { icon: 'lock', title: 'Confidentiality', text: 'We sign a non-disclosure agreement (NDA) on request.' },
        { icon: 'shield', title: 'Bug-fix warranty', text: 'Bugs found after delivery are fixed free of charge, for a period stated in the quote.' },
        { icon: 'clock', title: 'Reply within 24h', text: 'Every request gets an answer within one business day.' },
      ],
    },
    // Scrolling band above the footer (KeywordBand.jsx).
    keywords: ['Software development', 'Dedicated developers', 'IT outsourcing', 'White label', 'AI automation', 'Maintenance'],
    // Hero trust points (Home.jsx) and the outsourcing page.
    trust: ['Team based in Madagascar', 'International collaboration', 'English and French', 'Tailored solutions', 'Optimized costs'],
  },

  // Keys follow site.js clocks and markets.js clocks.
  cities: {
    antananarivo: { city: 'Antananarivo', country: 'Madagascar' },
    geneva: { city: 'Geneva', country: 'Switzerland' },
    paris: { city: 'Paris', country: 'France' },
    london: { city: 'London', country: 'United Kingdom' },
    montreal: { city: 'Montreal', country: 'Canada' },
    vancouver: { city: 'Vancouver', country: 'Canada' },
    'new-york': { city: 'New York', country: 'United States' },
    dubai: { city: 'Dubai', country: 'United Arab Emirates' },
    sydney: { city: 'Sydney', country: 'Australia' },
  },

  // Live clocks (Clocks.jsx).
  hours: {
    languagesLabel: 'We work in',
    languages: ['English', 'French'],
    listLabel: 'Current time in Madagascar and where our clients are',
    ours: 'Our time · UTC+3',
    same: 'Same time',
    hourUnit: 'h',
    versus: 'compared with Madagascar',
  },

  footer: {
    about:
      'TicTek is a software development team based in Madagascar, working with companies worldwide in English and French: custom software, dedicated developers, IT outsourcing, white-label development, AI automation and maintenance.',
    servicesTitle: 'Services',
    marketsTitle: 'Outsourcing',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    location: 'Antananarivo, Madagascar · clients worldwide',
    rights: 'All rights reserved.',
  },

  // The six offers. Keys follow site.js offerIds.
  offers: {
    development: {
      title: 'Software Development',
      short: 'Web apps, mobile apps and business software built around your processes.',
      need: 'Off-the-shelf tools don’t fit the way you work, or you need a new product built from scratch.',
      points: [
        'Web applications, client portals and internal tools',
        'iOS and Android apps from a single codebase',
        'SaaS products, back ends and APIs',
        'From scoping to production, with documentation',
      ],
      audience: 'SMEs, startups and organizations with a specific need.',
      type: 'custom',
    },
    dedicated: {
      title: 'Dedicated Developers',
      short: 'Developers who join your team and work in your tools.',
      need: 'Your roadmap is growing faster than your team, and hiring locally takes months.',
      points: [
        'One or more developers working alongside your team',
        'Onboarding into your Git, tickets and chat',
        'Code reviews and team rituals',
        'Capacity adjusted to your needs',
      ],
      audience: 'Startups, software companies and in-house IT teams.',
      type: 'dedicated',
    },
    outsourcing: {
      title: 'IT Outsourcing',
      short: 'Hand over part of your IT activity to a team that takes ownership.',
      need: 'You want to delegate development or technical work without building and managing an in-house team.',
      points: [
        'A full project or a clearly defined scope',
        'A single technical contact who runs things for you',
        'Regular updates and demos',
        'Documented code that belongs to you',
      ],
      audience: 'Companies without a tech team, or that want to free theirs up.',
      type: 'team',
    },
    'white-label': {
      title: 'White-label Development',
      short: 'Technical delivery for agencies and partners, under your brand.',
      need: 'Your agency wins projects but lacks the technical capacity to deliver all of them.',
      points: [
        'All or part of your projects, delivered discreetly',
        'No contact with your clients without your agreement',
        'Work in your tools, following your conventions',
        'Invoiced to your agency only',
      ],
      audience: 'Web, digital and marketing agencies, consulting firms.',
      type: 'white-label',
    },
    'ai-automation': {
      title: 'AI & Business Automation',
      short: 'Automate repetitive work and put AI where it actually helps.',
      need: 'Your teams lose hours copying data between tools, or you want to use AI on your own data without an open-ended experiment.',
      points: [
        'Automated workflows between CRM, invoicing, email and internal tools',
        'AI agents and assistants connected to your data',
        'Processing of documents, emails and forms',
        'An honest view of where AI is not the answer',
      ],
      audience: 'Sales, admin and operations teams, and companies handling a lot of text.',
      type: 'ai-automation',
    },
    support: {
      title: 'Maintenance & Technical Support',
      short: 'Keep your software secure, working and moving forward.',
      need: 'Your application is in production and needs fixes, updates and new features, but nobody has time for it.',
      points: [
        'Bug fixes and planned improvements',
        'Dependency updates and security patches',
        'Takeover of existing applications after a code review',
        'Monthly volume agreed together',
      ],
      audience: 'Companies with software in production.',
      type: 'maintenance',
    },
  },

  // Technical areas of expertise (services page). Keys follow site.js expertiseIds.
  expertise: {
    web: {
      title: 'Web applications and business software',
      short: 'Internal tools, client portals, back offices.',
      problem:
        'Your teams juggle spreadsheets, emails and tools that don’t talk to each other, or your current application holds your business back instead of supporting it.',
      deliverables: [
        'Custom web application: internal tool, client portal, back office',
        'Redesign or takeover of an existing application',
        'Responsive, accessible interfaces',
        'Technical documentation and production release',
      ],
      audience: 'SMEs and organizations whose processes don’t fit off-the-shelf software, or who have outgrown their spreadsheets.',
      tech: ['React', 'Next.js', 'Angular', 'Java / Spring Boot', 'Node.js', '.NET', 'PostgreSQL'],
    },
    mobile: {
      title: 'iOS and Android mobile apps',
      short: 'One codebase, two platforms.',
      problem: 'Your customers or field teams need a tool that works on a phone, including on an unreliable connection.',
      deliverables: [
        'iOS and Android app from a shared codebase',
        'Offline mode and data synchronization',
        'Notifications and integration with your APIs',
        'Support for App Store and Google Play publishing',
      ],
      audience: 'Companies launching a mobile service or equipping their field teams.',
      tech: ['React Native', 'Expo', 'TypeScript'],
    },
    'saas-api': {
      title: 'SaaS, backend and APIs',
      short: 'Solid foundations for your product.',
      problem: 'You are launching an online product, or your tools and partners need to exchange data reliably and securely.',
      deliverables: [
        'Backend architecture and development',
        'Documented REST APIs',
        'Accounts, roles and access management',
        'Docker containerization and CI/CD pipelines',
      ],
      audience: 'Startups and software vendors building a SaaS product, companies opening their data to partners.',
      tech: ['Node.js', 'Java / Spring Boot', '.NET', 'PostgreSQL', 'Redis', 'Docker'],
    },
    automation: {
      title: 'Business process automation',
      short: 'No more copy-paste between your tools.',
      problem: 'Hours are lost every week copying data from one tool to another, and mistakes follow.',
      deliverables: [
        'Review of repetitive tasks and data flows',
        'Automated workflows with n8n or custom code',
        'Connections between CRM, invoicing, email and internal tools',
        'Run monitoring and failure alerts',
      ],
      audience: 'Admin, sales or operations teams working across several tools at once.',
      tech: ['n8n', 'REST APIs', 'Node.js'],
    },
    ai: {
      title: 'AI feature integration',
      short: 'AI where it actually helps.',
      problem: 'You want to use generative AI in your tools or on your own data, without starting an open-ended experiment.',
      deliverables: [
        'Realistic use cases, and an honest view of where AI is not the answer',
        'Extraction and classification of documents, emails or forms',
        'Assistants connected to your data',
        'Integration into your existing applications through APIs',
      ],
      audience: 'Companies that handle a lot of text or documents and want to save time.',
      tech: ['OpenAI API', 'Gemini', 'Data pipelines'],
    },
    web3: {
      title: 'Blockchain and Web3',
      short: 'Smart contracts and decentralized apps.',
      problem:
        'You want to tokenize an asset, certify data or launch a decentralized application, without taking risks on contract security.',
      deliverables: [
        'An honest view of whether blockchain really fits your use case',
        'Solidity smart contracts covered by automated tests (Hardhat)',
        'Decentralized applications (dApps): web interface and wallet connection',
        'ERC-20 and ERC-721 tokens and NFTs, integrated with your applications',
      ],
      audience: 'Web3 startups and companies exploring traceability, certification or tokenization.',
      tech: ['Solidity', 'Hardhat', 'Ethers.js', 'Ethereum (EVM)', 'Polygon'],
    },
    maintenance: {
      title: 'Ongoing development and team augmentation',
      short: 'Keep your application alive and growing.',
      problem: 'Your application has to keep evolving, but your team lacks time or skills in some technologies.',
      deliverables: [
        'Planned fixes and improvements',
        'Dependency updates and security patches',
        'Automated tests: unit, integration, end-to-end',
        'Developers embedded in your team and your tools',
      ],
      audience: 'Companies with a product in production, agencies and tech teams short on capacity.',
      tech: ['GitHub / GitLab', 'CI/CD', 'Playwright', 'Cypress'],
    },
  },

  // Keys follow site.js modelIds.
  modelLabels: {
    audience: 'Who it’s for',
    when: 'When to choose it',
    how: 'How it works',
    benefits: 'Benefits',
  },
  models: {
    'staff-augmentation': {
      title: 'Dedicated Developer',
      short: 'A developer who works remotely as part of your team.',
      audience: 'Companies with an in-house tech team or a technical lead: startups, software companies, IT departments.',
      when: 'You need extra capacity or a specific skill, for a few months or longer, without going through local hiring.',
      how: 'The developer joins your tools (Git, tickets, chat) and your rituals, and works on your priorities. You manage the backlog; we take care of the rest.',
      benefits: [
        'No long hiring process',
        'Volume adjusted as your needs change',
        'Overlapping working hours agreed at kickoff',
        'A TicTek contact for any follow-up',
      ],
      cta: 'Hire a dedicated developer',
      type: 'dedicated',
    },
    project: {
      title: 'Outsourced Development Team',
      short: 'TicTek takes charge of part or all of your project.',
      audience: 'SMEs and organizations without a development team, or teams that want to delegate a full scope.',
      when: 'You have a defined need, such as an application, an MVP or a tool to replace, and want a team that delivers it.',
      how: 'We scope the project with you, agree on scope, milestones and budget in writing, then build in short iterations with regular demos until delivery.',
      benefits: [
        'A single contact from scoping to delivery',
        'Scope, schedule and budget set before work starts',
        'Acceptance testing with you before release',
        'Documented code that belongs to you',
      ],
      cta: 'Outsource your project',
      type: 'team',
    },
    'white-label': {
      title: 'White-label Partnership',
      short: 'We work behind the scenes for agencies and partners.',
      audience: 'Web, digital and marketing agencies, consulting firms and IT service companies.',
      when: 'You want to take on more projects, or offer technical services you don’t have in-house, while keeping the client relationship.',
      how: 'You keep the relationship and the brand; we handle all or part of the technical delivery, in your tools and following your conventions.',
      benefits: [
        'No direct contact with your client without your agreement',
        'A single technical contact for your team',
        'Fixed price per project or monthly volume',
        'Complete discretion',
      ],
      cta: 'Become a partner',
      type: 'white-label',
    },
  },

  process: [
    { title: 'Discovery', text: 'We understand your needs, your context and your constraints.' },
    { title: 'Planning', text: 'We define the solution, the timeline and the budget, in writing.' },
    { title: 'Development', text: 'We build in short iterations, with regular updates and demos.' },
    { title: 'Delivery', text: 'We test the solution with you, then put it into production.' },
    { title: 'Support', text: 'We maintain your software and build what comes next.' },
  ],

  // Four reasons to choose TicTek (home page).
  advantages: [
    {
      icon: 'coins',
      title: 'Cost Optimization',
      text: 'Work with a development team based in Madagascar and reduce the cost of building and running your software, without cutting corners on quality.',
    },
    {
      icon: 'layers',
      title: 'Flexible Collaboration',
      text: 'A one-off project, extra capacity for your team or an ongoing partnership: you choose the level of involvement and adjust it along the way.',
    },
    {
      icon: 'globe',
      title: 'International Communication',
      text: 'Work in English or French, talk directly to the developers, with meeting slots agreed around your time zone.',
    },
    {
      icon: 'code',
      title: 'Technical Expertise',
      text: 'Back end, front end, mobile, automation and AI: one team that covers the skills your project needs.',
    },
  ],

  // Security and trust practices (Security.jsx). No certification is claimed.
  security: {
    eyebrow: 'Security & trust',
    title: 'Professional practices you can rely on',
    lede: 'Working with a remote team takes trust. Here is how we protect your projects and your information.',
    items: [
      { icon: 'lock', title: 'Confidentiality', text: 'Your project and your information stay between us. Nothing is shared or reused without your agreement.' },
      { icon: 'key', title: 'Access management', text: 'Access is limited to the people working on your project, and handed back or revoked when the work ends.' },
      { icon: 'shield', title: 'Information protection', text: 'Credentials are never sent in plain text by email or chat, and production data is only used when the work requires it.' },
      { icon: 'branch', title: 'Source code management', text: 'Code lives in a Git repository, ideally yours, with reviewed changes and a full history.' },
      { icon: 'file', title: 'Documentation', text: 'Technical documentation comes with the code, so your team or another provider can take over.' },
      { icon: 'list', title: 'Task tracking', text: 'Every request is tracked in a shared tool: you always know what is in progress.' },
      { icon: 'chat', title: 'Regular communication', text: 'Regular check-ins and demos, with a named contact who answers your questions.' },
      { icon: 'signature', title: 'NDA on request', text: 'We sign a non-disclosure agreement before you share sensitive information.' },
    ],
    note: 'These are our working practices, not certifications. We can write them into your contract.',
  },

  // Home page FAQ (also FAQPage structured data).
  faq: [
    {
      q: 'Why outsource software development to Madagascar?',
      a: 'Madagascar combines a lower cost structure than Europe or North America with a team that works in English and French. On UTC+3, it shares most of the working day with Europe, and agreed meeting slots work for North America and Australia. You get development skills at an optimized cost, without the constraints of local hiring.',
    },
    {
      q: 'How does remote collaboration work?',
      a: 'Video calls for key discussions, a chat channel for day-to-day questions, a shared ticketing tool to track requests and regular demos on a staging environment. If you already have your own tools, we work in them.',
    },
    {
      q: 'Can you work with international companies?',
      a: 'Yes. We work remotely with companies in different countries and time zones. At kickoff, we agree on regular meeting slots that fit your hours; the rest of the follow-up happens asynchronously in your tools.',
    },
    {
      q: 'Do you speak English and French?',
      a: 'Yes. Calls, written exchanges, documentation and deliverables can be in English or French, as you prefer.',
    },
    {
      q: 'Can we hire a dedicated developer?',
      a: 'Yes. A TicTek developer can join your team remotely, work in your tools and follow your priorities. Volume and duration are agreed together and can change over time.',
    },
    {
      q: 'Do you provide white-label development?',
      a: 'Yes. Agencies and partners can hand us all or part of their projects. You keep the client relationship and your brand; we have no direct contact with your client without your agreement.',
    },
    {
      q: 'How do you manage project security?',
      a: 'Access limited to the people working on your project, code in a Git repository with reviewed changes, no credentials sent in plain text, documentation delivered with the code and an NDA on request. Once the work is paid for, the source code and every access are yours.',
    },
    {
      q: 'How are your services priced?',
      a: 'It depends on the engagement model and your project: a quote per project, a monthly collaboration, a dedicated developer, an outsourced team or a maintenance contract. Every price is set out in writing before work starts.',
    },
    {
      q: 'Can we start with a small project?',
      a: 'Yes, and it is often the best way to start: a defined scope, a short timeline, and a concrete basis for deciding what comes next.',
    },
    {
      q: 'Do you provide ongoing maintenance?',
      a: 'Yes. We maintain and evolve applications in production, whether we built them or not (after a code review): fixes, updates, security patches and new features.',
    },
  ],

  pages: {
    home: {
      title: 'Software Development Outsourcing in Madagascar | TicTek',
      description:
        'TicTek is your remote software development team in Madagascar: custom software, dedicated developers, IT outsourcing and AI automation, in English or French.',
      hero: {
        // titleAccent is written in hollow handwritten letters (Home.jsx).
        title: 'Your outsourced tech team,',
        titleAccent: 'without hiring.',
        lede:
          'We build, maintain and evolve your software and IT systems from Madagascar, on your working hours.',
        ctaContact: "Let's talk about your project",
        ctaWork: 'See our work',
        ctaServices: 'Explore our services',
        trustLabel: 'What you get with TicTek',
        visual: {
          url: 'app.your-company.com',
          dashboard: 'Dashboard',
          orders: 'Orders',
          clients: 'Clients',
          activity: 'Activity',
          synced: 'Synced',
          automation: 'Automated workflow',
        },
        stackTitle: 'Our everyday stack',
        stackPause: 'Pause the scrolling',
      },
      why: {
        eyebrow: 'Why TicTek',
        title: 'Why choose TicTek?',
        lede: 'A technical partner that adapts to the way you work, not the other way around.',
      },
      services: {
        eyebrow: 'Services',
        title: 'Our services',
        lede: 'Your business needs first, technology second.',
        link: 'All services',
      },
      models: {
        eyebrow: 'Engagement models',
        title: 'Three ways to work together',
        lede: 'Pick the model that fits your organization. You can switch along the way.',
        link: 'Compare engagement models',
      },
      work: {
        eyebrow: 'Case studies',
        title: 'Our work',
        lede: 'Projects delivered by TicTek as a service provider, from scoping to production.',
        link: 'All case studies',
        read: 'Read the case study',
      },
      process: {
        eyebrow: 'Process',
        title: 'Our process',
        lede: 'Five steps, from the first call to ongoing support.',
      },
      clients: {
        eyebrow: 'International collaboration',
        title: 'We work on your time',
        lede: 'From Madagascar (UTC+3): one to two hours from Europe, agreed meeting slots for North America and Australia.',
      },
      team: {
        eyebrow: 'The team',
        title: 'The people behind TicTek',
        lede: 'You talk to us directly, with no middleman.',
        link: 'More about us',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Frequently asked questions',
      },
    },

    services: {
      title: 'Software Development & IT Outsourcing Services | TicTek',
      description:
        'Custom software development, dedicated developers, IT outsourcing, white-label development, AI and business automation, maintenance: TicTek’s services.',
      h1: 'Software development and IT outsourcing services',
      lede:
        'Six ways to support your business, each described by the need it answers. Not sure which one fits? Tell us about your project: it often spans several.',
      labels: {
        need: 'Your need',
        deliverables: 'What we deliver',
        audience: 'Who it’s for',
        problem: 'The problem',
        tech: 'Technologies',
        projects: 'Related work',
        cta: 'Discuss this service',
      },
      expertise: {
        eyebrow: 'Technical expertise',
        title: 'The expertise behind our services',
        lede: 'The technical areas our team works in every day. Each one starts from a problem to solve.',
      },
      quality: {
        title: 'Quality is part of every service',
        items: [
          'Automated tests written alongside the code and run on every change through CI/CD',
          'Code review before every merge',
          'Application security best practices (OWASP Top 10)',
          'Containerized environments so staging matches production',
        ],
      },
    },

    work: {
      title: 'Case Studies: Software, AI and Mobile Projects | TicTek',
      description:
        'Case studies of projects designed and built by TicTek: ride-hailing platform with AI and blockchain, architecture decision engine, AI job application assistant.',
      h1: 'Our work',
      lede:
        'Projects delivered by TicTek as a service provider, from scoping to production. They show how we work and what we can build for you.',
      labels: {
        link: 'View project',
        origin: { provider: 'Delivered as a service provider' },
        context: 'Context',
        problem: 'The problem',
        solution: 'The solution',
        features: 'Main features',
        role: 'TicTek’s contribution',
        facts: 'Key facts',
        tech: 'Technologies',
      },
    },

    collaboration: {
      title: 'Engagement models: dedicated developer, team or white label | TicTek',
      description:
        'Dedicated developer, outsourced development team or white-label partnership: who each TicTek engagement model is for, when to choose it and how it works.',
      h1: 'How to work with TicTek',
      lede: 'Three engagement models, one method. Pick the one that fits your organization; you can switch along the way.',
      processTitle: 'Our process',
      processLede: 'Every step applies to an outsourced project. For a dedicated developer or a white-label partnership, we follow your own process.',
      estimateTitle: 'What helps us estimate your project',
      estimateItems: [
        'The problem to solve and who will use the software',
        'Existing tools or systems to connect',
        'Your timing constraints and, if possible, a budget range',
        'Any existing material: specifications, mockups, screenshots',
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'How much does a project cost?',
          a: 'It depends on the engagement model, the scope, the integrations and the expected level of quality. The price is set out in a written quote after scoping, before any work starts. Sharing a budget range in the form helps us suggest a suitable approach.',
        },
        {
          q: 'Can we change models along the way?',
          a: 'Yes. Many collaborations start with a defined project, then continue as maintenance or with a dedicated developer. We adjust the setup with you.',
        },
        {
          q: 'Do you work with clients in other time zones?',
          a: 'Yes, we work internationally. Madagascar is on UTC+3 with no daylight saving time: one to two hours from France and Switzerland, seven to eight hours from Eastern Canada. At kickoff we agree on regular meeting slots that fit your hours; the rest of the follow-up happens asynchronously in your tools.',
        },
        {
          q: 'Can you take over an existing application?',
          a: 'Yes. We start by reviewing the code, dependencies and infrastructure to assess the project, then propose a takeover plan.',
        },
      ],
    },

    pricing: {
      title: 'Pricing: flexible pricing based on your needs | TicTek',
      description:
        'Quote per project, monthly collaboration, dedicated developer, outsourced team or maintenance contract: how TicTek prices its work and how to get a quote.',
      h1: 'Flexible Pricing Based on Your Needs.',
      lede:
        'Every project is different. Our prices depend on your needs, your project and the engagement model you choose, and they are always set out in writing before work starts.',
      optionsTitle: 'Pricing options',
      fitLabel: 'Best for:',
      options: [
        {
          id: 'project-quote',
          icon: 'project',
          title: 'Quote per project',
          text: 'One overall price for a scope defined together during scoping.',
          points: ['Price, deliverables and milestones set in the quote', 'Out-of-scope changes priced separately, before any work'],
          fit: 'applications, business software, MVPs, white-label projects.',
        },
        {
          id: 'monthly',
          icon: 'calendar',
          title: 'Monthly collaboration',
          text: 'A monthly volume of development time, for a product that keeps evolving.',
          points: ['Volume agreed together and adjustable', 'Time tracking shared with you'],
          fit: 'products in progress, evolving needs, agencies.',
        },
        {
          id: 'dedicated-developer',
          icon: 'staff-augmentation',
          title: 'Dedicated developer',
          text: 'A developer who joins your team, billed by the month.',
          points: ['Profile chosen according to your needs', 'Duration agreed together'],
          fit: 'companies with an in-house tech team.',
        },
        {
          id: 'outsourced-team',
          icon: 'layers',
          title: 'Outsourced team',
          text: 'A team that takes charge of a full project or a defined scope.',
          points: ['A single contact who runs the project', 'Milestones and payment schedule set in the quote'],
          fit: 'companies without a development team.',
        },
        {
          id: 'maintenance',
          icon: 'maintenance',
          title: 'Maintenance contract',
          text: 'A monthly amount to keep an application in production secure and up to date.',
          points: ['Security and dependency updates', 'Fixes and small improvements'],
          fit: 'applications already in production.',
        },
      ],
      factorsTitle: 'What drives the price',
      factors: [
        { title: 'Engagement model', text: 'A project quote, a monthly volume, a dedicated developer or a maintenance contract.' },
        { title: 'Scope', text: 'Number of screens, features and user types.' },
        { title: 'Platforms', text: 'Web, iOS, Android, or several at once.' },
        { title: 'Integrations', text: 'Connections to your existing tools, online payment, third-party APIs, AI.' },
        { title: 'Requirements', text: 'Data volume, security, test coverage, expected availability.' },
        { title: 'Timeline', text: 'A tight schedule can require more developers working in parallel.' },
      ],
      stepsTitle: 'How to get a quote',
      steps: [
        'Describe your project through the contact form, ideally with a budget range.',
        'We discuss it in a first call, free and with no commitment.',
        'We send you a written proposal: scope, milestones, schedule and price.',
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Why don’t you publish fixed prices?',
          a: 'Two similar-looking projects can take very different effort depending on integrations, volumes and requirements. A price shown without knowing your project would be either misleading or padded just in case. We prefer to give you a precise written quote.',
        },
        {
          q: 'Is the first call free?',
          a: 'Yes, the first call is free and with no commitment. For a complex project, we may suggest a scoping phase before the final quote; it is then priced upfront.',
        },
        {
          q: 'Can we start small?',
          a: 'Yes. A small first project is a good way to test the collaboration before committing to more.',
        },
        {
          q: 'How does payment work?',
          a: 'The payment schedule (deposit, milestones, balance or monthly billing) is stated in every quote and agreed with you before any work starts.',
        },
      ],
    },

    outsourcing: {
      title: 'Software Development Outsourcing to Madagascar | TicTek',
      description:
        'Outsource your software development to TicTek, a remote team in Madagascar: dedicated developers, outsourced team or white label, in English or French.',
      h1: 'Outsource Your Software Development with TicTek.',
      lede:
        'A remote development team based in Madagascar that builds, maintains and evolves your software, in English or French, at an optimized cost and with the professional practices you expect.',
      why: {
        eyebrow: 'Why outsource',
        title: 'Hire in-house or outsource?',
        lede: 'Outsourcing lets you move forward on your software without the cost, delay and management load of hiring.',
        inhouse: {
          title: 'Hiring in-house',
          items: [
            'Often months to find the right profile',
            'Fixed salaries and costs, even in quiet periods',
            'One skill per person hired',
            'Knowledge leaves with the person',
            'Management stays on your plate',
          ],
        },
        tictek: {
          title: 'Outsourcing to TicTek',
          items: [
            'We start as soon as the scope is agreed',
            'Capacity that follows your projects',
            'Web, mobile, back end, AI: several skills in one team',
            'Documented code: continuity is ensured',
            'A single contact who runs things for you',
          ],
        },
      },
      madagascar: {
        eyebrow: 'Why Madagascar',
        title: 'Why work with a team in Madagascar?',
        items: [
          {
            icon: 'clock',
            title: 'A convenient time zone',
            text: 'UTC+3, no daylight saving time: one to two hours from Western Europe, and agreed meeting slots with North America and Australia.',
          },
          {
            icon: 'globe',
            title: 'French and English',
            text: 'French is widely used in business in Madagascar, and our team works in English with international clients.',
          },
          {
            icon: 'coins',
            title: 'Optimized costs',
            text: 'A lower cost structure than in Europe or North America: more of your budget goes into your product.',
          },
          {
            icon: 'code',
            title: 'Professional standards',
            text: 'Modern tools and practices: Git, code reviews, automated tests, continuous integration and documentation.',
          },
        ],
      },
      remote: {
        title: 'The benefits of a remote team',
        items: [
          'No local recruitment, onboarding or office costs',
          'Capacity that grows or shrinks with your projects',
          'Several skills in one team, instead of one hire per skill',
          'Work that moves forward asynchronously while you are offline',
          'Documented code: the knowledge stays with your company',
        ],
      },
      models: {
        eyebrow: 'Engagement models',
        title: 'Choose your engagement model',
        lede: 'Three setups, depending on whether you have a tech team and how much you want to delegate.',
      },
      skills: {
        title: 'Skills you can count on',
        lede: 'The technologies our team works with. Tell us what you need: we will tell you honestly whether we are the right fit.',
      },
      audiences: {
        title: 'Who Can Benefit from Our Services?',
        items: [
          { icon: 'building', title: 'SMEs', text: 'Get custom tools and automation without building an in-house tech team.' },
          { icon: 'rocket', title: 'Startups', text: 'Build your MVP or grow your team quickly while keeping your costs under control.' },
          { icon: 'white-label', title: 'Digital Agencies', text: 'Take on more projects with a white-label development partner.' },
          { icon: 'briefcase', title: 'Consulting Firms', text: 'Turn your recommendations into working software for your clients.' },
          { icon: 'users', title: 'Non-Technical Businesses', text: 'Rely on a team that explains things clearly and takes care of the technical side.' },
          { icon: 'staff-augmentation', title: 'Companies with Existing IT Teams', text: 'Add capacity or a specific skill to your team, for as long as you need.' },
        ],
      },
      process: {
        title: 'How we work together',
        lede: 'A clear method, whatever the engagement model.',
      },
      maintenance: {
        title: 'Maintenance after delivery',
        text: 'Delivery is not the end of the road. We can keep your software secure and up to date, and keep building it as your business evolves.',
        points: [
          'Fixes and planned improvements',
          'Dependency updates and security patches',
          'Monthly volume agreed together',
        ],
        link: 'Maintenance & technical support',
      },
      ctaMid: {
        title: 'Not sure which setup fits?',
        text: 'Describe your situation: we will suggest the right engagement model in a first call, free and with no commitment.',
      },
      faqTitle: 'Outsourcing: frequently asked questions',
      faq: [
        {
          q: 'What can we outsource to TicTek?',
          a: 'The development of a new application, part of an existing project, maintenance, process automation or AI integration. You can also add a developer to your own team.',
        },
        {
          q: 'How quickly can we start?',
          a: 'As soon as the scope and engagement model are agreed. A first call is enough to tell you when we can start on your project.',
        },
        {
          q: 'Who owns the code?',
          a: 'You do. Once the work is paid for, the source code and every access are yours. Ideally, the code lives in your own repository from day one.',
        },
        {
          q: 'Can we bring development back in-house later?',
          a: 'Yes. Documented code, a full Git history and a handover with your team make that transition straightforward.',
        },
      ],
    },

    // Country pages (Market.jsx), keys from data/markets.js.
    ...marketPages,

    careers: {
      title: 'Careers: send an open application | TicTek',
      description:
        'Web, mobile, back-end, QA or DevOps developer? Send TicTek an open application: varied projects for clients worldwide.',
      h1: 'Careers',
      lede:
        'We have no open positions right now, but we read every open application. If your profile matches a current or upcoming need, we will get back to you.',
      whyTitle: 'Working at TicTek',
      why: [
        { title: 'Varied projects', text: 'Web and mobile apps, APIs, automation and AI, for clients worldwide.' },
        { title: 'A modern stack', text: 'React, Next.js, Node.js, Java / Spring Boot, .NET, React Native, Docker…' },
        { title: 'Quality as a habit', text: 'Code reviews, automated tests and continuous integration every day.' },
        { title: 'English and French', text: 'You work with clients and teams in both languages.' },
      ],
      profilesTitle: 'Profiles we are interested in',
      profiles: [
        'Front-end developer: React, Angular, Vue.js',
        'Back-end developer: Node.js, Java, .NET, PHP',
        'Mobile developer: React Native',
        'QA and test automation',
        'DevOps and cloud',
        'Blockchain developer: Solidity, Ethers.js',
        'Another technical profile? Write to us anyway.',
      ],
      processTitle: 'How it works',
      process: [
        'Send your application with the form below.',
        'You immediately receive a confirmation email.',
        'We review your profile and get back to you if it matches a need.',
      ],
      formTitle: 'Open application',
    },

    about: {
      title: 'About TicTek: a software development team in Madagascar',
      description:
        'TicTek is a software development team in Antananarivo, Madagascar, working with companies worldwide: mission, vision, values, team, skills and how we work.',
      h1: 'About TicTek',
      lede:
        'TicTek is a software development team based in Antananarivo, Madagascar, working remotely with companies worldwide, in English and French. We design, build and maintain software for businesses looking for a reliable, flexible and cost-conscious technical partner.',
      intro: [
        {
          id: 'mission',
          title: 'Our mission',
          text: 'Give companies of every size access to a dependable development team: custom software for those without a tech team, and reliable extra capacity for those who have one.',
        },
        {
          id: 'vision',
          title: 'Our vision',
          text: 'Show that a team based in Madagascar can be a long-term technical partner for international companies, chosen for the quality of its work and its communication, not only for its costs.',
        },
      ],
      valuesTitle: 'Our values',
      values: [
        { title: 'Transparency', text: 'Clear estimates, honest advice, including when the answer is “you don’t need this”.' },
        { title: 'Reliability', text: 'We do what we say, on the agreed schedule, and we tell you early when something changes.' },
        { title: 'Quality', text: 'Tested, reviewed and documented code that your team can keep evolving.' },
        { title: 'Partnership', text: 'We work as an extension of your team, with your goals in mind.' },
      ],
      teamTitle: 'The team',
      teamLede: 'The people who design and build your projects, and who you talk to directly.',
      workTitle: 'How we work',
      work: [
        {
          title: 'Organization',
          text: 'Every project has a named technical lead, your contact from scoping to delivery. Work is organized in short iterations, tracked in a shared ticketing tool.',
        },
        {
          title: 'Quality',
          text: 'Every change goes through code review and automated tests before it ships. Typing, continuous integration and containerized environments are part of our daily routine.',
        },
        {
          title: 'Collaboration',
          text: 'Video calls for key discussions, chat for day-to-day questions, regular demos. We follow your habits and tools when you have them.',
        },
        {
          title: 'Remote, from Madagascar',
          text: 'Madagascar is on UTC+3, with a wide overlap with Europe. For other time zones, we agree on meeting slots that fit your hours.',
        },
      ],
      skillsTitle: 'Technical skills',
      skills: [
        { name: 'Front end', items: ['TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js'] },
        { name: 'Back end', items: ['Java / Spring Boot', 'Node.js', 'C# / .NET', 'PHP'] },
        { name: 'Mobile', items: ['React Native', 'Expo'] },
        { name: 'Data', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'] },
        { name: 'DevOps', items: ['Docker', 'CI/CD', 'GitHub Actions', 'GitLab CI'] },
        { name: 'AI and automation', items: ['OpenAI API', 'Gemini', 'Claude', 'n8n'] },
        { name: 'Blockchain and Web3', items: ['Solidity', 'Hardhat', 'Ethers.js', 'Polygon'] },
      ],
      commitmentTitle: 'Our commitment to clients',
      commitmentLede: 'What you can expect from us on every project.',
    },

    contact: {
      title: 'Contact: Discuss Your Software Project | TicTek',
      description:
        'Tell TicTek about your project: dedicated developer, outsourced team, white label, custom software, AI automation or maintenance. Reply within one business day.',
      h1: 'Discuss Your Project',
      lede: 'Tell us about your needs in a few lines. We reply within one business day to set up a first call, in English or French.',
      formTitle: 'Tell us about your project',
      nextTitle: 'What happens next?',
      next: [
        'We read your request and reply by email, with any questions we have.',
        'We set up a first video call, free and with no commitment.',
        'We send you a written proposal adapted to your needs and engagement model.',
      ],
      directTitle: 'Contact us directly',
    },

    blog: {
      title: 'Blog: life and projects at TicTek in Madagascar | TicTek',
      description:
        'Behind the scenes at TicTek, a team of developers in Madagascar: current projects, how we work and team life.',
      h1: 'Blog',
      lede: 'Behind the scenes at TicTek: our projects, how we work and team life in Madagascar.',
      readMore: 'Read the post',
      allPosts: 'All posts',
    },

    privacy: {
      title: 'Privacy and cookies | TicTek',
      description:
        'What data the TicTek website collects, why, with which services (EmailJS, Google Analytics, Vercel) and how to exercise your rights.',
      h1: 'Privacy and cookies',
      lede: 'This site collects as little data as possible. Here is what, why, and how to exercise your rights.',
      sections: [
        {
          id: 'controller',
          title: 'Who is responsible',
          paragraphs: ['TicTek, a team of developers based in Antananarivo, Madagascar. For any question about your data: {email}.'],
        },
        {
          id: 'forms',
          title: 'Contact and application forms',
          paragraphs: [
            'The information you enter (name, email, company, country, website, project description, budget and timeline, or application) is only used to reply to you. It reaches us by email through the EmailJS service, then stays in our mailbox for as long as needed to follow up on your request.',
            'It is never sold or used for marketing.',
          ],
        },
        {
          id: 'analytics',
          title: 'Audience measurement (Google Analytics)',
          paragraphs: [
            'Only with your consent, we use Google Analytics 4 to see which pages are viewed and where visitors come from. Until you accept, no Google script is loaded and no cookie is set.',
            'Cookies used after consent: _ga and _ga_<id>, lasting 13 months at most. Google advertising features stay disabled.',
            'You can change your mind at any time with the “Manage cookies” link at the bottom of every page.',
          ],
        },
        {
          id: 'preferences',
          title: 'Preferences stored on your device',
          paragraphs: [
            'Your cookie choice is stored in your browser’s local storage, and whether you have already seen the opening animation in its session storage. None of this is sent to TicTek.',
          ],
        },
        {
          id: 'hosting',
          title: 'Hosting',
          paragraphs: ['The site is hosted by Vercel Inc., which processes the technical data needed to serve pages (IP address, access logs).'],
        },
        {
          id: 'rights',
          title: 'Your rights',
          paragraphs: [
            'You can request access to, correction or deletion of your data by writing to {email}. If you live in the European Union, you can also lodge a complaint with your country’s data protection authority.',
          ],
        },
      ],
    },

    notFound: {
      title: 'Page not found | TicTek',
      description: 'This page does not exist or has moved.',
      h1: 'Page not found',
      lede: 'This page does not exist or has moved. Here are some useful links:',
    },
  },

  form: forms.en,
};

export default en;
