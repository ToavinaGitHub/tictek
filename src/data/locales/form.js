// Contact form copy, kept apart so the form island only ships these strings.
const forms = {
  fr: {
    // Keys follow site.js collaborationIds.
    collaborations: {
      dedicated: 'Développeur dédié',
      team: 'Équipe de développement externalisée',
      'white-label': 'Développement en marque blanche',
      custom: 'Développement logiciel sur mesure',
      'ai-automation': 'IA et automatisation',
      maintenance: 'Maintenance et support',
      other: 'Autre / je ne sais pas encore',
    },
    languages: {
      fr: 'Français',
      en: 'Anglais',
    },
    // Suggestions for the country field (free text is accepted).
    countries: ['Suisse', 'Canada', 'France', 'Belgique', 'Luxembourg', 'Royaume-Uni', 'États-Unis', 'Australie', 'Maurice', 'Émirats arabes unis', 'Madagascar'],
    timelines: {
      '': 'Non précisé',
      asap: 'Dès que possible',
      quarter: "Dans les 3 prochains mois",
      later: 'Plus tard',
    },
    fields: {
      name: 'Nom complet',
      email: 'E-mail professionnel',
      company: 'Entreprise',
      country: 'Pays',
      companyWebsite: 'Site web de l’entreprise',
      language: 'Langue préférée',
      collaboration: 'Type de collaboration',
      message: 'Description du projet',
      budget: 'Budget estimé',
      timeline: 'Délai souhaité',
    },
    optional: 'facultatif',
    hints: {
      message: 'Contexte, objectifs, utilisateurs, outils existants… Quelques lignes suffisent.',
      budget: 'Une fourchette, dans la devise de votre choix.',
      companyWebsite: 'Par exemple : www.entreprise.com',
    },
    choose: 'Choisissez une option',
    errors: {
      summary: 'Le formulaire contient des erreurs :',
      nameRequired: 'Indiquez votre nom complet.',
      emailRequired: 'Indiquez votre adresse e-mail.',
      emailInvalid: 'Cette adresse e-mail ne semble pas valide (exemple : nom@entreprise.com).',
      companyRequired: 'Indiquez le nom de votre entreprise.',
      countryRequired: 'Indiquez votre pays.',
      languageRequired: 'Choisissez une langue.',
      collaborationRequired: 'Choisissez le type de collaboration le plus proche.',
      websiteInvalid: 'Cette adresse ne semble pas valide (exemple : www.entreprise.com).',
      messageRequired: 'Décrivez votre projet.',
      messageTooShort: 'Ajoutez quelques détails (au moins 20 caractères).',
      tooLong: 'Ce champ est trop long.',
      profileRequired: 'Choisissez le profil le plus proche du vôtre.',
      levelRequired: 'Indiquez votre niveau d’expérience.',
      cvUrlRequired: 'Ajoutez le lien vers votre CV.',
      urlInvalid: 'Ce lien ne semble pas valide (exemple : https://…).',
      motivationRequired: 'Écrivez quelques mots sur votre candidature.',
    },
    submit: 'Envoyer ma demande',
    quoteNote: 'Réponse sous un jour ouvré, en français ou en anglais.',
    sending: 'Envoi en cours…',
    privacy:
      "Vos informations servent uniquement à répondre à votre demande. Elles nous sont transmises par e-mail via le service EmailJS et ne sont ni revendues ni utilisées pour de la prospection.",
    successTitle: 'Merci, votre demande a bien été envoyée.',
    successText: 'Nous revenons vers vous par e-mail sous un jour ouvré. Pensez à vérifier vos courriers indésirables.',
    errorText: "L'envoi n'a pas abouti. Réessayez dans un instant, ou écrivez-nous directement à",
    confirmationSent: 'Un e-mail de confirmation vient de vous être envoyé.',

    careers: {
      profiles: {
        frontend: 'Développement front-end',
        backend: 'Développement back-end',
        fullstack: 'Développement full-stack',
        mobile: 'Développement mobile',
        qa: 'QA / tests',
        devops: 'DevOps / cloud',
        web3: 'Blockchain / Web3',
        other: 'Autre profil technique',
      },
      levels: {
        student: 'Étudiant·e / stage',
        junior: 'Junior (moins de 2 ans)',
        confirmed: 'Confirmé·e (2 à 5 ans)',
        senior: 'Senior (plus de 5 ans)',
      },
      fields: {
        name: 'Nom complet',
        email: 'Adresse e-mail',
        phone: 'Téléphone',
        profile: 'Profil',
        level: 'Expérience',
        cvUrl: 'Lien vers votre CV',
        links: 'LinkedIn, GitHub ou portfolio',
        message: 'Votre message',
      },
      hints: {
        cvUrl: 'Google Drive, Dropbox, site personnel… Vérifiez que le lien s’ouvre sans connexion.',
        links: 'Un ou plusieurs liens, séparés par des espaces.',
        message: 'Votre parcours, ce qui vous intéresse chez nous, vos disponibilités.',
      },
      submit: 'Envoyer ma candidature',
      privacy:
        'Vos informations servent uniquement à étudier votre candidature. Elles nous sont transmises par e-mail via le service EmailJS et ne sont jamais partagées.',
      successTitle: 'Merci, votre candidature a bien été envoyée.',
      successText: 'Nous étudions votre profil et revenons vers vous s’il correspond à un besoin.',
    },

    // Automatic confirmation emails sent to the visitor (see src/forms/email.js).
    // {email} is replaced by the TicTek contact address.
    confirmation: {
      contact: {
        subject: 'TicTek : nous avons bien reçu votre demande',
        message:
          'Bonjour,\n\nMerci pour votre message. Nous avons bien reçu votre demande de projet et nous revenons vers vous par e-mail pour convenir d’un premier échange.\n\nPour compléter votre demande, écrivez-nous à {email}.\n\nL’équipe TicTek\n\nCet e-mail a été envoyé automatiquement.',
      },
      careers: {
        subject: 'TicTek : nous avons bien reçu votre candidature',
        message:
          'Bonjour,\n\nMerci pour votre candidature spontanée. Nous l’avons bien reçue et nous l’étudierons avec attention. Si votre profil correspond à un besoin actuel ou à venir, nous vous recontacterons.\n\nPour toute question, écrivez-nous à {email}.\n\nL’équipe TicTek\n\nCet e-mail a été envoyé automatiquement.',
      },
    },
  },

  en: {
    collaborations: {
      dedicated: 'Dedicated Developer',
      team: 'Outsourced Development Team',
      'white-label': 'White-label Development',
      custom: 'Custom Software Development',
      'ai-automation': 'AI & Business Automation',
      maintenance: 'Maintenance & Support',
      other: 'Other / not sure yet',
    },
    languages: {
      fr: 'French',
      en: 'English',
    },
    countries: ['Switzerland', 'Canada', 'France', 'Belgium', 'Luxembourg', 'United Kingdom', 'United States', 'Australia', 'Mauritius', 'United Arab Emirates', 'Madagascar'],
    timelines: {
      '': 'Not specified',
      asap: 'As soon as possible',
      quarter: 'Within the next 3 months',
      later: 'Later',
    },
    fields: {
      name: 'Full Name',
      email: 'Professional Email',
      company: 'Company',
      country: 'Country',
      companyWebsite: 'Company Website',
      language: 'Preferred Language',
      collaboration: 'Type of Collaboration',
      message: 'Project Description',
      budget: 'Estimated Budget',
      timeline: 'Expected Timeline',
    },
    optional: 'optional',
    hints: {
      message: 'Context, goals, users, existing tools… A few lines are enough.',
      budget: 'A range, in any currency.',
      companyWebsite: 'For example: www.company.com',
    },
    choose: 'Choose an option',
    errors: {
      summary: 'The form has errors:',
      nameRequired: 'Enter your full name.',
      emailRequired: 'Enter your email address.',
      emailInvalid: 'This email address doesn’t look valid (example: name@company.com).',
      companyRequired: 'Enter your company name.',
      countryRequired: 'Enter your country.',
      languageRequired: 'Choose a language.',
      collaborationRequired: 'Choose the closest type of collaboration.',
      websiteInvalid: 'This address doesn’t look valid (example: www.company.com).',
      messageRequired: 'Describe your project.',
      messageTooShort: 'Add a few more details (at least 20 characters).',
      tooLong: 'This field is too long.',
      profileRequired: 'Choose the profile closest to yours.',
      levelRequired: 'Select your experience level.',
      cvUrlRequired: 'Add the link to your CV.',
      urlInvalid: 'This link doesn’t look valid (example: https://…).',
      motivationRequired: 'Write a few words about your application.',
    },
    submit: 'Send my request',
    quoteNote: 'We reply within one business day, in English or French.',
    sending: 'Sending…',
    privacy:
      'Your details are only used to reply to your request. They reach us by email through the EmailJS service and are never sold or used for marketing.',
    successTitle: 'Thank you, your request has been sent.',
    successText: 'We will get back to you by email within one business day. Please check your spam folder too.',
    errorText: 'Sending failed. Please try again in a moment, or email us directly at',
    confirmationSent: 'A confirmation email has just been sent to you.',

    careers: {
      profiles: {
        frontend: 'Front-end development',
        backend: 'Back-end development',
        fullstack: 'Full-stack development',
        mobile: 'Mobile development',
        qa: 'QA / testing',
        devops: 'DevOps / cloud',
        web3: 'Blockchain / Web3',
        other: 'Other technical profile',
      },
      levels: {
        student: 'Student / internship',
        junior: 'Junior (under 2 years)',
        confirmed: 'Mid-level (2 to 5 years)',
        senior: 'Senior (over 5 years)',
      },
      fields: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone',
        profile: 'Profile',
        level: 'Experience',
        cvUrl: 'Link to your CV',
        links: 'LinkedIn, GitHub or portfolio',
        message: 'Your message',
      },
      hints: {
        cvUrl: 'Google Drive, Dropbox, personal website… Make sure the link opens without signing in.',
        links: 'One or more links, separated by spaces.',
        message: 'Your background, what interests you about us, your availability.',
      },
      submit: 'Send my application',
      privacy:
        'Your details are only used to review your application. They reach us by email through the EmailJS service and are never shared.',
      successTitle: 'Thank you, your application has been sent.',
      successText: 'We will review your profile and get back to you if it matches a need.',
    },

    confirmation: {
      contact: {
        subject: 'TicTek: we have received your request',
        message:
          'Hello,\n\nThank you for your message. We have received your project request and will reply by email to set up a first call.\n\nTo add anything to your request, write to us at {email}.\n\nThe TicTek team\n\nThis email was sent automatically.',
      },
      careers: {
        subject: 'TicTek: we have received your application',
        message:
          'Hello,\n\nThank you for your open application. We have received it and will review it carefully. If your profile matches a current or upcoming need, we will get back to you.\n\nFor any question, write to us at {email}.\n\nThe TicTek team\n\nThis email was sent automatically.',
      },
    },
  },
};

export default forms;
