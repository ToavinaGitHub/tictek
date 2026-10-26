import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  CAREERS_INITIAL,
  CONTACT_INITIAL,
  MIN_FILL_TIME_MS,
  isLikelySpam,
  validateCareers,
  validateContact,
} from '../src/forms/validate.js';

const contact = {
  ...CONTACT_INITIAL,
  name: 'Jeanne Martin',
  email: 'jeanne@entreprise.ch',
  need: 'web',
  message: 'Nous voulons remplacer nos tableurs de suivi de commandes.',
};

const application = {
  ...CAREERS_INITIAL,
  name: 'Rija Rakoto',
  email: 'rija@example.com',
  profile: 'fullstack',
  level: 'confirmed',
  cvUrl: 'https://drive.google.com/file/d/abc/view',
  message: 'Développeur full-stack, 4 ans sur React et Spring Boot.',
};

test('contact: a complete form is valid, optional fields can stay empty', () => {
  assert.deepEqual(validateContact(contact), {});
  assert.deepEqual(validateContact({ ...contact, company: '', budget: '', timeline: '' }), {});
});

test('contact: required fields are reported', () => {
  assert.deepEqual(validateContact(CONTACT_INITIAL), {
    name: 'nameRequired',
    email: 'emailRequired',
    need: 'needRequired',
    message: 'messageRequired',
  });
});

test('contact: whitespace-only answers count as empty', () => {
  const errors = validateContact({ ...contact, name: '   ', message: '\n\n' });
  assert.equal(errors.name, 'nameRequired');
  assert.equal(errors.message, 'messageRequired');
});

test('contact: email format is checked', () => {
  for (const email of ['jeanne', 'jeanne@', 'jeanne@entreprise', 'a b@c.com']) {
    assert.equal(validateContact({ ...contact, email }).email, 'emailInvalid', email);
  }
  assert.equal(validateContact({ ...contact, email: ' jeanne@entreprise.co.uk ' }).email, undefined);
});

test('contact: unknown select values, short and oversized text are rejected', () => {
  assert.equal(validateContact({ ...contact, need: 'hacking' }).need, 'needRequired');
  assert.equal(validateContact({ ...contact, message: 'Un site' }).message, 'messageTooShort');
  assert.equal(validateContact({ ...contact, company: 'x'.repeat(121) }).company, 'tooLong');
  assert.equal(validateContact({ ...contact, message: 'x'.repeat(5001) }).message, 'tooLong');
});

test('careers: a complete application is valid', () => {
  assert.deepEqual(validateCareers(application), {});
  assert.deepEqual(validateCareers({ ...application, phone: '+261 34 00 000 00', links: 'https://github.com/rija https://linkedin.com/in/rija' }), {});
});

test('careers: required fields are reported', () => {
  assert.deepEqual(validateCareers(CAREERS_INITIAL), {
    name: 'nameRequired',
    email: 'emailRequired',
    profile: 'profileRequired',
    level: 'levelRequired',
    cvUrl: 'cvUrlRequired',
    message: 'motivationRequired',
  });
});

test('careers: CV and profile links must be http(s) URLs', () => {
  for (const cvUrl of ['mon cv', 'javascript:alert(1)', 'ftp://files.example.com/cv.pdf', 'https://localhost']) {
    assert.equal(validateCareers({ ...application, cvUrl }).cvUrl, 'urlInvalid', cvUrl);
  }
  assert.equal(validateCareers({ ...application, links: 'https://github.com/rija pas-un-lien' }).links, 'urlInvalid');
});

test('honeypot and instant submissions are flagged as spam', () => {
  assert.equal(isLikelySpam(contact, MIN_FILL_TIME_MS + 1), false);
  assert.equal(isLikelySpam({ ...contact, website: 'http://spam' }, 60_000), true);
  assert.equal(isLikelySpam(application, 500), true);
});
