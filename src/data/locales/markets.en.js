// English copy of the market pages (Market.jsx). Keys follow data/markets.js.
// Every market uses the same keys; keep claims factual: no local office,
// no German or other languages we don't work in, no invented clients.
const markets = {
  switzerland: {
    title: 'Software Development Outsourcing for Swiss Companies | TicTek',
    description:
      'Outsource software development from Switzerland to TicTek: a remote team in Madagascar, one to two hours from Geneva or Zurich, working in English or French.',
    h1: 'Software development outsourcing for companies in Switzerland',
    lede:
      'Swiss SMEs, startups and agencies work with TicTek to build and maintain their software with a remote team based in Madagascar: one to two hours’ time difference, English or French, and optimized development costs.',
    intro: {
      title: 'A remote team on Swiss working hours',
      paragraphs: [
        'Development costs and the shortage of developers make in-house hiring difficult for many Swiss companies. TicTek offers an alternative: a remote development team that works during your business hours, with the rigor you expect.',
        'We don’t have an office in Switzerland. We work fully remotely from Madagascar, with video calls, shared tools and a named contact for your project.',
      ],
    },
    reasons: {
      title: 'Why Swiss companies work with TicTek',
      items: [
        {
          icon: 'clock',
          title: 'Almost the same working day',
          text: 'Madagascar is one hour ahead of Switzerland in summer and two in winter: your team and ours are online at the same time.',
        },
        {
          icon: 'globe',
          title: 'English or French',
          text: 'French with companies in French-speaking Switzerland, English with German-speaking, Italian-speaking and international teams.',
        },
        {
          icon: 'coins',
          title: 'Controlled development costs',
          text: 'An alternative to local hiring and local subcontracting, with prices set in writing before work starts.',
        },
        {
          icon: 'shield',
          title: 'Confidentiality',
          text: 'NDA on request, access limited to the people on your project, code in your own repository.',
        },
      ],
    },
    cities: {
      title: 'Working with companies across Switzerland',
      lede: 'From Lake Geneva to Zurich, everything happens remotely: the location of your office makes no difference.',
      list: ['Geneva', 'Lausanne', 'Zurich', 'Neuchâtel', 'Fribourg', 'Basel', 'Bern', 'Lugano'],
      note: 'And everywhere else in Switzerland.',
    },
    time: {
      title: 'Your time, our time',
      lede: 'Madagascar stays on UTC+3 all year round.',
    },
    services: {
      title: 'What Swiss companies outsource to us',
      lede: 'The services most often requested by SMEs, startups and agencies.',
      ids: ['development', 'dedicated', 'white-label', 'ai-automation', 'support'],
    },
    faqTitle: 'Switzerland: frequently asked questions',
    faq: [
      {
        q: 'Do you have an office in Switzerland?',
        a: 'No. TicTek is based in Antananarivo, Madagascar, and works fully remotely with its clients in Switzerland and elsewhere: video calls, shared tools and a named contact for your project.',
      },
      {
        q: 'Can you work with German-speaking teams?',
        a: 'We work in English and French, not in German. Many teams in Zurich, Basel and other German-speaking regions work in English on technical projects; in that case, collaboration is seamless.',
      },
      {
        q: 'What is the time difference with Switzerland?',
        a: 'Madagascar is on UTC+3 all year round: one hour ahead of Switzerland in summer, two hours in winter. Your business hours and ours overlap almost entirely.',
      },
      {
        q: 'How do you handle Swiss data protection requirements?',
        a: 'Tell us your requirements, for example under the Federal Act on Data Protection (FADP): we agree with you on access, data handling and where environments are hosted, and write it into the contract.',
      },
    ],
  },

  canada: {
    title: 'Software Development Outsourcing for Canadian Companies | TicTek',
    description:
      'Outsource software development from Canada to TicTek: a remote development team in Madagascar working in English or French, with call slots set around your hours.',
    h1: 'Software development outsourcing for companies in Canada',
    lede:
      'Canadian SMEs, startups and agencies work with TicTek to build and maintain their software with a remote team based in Madagascar, in English or French, at optimized development costs.',
    intro: {
      title: 'A bilingual team for a bilingual market',
      paragraphs: [
        'Whether your company works in English, in French or in both, TicTek works in your language: calls, documentation and user interfaces.',
        'We don’t have an office in Canada. We work fully remotely from Madagascar, with call slots agreed around your working hours.',
      ],
    },
    reasons: {
      title: 'Why Canadian companies work with TicTek',
      items: [
        {
          icon: 'globe',
          title: 'English and French',
          text: 'One team for your English-speaking and French-speaking projects, including bilingual applications.',
        },
        {
          icon: 'clock',
          title: 'Work that moves while you sleep',
          text: 'Madagascar is seven to eight hours ahead of Eastern Canada: we work on your tasks during your night and share progress as your day starts.',
        },
        {
          icon: 'coins',
          title: 'Controlled development costs',
          text: 'An alternative to local hiring, with prices set in writing before work starts.',
        },
        {
          icon: 'shield',
          title: 'Confidentiality',
          text: 'NDA on request, access limited to the people on your project, code in your own repository.',
        },
      ],
    },
    cities: {
      title: 'Working with companies across Canada',
      lede: 'From Quebec to British Columbia, everything happens remotely.',
      list: ['Montreal', 'Quebec City', 'Toronto', 'Ottawa', 'Vancouver', 'Calgary', 'Edmonton', 'Winnipeg'],
      note: 'And everywhere else in Canada.',
    },
    time: {
      title: 'Your time, our time',
      lede: 'Madagascar stays on UTC+3 all year round, with no daylight saving time.',
    },
    services: {
      title: 'What Canadian companies outsource to us',
      lede: 'The services most often requested by SMEs, startups and agencies.',
      ids: ['development', 'dedicated', 'outsourcing', 'white-label', 'ai-automation'],
    },
    faqTitle: 'Canada: frequently asked questions',
    faq: [
      {
        q: 'Do you have an office in Canada?',
        a: 'No. TicTek is based in Antananarivo, Madagascar, and works fully remotely with its clients in Canada and elsewhere.',
      },
      {
        q: 'How do you manage the time difference?',
        a: 'Madagascar is seven to eight hours ahead of Eastern Canada (Montreal, Toronto, Ottawa) and ten to eleven hours ahead of Vancouver. We agree on a regular call window in your morning; the rest of the work moves forward asynchronously, and you find progress updates when your day starts.',
      },
      {
        q: 'Can you work entirely in French with a Quebec company?',
        a: 'Yes. Calls, written exchanges, documentation and user interfaces can all be in French.',
      },
      {
        q: 'Can you build bilingual applications?',
        a: 'Yes. We build interfaces in English and French, with content managed separately for each language, as on this website.',
      },
    ],
  },
};

export default markets;
