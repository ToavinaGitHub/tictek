// Language-independent data. All translatable copy lives in ./locales/{fr,en}.js.
import fr from './locales/fr';
import en from './locales/en';

export const translations = { fr, en };
export const languages = ['fr', 'en'];

export const contactInfo = {
  phone: '+261 38 47 110 37',
  email: 'andiejessica2020@gmail.com',
  address: 'Antananarivo, Madagascar',
};

// No longer used to build a mailto: link: QuoteRequest now sends through
// the portfolio's EmailJS template (see .env), whose "To Email" is fixed on
// the EmailJS dashboard. Kept as a reminder of the intended recipient in
// case that template's recipient needs to be updated or a dedicated
// template is created for tictek later.
export const quoteEmail = 'rtoavina.andriantahiry@gmail.com';

// Section anchors, in nav order. Labels are in locales/*.nav.links.
export const sectionIds = ['hero', 'services', 'methodologie', 'stack', 'qa', 'etudes-de-cas', 'tarifs', 'devis', 'contact'];

// Quote form select values. Labels are in locales/*.quote.projectTypes.
export const projectTypeIds = ['web', 'mobile', 'qa', 'cloud', 'automation', 'other'];

export const heroPanels = [
  { text: 'Build #842: Passed ✓', className: 'p1', style: { top: '6%', left: '2%' } },
  { text: 'Test Coverage 95%+', className: 'p2', style: { top: '38%', right: 0 } },
  { text: 'Deploy → Production ✓', className: 'p3', style: { bottom: '8%', left: '8%' } },
];

// Tech logos (Devicon, pinned version), keyed by the names used in
// locales/*.stack.categories. Names missing here show as text only.
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';
const icon = (path) => `${DEVICON}/${path}.svg`;

export const techIcons = {
  Java: icon('java/java-original'),
  'Spring Boot': icon('spring/spring-original'),
  'Node.js': icon('nodejs/nodejs-original'),
  Express: icon('express/express-original'),
  'C# / .NET': icon('csharp/csharp-original'),
  PHP: icon('php/php-original'),
  TypeScript: icon('typescript/typescript-original'),
  JavaScript: icon('javascript/javascript-original'),
  React: icon('react/react-original'),
  'Next.js': icon('nextjs/nextjs-original'),
  Angular: icon('angular/angular-original'),
  'Vue.js': icon('vuejs/vuejs-original'),
  'Tailwind CSS': icon('tailwindcss/tailwindcss-original'),
  'React Native': icon('react/react-original'),
  PostgreSQL: icon('postgresql/postgresql-original'),
  MySQL: icon('mysql/mysql-original'),
  'SQL Server': icon('microsoftsqlserver/microsoftsqlserver-original'),
  MongoDB: icon('mongodb/mongodb-original'),
  Redis: icon('redis/redis-original'),
  Elasticsearch: icon('elasticsearch/elasticsearch-original'),
  Docker: icon('docker/docker-original'),
  RabbitMQ: icon('rabbitmq/rabbitmq-original'),
  GitHub: icon('github/github-original'),
  GitLab: icon('gitlab/gitlab-original'),
  Solidity: icon('solidity/solidity-original'),
  Hardhat: icon('hardhat/hardhat-original'),
  Polygon: icon('polygon/polygon-original'),
  Postman: icon('postman/postman-original'),
  Notion: icon('notion/notion-original'),
  Trello: icon('trello/trello-plain'),
};

// Black logos, inverted on the dark theme.
export const monoTechs = new Set(['Express', 'Next.js', 'GitHub', 'Solidity']);
