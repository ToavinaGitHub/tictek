// Pure form logic, shared by the forms and tests/forms.test.js.
// Error values are keys of locales/form.js `errors`.

export const MIN_MESSAGE_LENGTH = 20;
// Submissions faster than this after the form appeared are treated as bots.
export const MIN_FILL_TIME_MS = 3000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const isEmail = (value) => EMAIL_RE.test(value);
function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return (url.protocol === 'https:' || url.protocol === 'http:') && url.hostname.includes('.');
  } catch {
    return false;
  }
}

function checkLengths(values, maxLength, errors) {
  for (const [field, max] of Object.entries(maxLength)) {
    if (!errors[field] && values[field].trim().length > max) errors[field] = 'tooLong';
  }
  return errors;
}

/** Honeypot filled, or submitted too fast for a person. */
export function isLikelySpam(values, elapsedMs) {
  return values.website !== '' || elapsedMs < MIN_FILL_TIME_MS;
}

/* ---------- Contact (project request) ---------- */

export const needIds = ['web', 'mobile', 'saas-api', 'automation', 'ai', 'web3', 'maintenance', 'white-label', 'other'];
export const timelineIds = ['', 'asap', 'quarter', 'later'];

export const CONTACT_INITIAL = {
  name: '',
  email: '',
  company: '',
  need: '',
  message: '',
  budget: '',
  timeline: '',
  website: '', // honeypot: hidden from people, filled by naive bots
};

export const CONTACT_MAX = { name: 100, email: 254, company: 120, message: 5000, budget: 100 };

export function validateContact(values) {
  const errors = {};
  const email = values.email.trim();
  const message = values.message.trim();

  if (!values.name.trim()) errors.name = 'nameRequired';
  if (!email) errors.email = 'emailRequired';
  else if (!isEmail(email)) errors.email = 'emailInvalid';
  if (!needIds.includes(values.need)) errors.need = 'needRequired';
  if (!message) errors.message = 'messageRequired';
  else if (message.length < MIN_MESSAGE_LENGTH) errors.message = 'messageTooShort';

  return checkLengths(values, CONTACT_MAX, errors);
}

/* ---------- Careers (open application) ---------- */

export const profileIds = ['frontend', 'backend', 'fullstack', 'mobile', 'qa', 'devops', 'web3', 'other'];
export const levelIds = ['student', 'junior', 'confirmed', 'senior'];

export const CAREERS_INITIAL = {
  name: '',
  email: '',
  phone: '',
  profile: '',
  level: '',
  cvUrl: '',
  links: '',
  message: '',
  website: '',
};

export const CAREERS_MAX = { name: 100, email: 254, phone: 30, cvUrl: 500, links: 500, message: 5000 };

export function validateCareers(values) {
  const errors = {};
  const email = values.email.trim();
  const cvUrl = values.cvUrl.trim();
  const message = values.message.trim();

  if (!values.name.trim()) errors.name = 'nameRequired';
  if (!email) errors.email = 'emailRequired';
  else if (!isEmail(email)) errors.email = 'emailInvalid';
  if (!profileIds.includes(values.profile)) errors.profile = 'profileRequired';
  if (!levelIds.includes(values.level)) errors.level = 'levelRequired';
  if (!cvUrl) errors.cvUrl = 'cvUrlRequired';
  else if (!isHttpUrl(cvUrl)) errors.cvUrl = 'urlInvalid';
  const links = values.links.trim().split(/\s+/).filter(Boolean);
  if (links.some((link) => !isHttpUrl(link))) errors.links = 'urlInvalid';
  if (!message) errors.message = 'motivationRequired';
  else if (message.length < MIN_MESSAGE_LENGTH) errors.message = 'messageTooShort';

  return checkLengths(values, CAREERS_MAX, errors);
}
