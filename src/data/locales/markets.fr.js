// Textes français des pages marché (Market.jsx). Clés : data/markets.js.
// Mêmes clés pour chaque marché ; rester factuel : pas de bureau local, pas
// d'allemand ni d'autre langue que nous ne pratiquons pas, aucun client inventé.
const markets = {
  switzerland: {
    title: 'Externalisation du développement logiciel en Suisse | TicTek',
    description:
      'Externalisez votre développement logiciel depuis la Suisse avec TicTek : une équipe à Madagascar, à une ou deux heures de Genève ou Zurich, en français ou en anglais.',
    h1: 'Externalisation du développement logiciel pour les entreprises suisses',
    lede:
      'PME, startups et agences suisses confient à TicTek le développement et la maintenance de leurs logiciels, avec une équipe à distance basée à Madagascar : une à deux heures de décalage, en français ou en anglais, et des coûts de développement optimisés.',
    intro: {
      title: 'Une équipe à distance, aux horaires suisses',
      paragraphs: [
        'Le coût du développement et la pénurie de développeurs rendent le recrutement difficile pour de nombreuses entreprises suisses. TicTek propose une alternative : une équipe de développement à distance qui travaille pendant vos heures de bureau, avec la rigueur que vous attendez.',
        'Nous n’avons pas de bureau en Suisse. Nous travaillons entièrement à distance depuis Madagascar, avec des visioconférences, des outils partagés et un interlocuteur identifié pour votre projet.',
      ],
    },
    reasons: {
      title: 'Pourquoi les entreprises suisses travaillent avec TicTek',
      items: [
        {
          icon: 'clock',
          title: 'Presque la même journée de travail',
          text: 'Madagascar a une heure d’avance sur la Suisse en été, deux en hiver : vos équipes et les nôtres sont connectées en même temps.',
        },
        {
          icon: 'globe',
          title: 'En français ou en anglais',
          text: 'En français avec les entreprises romandes, en anglais avec les équipes alémaniques, tessinoises et internationales.',
        },
        {
          icon: 'coins',
          title: 'Des coûts de développement maîtrisés',
          text: 'Une alternative au recrutement et à la sous-traitance locale, avec des prix fixés par écrit avant le démarrage.',
        },
        {
          icon: 'shield',
          title: 'Confidentialité',
          text: 'NDA sur demande, accès limités aux personnes du projet, code dans votre propre dépôt.',
        },
      ],
    },
    cities: {
      title: 'Avec des entreprises dans toute la Suisse',
      lede: 'Du Léman à Zurich, tout se passe à distance : l’emplacement de vos bureaux ne change rien.',
      list: ['Genève', 'Lausanne', 'Zurich', 'Neuchâtel', 'Fribourg', 'Bâle', 'Berne', 'Lugano'],
      note: 'Et partout ailleurs en Suisse.',
    },
    time: {
      title: 'Votre heure, notre heure',
      lede: 'Madagascar reste à UTC+3 toute l’année.',
    },
    services: {
      title: 'Ce que les entreprises suisses nous confient',
      lede: 'Les services les plus demandés par les PME, startups et agences.',
      ids: ['development', 'dedicated', 'white-label', 'ai-automation', 'support'],
    },
    faqTitle: 'Suisse : questions fréquentes',
    faq: [
      {
        q: 'Avez-vous un bureau en Suisse ?',
        a: 'Non. TicTek est basée à Antananarivo, à Madagascar, et travaille entièrement à distance avec ses clients en Suisse et ailleurs : visioconférences, outils partagés et un interlocuteur identifié pour votre projet.',
      },
      {
        q: 'Pouvez-vous travailler avec des équipes alémaniques ?',
        a: 'Nous travaillons en français et en anglais, pas en allemand. De nombreuses équipes de Zurich, Bâle et d’autres régions alémaniques travaillent en anglais sur les projets techniques : la collaboration se fait alors sans difficulté.',
      },
      {
        q: 'Quel est le décalage horaire avec la Suisse ?',
        a: 'Madagascar est à UTC+3 toute l’année : une heure d’avance sur la Suisse en été, deux heures en hiver. Vos heures de bureau et les nôtres se recouvrent presque entièrement.',
      },
      {
        q: 'Comment prenez-vous en compte la protection des données en Suisse ?',
        a: 'Indiquez-nous vos exigences, par exemple au titre de la loi fédérale sur la protection des données (LPD) : nous convenons avec vous des accès, du traitement des données et de l’hébergement des environnements, et nous l’inscrivons au contrat.',
      },
    ],
  },

  canada: {
    title: 'Externalisation du développement logiciel au Canada | TicTek',
    description:
      'Externalisez votre développement logiciel depuis le Québec ou le Canada avec TicTek : une équipe à Madagascar qui travaille en français ou en anglais, selon vos horaires.',
    h1: 'Externalisation du développement logiciel pour les entreprises du Québec et du Canada',
    lede:
      'PME, startups et agences du Québec et du Canada confient à TicTek le développement et la maintenance de leurs logiciels, avec une équipe à distance basée à Madagascar, en français ou en anglais, et des coûts de développement optimisés.',
    intro: {
      title: 'Une équipe bilingue pour un marché bilingue',
      paragraphs: [
        'Que votre entreprise travaille en français, en anglais ou dans les deux langues, TicTek travaille dans la vôtre : appels, documentation et interfaces.',
        'Nous n’avons pas de bureau au Canada. Nous travaillons entièrement à distance depuis Madagascar, avec des plages d’appel convenues selon vos heures de travail.',
      ],
    },
    reasons: {
      title: 'Pourquoi les entreprises canadiennes travaillent avec TicTek',
      items: [
        {
          icon: 'globe',
          title: 'Français et anglais',
          text: 'Une seule équipe pour vos projets francophones et anglophones, y compris les applications bilingues.',
        },
        {
          icon: 'clock',
          title: 'Le travail avance pendant votre nuit',
          text: 'Madagascar a sept à huit heures d’avance sur l’Est du Canada : nous avançons sur vos tâches pendant votre nuit et vous faisons le point au début de votre journée.',
        },
        {
          icon: 'coins',
          title: 'Des coûts de développement maîtrisés',
          text: 'Une alternative à l’embauche locale, avec des prix fixés par écrit avant le démarrage.',
        },
        {
          icon: 'shield',
          title: 'Confidentialité',
          text: 'NDA sur demande, accès limités aux personnes du projet, code dans votre propre dépôt.',
        },
      ],
    },
    cities: {
      title: 'Avec des entreprises partout au Canada',
      lede: 'Du Québec à la Colombie-Britannique, tout se passe à distance.',
      list: ['Montréal', 'Québec', 'Toronto', 'Ottawa', 'Vancouver', 'Calgary', 'Edmonton', 'Winnipeg'],
      note: 'Et partout ailleurs au Canada.',
    },
    time: {
      title: 'Votre heure, notre heure',
      lede: 'Madagascar reste à UTC+3 toute l’année, sans heure avancée.',
    },
    services: {
      title: 'Ce que les entreprises canadiennes nous confient',
      lede: 'Les services les plus demandés par les PME, startups et agences.',
      ids: ['development', 'dedicated', 'outsourcing', 'white-label', 'ai-automation'],
    },
    faqTitle: 'Canada : questions fréquentes',
    faq: [
      {
        q: 'Avez-vous un bureau au Canada ?',
        a: 'Non. TicTek est basée à Antananarivo, à Madagascar, et travaille entièrement à distance avec ses clients au Canada et ailleurs.',
      },
      {
        q: 'Comment gérez-vous le décalage horaire ?',
        a: 'Madagascar a sept à huit heures d’avance sur l’Est du Canada (Montréal, Toronto, Ottawa) et dix à onze heures sur Vancouver. Nous convenons d’une plage d’appel régulière en début de journée chez vous ; le reste du travail avance en asynchrone, et vous trouvez le point d’avancement à votre arrivée.',
      },
      {
        q: 'Pouvez-vous travailler entièrement en français avec une entreprise québécoise ?',
        a: 'Oui. Appels, échanges écrits, courriels, documentation et interfaces peuvent être entièrement en français.',
      },
      {
        q: 'Développez-vous des applications bilingues ?',
        a: 'Oui. Nous concevons des interfaces en français et en anglais, avec un contenu géré séparément pour chaque langue, comme sur ce site.',
      },
    ],
  },
};

export default markets;
