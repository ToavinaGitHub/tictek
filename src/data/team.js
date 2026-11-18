// Team members, shown on the home page and the About page (TeamCards.jsx).
//
// The sections only appear once this list has at least one entry. Text
// fields take { fr, en }. Optional: title, focus (tags), photo (in
// public/img/team/, cropped to 4:5, 480×600; without one, the card shows the
// initials) and linkedin.
//
// {
//   name: 'Prénom Nom',
//   role: { fr: 'Cofondatrice', en: 'Co-founder' },
//   title: { fr: 'Développeuse backend', en: 'Backend developer' },
//   focus: { fr: ['Backend', 'Automatisation'], en: ['Back end', 'Automation'] },
//   photo: '/img/team/prenom.jpg',
//   linkedin: 'https://www.linkedin.com/in/…',
// }
export const team = [
  {
    name: 'Toavina Razakarivony',
    role: { fr: 'Cofondateur', en: 'Co-founder' },
    title: { fr: 'Développeur', en: 'Developer' },
    founder: true,
    linkedin: 'https://www.linkedin.com/in/toavina-razakarivony/',
  },
  {
    name: 'Jessica Andie Andrianarivelo',
    role: { fr: 'Cofondatrice', en: 'Co-founder' },
    title: { fr: 'Développeuse', en: 'Developer' },
    founder: true,
    linkedin: 'https://www.linkedin.com/in/jessica-andie-andrianarivelo-2449482ba/',
  },
  {
    name: 'Haja Herilalaina',
    role: { fr: 'Responsable commercial', en: 'Sales manager' },
    linkedin: 'https://www.linkedin.com/in/haja-herilalaina-579a73367/',
  },
];
