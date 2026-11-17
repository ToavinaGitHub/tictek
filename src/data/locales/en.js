import forms from './form';

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
      work: 'Work',
      collaboration: 'Engagement models',
      about: 'About',
      contact: 'Contact',
      pricing: 'Pricing',
      careers: 'Careers',
      privacy: 'Privacy',
      blog: 'Blog',
    },
    ctaContact: "Let's talk about your project",
    cta: {
      title: 'Got a project in mind?',
      text: 'Let’s talk, no commitment.',
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
    // Scrolling band above the footer (KeywordBand.jsx).
    keywords: ['Web', 'Mobile', 'SaaS', 'API', 'Automation', 'AI', 'Web3', 'Maintenance'],
  },

  // Keys follow site.js clientCountries.
  countries: {
    mu: 'Mauritius',
    mg: 'Madagascar',
    fr: 'France',
    ae: 'Dubai (United Arab Emirates)',
  },

  // Keys follow site.js clocks.
  cities: {
    antananarivo: { city: 'Antananarivo', country: 'Madagascar' },
    'port-louis': { city: 'Port Louis', country: 'Mauritius' },
    dubai: { city: 'Dubai', country: 'United Arab Emirates' },
    paris: { city: 'Paris', country: 'France' },
    geneva: { city: 'Geneva', country: 'Switzerland' },
    montreal: { city: 'Montreal', country: 'Canada' },
  },

  footer: {
    about:
      'TicTek designs, builds and maintains custom software: web and mobile apps, SaaS, APIs, process automation and AI integration. Team based in Madagascar, serving clients internationally, in English and French.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    location: 'Antananarivo, Madagascar · clients worldwide',
    rights: 'All rights reserved.',
  },

  services: {
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

  models: {
    project: {
      title: 'Fixed-scope project',
      short: 'A defined need, an agreed scope, a delivered application.',
      text:
        'You have a clear need but no in-house tech team. We define the scope together, then build the application against an estimate and a schedule agreed before work starts.',
      points: [
        'Scope, deliverables and milestones agreed in writing',
        'Regular demos during development',
        'Acceptance testing with you before release',
      ],
      fit: 'SMEs and organizations without an in-house development team.',
    },
    'white-label': {
      title: 'White-label development',
      short: 'We build for your clients, under your brand.',
      text:
        'You run an agency. You keep the client relationship; we handle all or part of the technical delivery, discreetly.',
      points: [
        'No direct contact with your client without your consent',
        'We work in your tools and follow your conventions',
        'A single technical contact for your team',
      ],
      fit: 'Web, digital and marketing agencies.',
    },
    'staff-augmentation': {
      title: 'Team augmentation',
      short: 'Developers who join your team, your tools and your rituals.',
      text:
        'Your team needs extra capacity or a specific skill. One or more TicTek developers work alongside you, inside your organization.',
      points: [
        'Onboarding into your tools: Git, tickets, chat',
        'Participation in code reviews and team rituals',
        'Volume and duration adjusted to your needs',
      ],
      fit: 'Startups, software vendors and in-house tech teams.',
    },
  },

  process: [
    { title: 'Intro call', text: 'One call, no commitment.' },
    { title: 'Scoping', text: 'The scope, clarified in writing.' },
    { title: 'Estimate', text: 'Milestones, schedule and budget.' },
    { title: 'Development', text: 'Short iterations, regular demos.' },
    { title: 'Testing', text: 'Automated, then validated with you.' },
    { title: 'Delivery', text: 'Go-live and documentation.' },
    { title: 'Maintenance', text: 'Ongoing support, if needed.' },
  ],

  pages: {
    home: {
      title: 'TicTek | Developers in Madagascar: web, mobile, AI and Web3',
      description:
        'TicTek is a team of developers based in Antananarivo, Madagascar, building web and mobile apps, SaaS, APIs, automation, AI and Web3 for clients worldwide.',
      hero: {
        title: 'Your software development partner,',
        titleAccent: 'from first idea to production.',
        lede:
          'A team of developers in Madagascar. Web, mobile, automation and AI, for clients worldwide.',
        ctaWork: 'See our work',
        ctaServices: 'Explore our services',
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
      services: {
        title: 'What we build for you',
        lede: 'Your problem first, technology second.',
        link: 'All services',
        otherTitle: 'Something else?',
        otherText: 'Describe it, we’ll tell you how we can help.',
      },
      work: {
        title: 'Recent work',
        link: 'All projects',
      },
      clients: {
        eyebrow: 'Our clients',
        title: 'Clients on three continents',
        lede: 'Indian Ocean, Europe, Middle East. Remotely, from Antananarivo.',
        listLabel: 'Countries of our clients',
        stats: { countries: 'countries', continents: 'continents', languages: 'working languages' },
      },
      hours: {
        title: 'Our time, your time',
        lede: 'UTC+3: one to two hours from Europe.',
        languagesLabel: 'We work in',
        languages: ['English', 'French'],
        listLabel: 'Current time in Madagascar and where our clients are',
        ours: 'Our time · UTC+3',
        same: 'Same time',
        hourUnit: 'h',
        versus: 'compared with Madagascar',
      },
      models: {
        title: 'Three ways to work together',
        lede: 'With or without a tech team.',
        link: 'Compare models',
      },
      process: {
        title: 'Our method',
      },
      trust: {
        title: 'Our commitments',
        items: [
          {
            title: 'A direct technical contact',
            text: 'You talk directly to the developers.',
          },
          {
            title: 'An estimate before any commitment',
            text: 'Scope and budget in writing before we start.',
          },
          {
            title: 'Continuous visibility',
            text: 'Regular demos: you see the project move.',
          },
          {
            title: 'Code built to last',
            text: 'Tests, code reviews and docs included.',
          },
        ],
      },
    },

    services: {
      title: 'Services: web, mobile, SaaS, APIs, AI and Web3 | TicTek',
      description:
        'Web and business applications, mobile apps, SaaS and APIs, automation, AI, blockchain and Web3, maintenance and team augmentation: TicTek’s services.',
      h1: 'Custom software development services',
      lede:
        'Seven areas of work, presented by the problem they solve. If your need doesn’t fit any of them, tell us about it: it often spans several.',
      labels: {
        problem: 'The problem',
        deliverables: 'What we deliver',
        audience: 'Who it’s for',
        tech: 'Technologies',
        projects: 'Related work',
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
      title: 'Work: web, mobile and software projects | TicTek',
      description: 'Projects designed and built by TicTek: ride-hailing platform with AI and blockchain, architecture decision tool, web and mobile apps.',
      h1: 'Our work',
      lede: 'A few projects designed and built by the TicTek team.',
      labels: {
        link: 'View project',
      },
    },

    collaboration: {
      title: 'Fixed-scope, white-label or team augmentation | TicTek',
      description:
        'Fixed-scope projects, white-label development for agencies or team augmentation: how TicTek works with you, step by step.',
      h1: 'How to work with TicTek',
      lede: 'Three engagement models, one method. Pick the one that fits your organization; we can switch along the way.',
      fitLabel: 'Best for:',
      processTitle: 'Project steps',
      processLede: 'Every step applies to a fixed-scope project. For white-label or team augmentation, we follow your own process.',
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
          a: 'It depends on scope, integrations and the expected level of quality. Our hourly rate starts at US$8; the total budget is set out in a detailed estimate after scoping. Sharing a budget range in the form helps us suggest a suitable approach.',
        },
        {
          q: 'How does remote work happen in practice?',
          a: 'Video calls for key discussions, chat for day-to-day questions, a ticketing tool to track requests, and regular demos on a staging environment.',
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
      title: 'Pricing: how we estimate your software project | TicTek',
      description:
        'Hourly rate from US$8. Fixed price, time and materials, monthly maintenance or white label: how TicTek prices its work and what drives the cost of a project.',
      h1: 'Pricing',
      lede:
        'Every software project is different, but here is a benchmark: our hourly rate starts at US$8. Here is how we bill, what drives the price and how to get an estimate.',
      rate: {
        label: 'Hourly rate',
        from: 'From',
        value: 'US$8',
        unit: '/ hour',
        note: 'The exact rate depends on the skills required and the size of the engagement. It is always stated in the quote, before any work starts.',
      },
      modelsTitle: 'How we bill',
      fitLabel: 'Best for:',
      models: [
        {
          id: 'fixed-price',
          title: 'Fixed price',
          text: 'One overall price agreed upfront, for a scope defined together during scoping.',
          points: [
            'Price, deliverables and milestones set in the quote',
            'Out-of-scope changes priced separately, before any work',
            'Payment schedule stated in the quote',
          ],
          fit: 'projects with a clear need: application, business software, MVP.',
        },
        {
          id: 'time-and-materials',
          title: 'Time and materials',
          text: 'You book development time, billed per hour or per day. The scope can change freely.',
          points: [
            'From US$8 per hour, exact rate stated in the quote',
            'Time tracking shared with you',
            'Volume adjusted to your needs',
          ],
          fit: 'team augmentation, products in progress, evolving needs.',
        },
        {
          id: 'maintenance',
          title: 'Monthly maintenance',
          text: 'A monthly amount to maintain and improve an application in production.',
          points: [
            'Security and dependency updates',
            'Fixes and small improvements',
            'Monthly volume agreed together',
          ],
          fit: 'applications already in production.',
        },
        {
          id: 'white-label',
          title: 'White label',
          text: 'Terms designed for agencies that include our development work in their own offers.',
          points: [
            'Fixed price per project or time and materials',
            'Invoiced to your agency only',
            'Complete discretion towards your clients',
          ],
          fit: 'web, digital and marketing agencies.',
        },
      ],
      factorsTitle: 'What drives the price',
      factors: [
        { title: 'Scope', text: 'Number of screens, features and user types.' },
        { title: 'Platforms', text: 'Web, iOS, Android, or several at once.' },
        { title: 'Integrations', text: 'Connections to your existing tools, online payment, third-party APIs, AI.' },
        { title: 'Design', text: 'Mockups provided by you, or interface design by our team.' },
        { title: 'Requirements', text: 'Data volume, security, test coverage, expected availability.' },
        { title: 'Timeline', text: 'A tight schedule can require more developers working in parallel.' },
      ],
      stepsTitle: 'How to get a quote',
      steps: [
        'Describe your project through the contact form, ideally with a budget range.',
        'We discuss it in a first call, free and with no commitment.',
        'We send you a written estimate: scope, milestones, schedule and price.',
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Why no fixed price per type of project?',
          a: 'Our hourly rate starts at US$8, but the total cost depends on the time required. Two similar-looking applications can take very different effort depending on integrations, volumes and requirements. A flat price shown without knowing your project would be either misleading or padded just in case.',
        },
        {
          q: 'Is the first call free?',
          a: 'Yes, the first call is free and with no commitment. For a complex project, we may suggest a scoping phase before the final estimate; it is then priced upfront.',
        },
        {
          q: 'How does payment work?',
          a: 'The payment schedule (deposit, milestones, balance) is stated in every quote and agreed with you before any work starts.',
        },
      ],
      cta: 'Request a quote',
    },

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
      title: 'About TicTek, a developer team in Antananarivo, Madagascar',
      description:
        'TicTek is a team of developers based in Antananarivo, Madagascar, working internationally: mission, skills, how we work, quality approach and remote collaboration.',
      h1: 'About TicTek',
      lede:
        'TicTek is a team of developers based in Antananarivo, Madagascar, working remotely with clients internationally. We design, build and maintain software for companies looking for a reliable, flexible and cost-conscious technical partner.',
      sections: [
        {
          id: 'mission',
          title: 'Our mission',
          paragraphs: [
            'Make custom software development accessible to companies without a tech team, and provide reliable extra capacity to those who have one.',
          ],
        },
        {
          id: 'team',
          title: 'How we work',
          paragraphs: [
            'Every project has a named technical lead who is your contact from scoping to delivery.',
            'Work is organized in short iterations tracked in a shared ticketing tool. Every change goes through code review and automated tests before it ships.',
          ],
        },
        {
          id: 'quality',
          title: 'Our approach to quality',
          paragraphs: [
            'We treat quality as a daily discipline, not an end-of-project phase: typing, automated tests, continuous integration, security best practices and containerized environments.',
            'The goal is simple: software your team can keep evolving without having to rewrite it.',
          ],
        },
        {
          id: 'remote',
          title: 'Remote collaboration',
          paragraphs: [
            'From Madagascar, we work remotely with companies internationally, in English and French. Madagascar is on UTC+3, which gives a wide overlap with Europe; for other time zones, we agree on suitable meeting slots.',
            'We communicate by video call, chat and shared tracking tools, following your habits.',
          ],
        },
      ],
      teamTitle: 'The team',
      teamLede: 'The people who design and build your projects, and who you talk to directly.',
      skillsTitle: 'Technical skills',
      skills: [
        { name: 'Front end', items: ['TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js'] },
        { name: 'Back end', items: ['Java / Spring Boot', 'Node.js', 'C# / .NET', 'PHP'] },
        { name: 'Mobile', items: ['React Native', 'Expo'] },
        { name: 'Data', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'] },
        { name: 'DevOps', items: ['Docker', 'CI/CD', 'GitHub Actions', 'GitLab CI'] },
        { name: 'AI and automation', items: ['OpenAI API', 'Gemini', 'n8n'] },
        { name: 'Blockchain and Web3', items: ['Solidity', 'Hardhat', 'Ethers.js', 'Polygon'] },
      ],
    },

    contact: {
      title: 'Contact: tell us about your software project | TicTek',
      description:
        'Describe your web, mobile, SaaS, automation or AI integration project. TicTek replies by email to set up a first call.',
      h1: "Let's talk about your project",
      lede: 'Describe your need in a few lines. We will reply by email to set up a first call.',
      nextTitle: 'What happens next?',
      next: [
        'We read your request and reply by email, with any questions we have.',
        'We set up a first video call, with no commitment.',
        'If the project is a good fit, we propose a scoping phase and a written estimate.',
      ],
      directTitle: 'Email us directly',
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
            'The information you enter (name, email, project description or application) is only used to reply to you. It reaches us by email through the EmailJS service, then stays in our mailbox for as long as needed to follow up on your request.',
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
