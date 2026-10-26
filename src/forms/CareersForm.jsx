import forms from '../data/locales/form';
import { CAREERS_INITIAL, CAREERS_MAX, levelIds, profileIds, validateCareers } from './validate';
import { submitForm } from './email';
import { useForm } from './useForm';
import { ErrorSummary, Field, FormFooter, FormSuccess, Honeypot } from './FormParts';

const ERROR_ORDER = ['name', 'email', 'phone', 'profile', 'level', 'cvUrl', 'links', 'message'];

/** Open application form. Rendered at build time, hydrated by src/client/forms.jsx. */
export default function CareersForm({ lang }) {
  const t = forms[lang];
  const c = t.careers;
  const form = useForm({
    idPrefix: 'careers',
    initialValues: CAREERS_INITIAL,
    validate: validateCareers,
    submit: (values) => submitForm('careers', values, lang),
  });

  if (form.status === 'success') {
    return <FormSuccess form={form} title={c.successTitle} text={c.successText} confirmationText={t.confirmationSent} />;
  }

  return (
    <form className="contact-form" method="post" noValidate onSubmit={form.handleSubmit}>
      <ErrorSummary form={form} order={ERROR_ORDER} title={t.errors.summary} messages={t.errors} />

      <div className="form-grid">
        <Field form={form} messages={t.errors} name="name" label={c.fields.name}>
          <input type="text" autoComplete="name" maxLength={CAREERS_MAX.name} {...form.inputProps('name', { required: true })} />
        </Field>

        <Field form={form} messages={t.errors} name="email" label={c.fields.email}>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            maxLength={CAREERS_MAX.email}
            {...form.inputProps('email', { required: true })}
          />
        </Field>

        <Field form={form} messages={t.errors} name="profile" label={c.fields.profile}>
          <select {...form.inputProps('profile', { required: true })}>
            <option value="">{t.choose}</option>
            {profileIds.map((id) => (
              <option key={id} value={id}>
                {c.profiles[id]}
              </option>
            ))}
          </select>
        </Field>

        <Field form={form} messages={t.errors} name="level" label={c.fields.level}>
          <select {...form.inputProps('level', { required: true })}>
            <option value="">{t.choose}</option>
            {levelIds.map((id) => (
              <option key={id} value={id}>
                {c.levels[id]}
              </option>
            ))}
          </select>
        </Field>

        <Field form={form} messages={t.errors} name="cvUrl" label={c.fields.cvUrl} hint={c.hints.cvUrl} full>
          <input
            type="url"
            inputMode="url"
            spellCheck={false}
            placeholder="https://"
            maxLength={CAREERS_MAX.cvUrl}
            {...form.inputProps('cvUrl', { hint: true, required: true })}
          />
        </Field>

        <Field form={form} messages={t.errors} name="links" label={c.fields.links} optionalLabel={t.optional} hint={c.hints.links}>
          <input type="text" inputMode="url" spellCheck={false} maxLength={CAREERS_MAX.links} {...form.inputProps('links', { hint: true })} />
        </Field>

        <Field form={form} messages={t.errors} name="phone" label={c.fields.phone} optionalLabel={t.optional}>
          <input type="tel" autoComplete="tel" maxLength={CAREERS_MAX.phone} {...form.inputProps('phone')} />
        </Field>

        <Field form={form} messages={t.errors} name="message" label={c.fields.message} hint={c.hints.message} full>
          <textarea rows={6} maxLength={CAREERS_MAX.message} {...form.inputProps('message', { hint: true, required: true })} />
        </Field>

        <Honeypot form={form} />
      </div>

      <FormFooter form={form} t={t} submitLabel={c.submit} privacy={c.privacy} />
    </form>
  );
}
