// Pure form logic, shared by the contact form and tests/contact.test.js.

export const needIds = ['web', 'mobile', 'saas-api', 'automation', 'ai', 'maintenance', 'white-label', 'other'];
export const timelineIds = ['', 'asap', 'quarter', 'later'];

export const INITIAL_VALUES = {
  name: '',
  email: '',
  company: '',
  need: '',
  message: '',
  budget: '',
  timeline: '',
  website: '', // honeypot: hidden from people, filled by naive bots
};

export const MAX_LENGTH = { name: 100, email: 254, company: 120, message: 5000, budget: 100 };
export const MIN_MESSAGE_LENGTH = 20;

// Submissions faster than this after the form appeared are treated as bots.
export const MIN_FILL_TIME_MS = 3000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns { field: errorKey } with keys from locales/*.form.errors; empty when valid. */
export function validate(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) errors.name = 'nameRequired';
  if (!email) errors.email = 'emailRequired';
  else if (!EMAIL_RE.test(email)) errors.email = 'emailInvalid';
  if (!needIds.includes(values.need)) errors.need = 'needRequired';
  if (!message) errors.message = 'messageRequired';
  else if (message.length < MIN_MESSAGE_LENGTH) errors.message = 'messageTooShort';

  for (const [field, max] of Object.entries(MAX_LENGTH)) {
    if (!errors[field] && values[field].trim().length > max) errors[field] = 'tooLong';
  }

  return errors;
}

export function isLikelySpam(values, elapsedMs) {
  return values.website !== '' || elapsedMs < MIN_FILL_TIME_MS;
}
