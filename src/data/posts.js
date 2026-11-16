// Blog posts, newest first. Listed on /blog/ (FR) and /en/blog/ (EN); each
// one also gets its own page at /blog/<slug>/ and /en/blog/<slug>/.
//
// The blog page, its nav link and its sitemap entries only appear once this
// list has at least one entry. Images live in public/img/blog/.
//
// Shape of an entry (text fields take { fr, en }):
//
// {
//   slug: 'mon-article',                       // URL, stable once published
//   date: '2026-11-11',                        // publication date, YYYY-MM-DD
//   title: { fr: '…', en: '…' },
//   excerpt: { fr: 'Une ou deux phrases.', en: '…' },   // list + meta description
//   body: { fr: ['Paragraphe…', '…'], en: ['…'] },      // one string per paragraph
//   image: { src: '/img/blog/….jpg', small: '/img/blog/…-960.jpg', width: 1600, height: 900, alt: { fr: '…', en: '…' } },
// }
export const posts = [
  {
    slug: 'travailler-depuis-madagascar',
    date: '2026-11-11',
    title: {
      fr: 'Une journée de travail face à l’océan, à Madagascar',
      en: 'A workday by the ocean in Madagascar',
    },
    excerpt: {
      fr: 'Entre les plages, le soleil et la beauté de Madagascar, on a de quoi trouver l’inspiration. Mais derrière ce joli décor, les projets continuent chez TicTek.',
      en: 'Between the beaches, the sun and the beauty of Madagascar, there is plenty of inspiration. But behind the scenery, the projects keep moving at TicTek.',
    },
    body: {
      fr: [
        'Difficile de ne pas apprécier le cadre de travail aujourd’hui. 🌴 Entre les plages, le soleil et la beauté de Madagascar, on a de quoi trouver l’inspiration !',
        'Mais derrière ce joli décor, les projets continuent chez TicTek. Nous accompagnons les entreprises dans le développement de leurs applications web et mobiles, de logiciels sur mesure et dans l’automatisation de leurs processus grâce à l’IA.',
        'Basés à Madagascar, nous mettons notre expertise au service de projets qui dépassent les frontières.',
        'Vous avez un projet ou cherchez une équipe technique pour vous accompagner ? Discutons-en !',
      ],
      en: [
        'Hard not to enjoy the workplace today. 🌴 Between the beaches, the sun and the beauty of Madagascar, there is plenty of inspiration!',
        'But behind the scenery, the projects keep moving at TicTek. We help companies build their web and mobile applications and custom software, and automate their processes with AI.',
        'Based in Madagascar, we put our expertise to work on projects that reach well beyond our borders.',
        'Have a project, or looking for a tech team to support you? Let’s talk!',
      ],
    },
    image: {
      src: '/img/blog/plage-madagascar.jpg',
      small: '/img/blog/plage-madagascar-960.jpg',
      width: 1600,
      height: 900,
      alt: {
        fr: 'Le site TicTek ouvert sur une tablette, devant une plage de Madagascar bordée de palmiers',
        en: 'The TicTek website open on a tablet, in front of a palm-lined beach in Madagascar',
      },
    },
  },
];
