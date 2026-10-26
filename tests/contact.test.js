import { test } from 'node:test';
import assert from 'node:assert/strict';
import { INITIAL_VALUES, MIN_FILL_TIME_MS, isLikelySpam, validate } from '../src/contact/validate.js';

const valid = {
  ...INITIAL_VALUES,
  name: 'Jeanne Martin',
  email: 'jeanne@entreprise.ch',
  need: 'web',
  message: 'Nous voulons remplacer nos tableurs de suivi de commandes.',
};

test('a complete form is valid', () => {
  assert.deepEqual(validate(valid), {});
});

test('optional fields can stay empty', () => {
  assert.deepEqual(validate({ ...valid, company: '', budget: '', timeline: '' }), {});
});

test('required fields are reported', () => {
  assert.deepEqual(validate(INITIAL_VALUES), {
    name: 'nameRequired',
    email: 'emailRequired',
    need: 'needRequired',
    message: 'messageRequired',
  });
});

test('whitespace-only answers count as empty', () => {
  const errors = validate({ ...valid, name: '   ', message: '\n\n' });
  assert.equal(errors.name, 'nameRequired');
  assert.equal(errors.message, 'messageRequired');
});

test('email format is checked', () => {
  for (const email of ['jeanne', 'jeanne@', 'jeanne@entreprise', 'a b@c.com']) {
    assert.equal(validate({ ...valid, email }).email, 'emailInvalid', email);
  }
  assert.equal(validate({ ...valid, email: ' jeanne@entreprise.co.uk ' }).email, undefined);
});

test('unknown need values are rejected', () => {
  assert.equal(validate({ ...valid, need: 'hacking' }).need, 'needRequired');
});

test('short descriptions and oversized fields are rejected', () => {
  assert.equal(validate({ ...valid, message: 'Un site' }).message, 'messageTooShort');
  assert.equal(validate({ ...valid, company: 'x'.repeat(121) }).company, 'tooLong');
  assert.equal(validate({ ...valid, message: 'x'.repeat(5001) }).message, 'tooLong');
});

test('honeypot and instant submissions are flagged as spam', () => {
  assert.equal(isLikelySpam(valid, MIN_FILL_TIME_MS + 1), false);
  assert.equal(isLikelySpam({ ...valid, website: 'http://spam' }, 60_000), true);
  assert.equal(isLikelySpam(valid, 500), true);
});
