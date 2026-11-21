import { useEffect } from 'react';
import forms from '../data/locales/form';
import { CONTACT_INITIAL, CONTACT_MAX, collaborationIds, contactLanguageIds, timelineIds, validateContact } from './validate';
import { submitForm } from './email';
import { useForm } from './useForm';
import { ErrorSummary, Field, FormFooter, FormSuccess, Honeypot } from './FormParts';

const ERROR_ORDER = ['name', 'email', 'company', 'country', 'companyWebsite', 'language', 'collaboration', 'message', 'budget'];

/**
 * Project request form. Rendered at build time, hydrated by src/client/forms.jsx.
 * The preferred language starts as the page language; links to the contact
 * page can preselect the type of collaboration with ?type=<collaborationId>.
 */
export default function ContactForm({ lang }) {
  const t = forms[lang];
  const form = useForm({
    idPrefix: 'contact',
    initialValues: { ...CONTACT_INITIAL, language: lang },
    validate: validateContact,
    submit: (values) => submitForm('contact', values, lang),
    trackParams: (values) => ({ collaboration_type: values.collaboration, preferred_language: values.language }),
  });

  // After hydration only, so the server HTML and the first client render match.
  const { setValue } = form;
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get('type');
    if (collaborationIds.includes(type)) setValue('collaboration', type);
  }, [setValue]);

  if (form.status === 'success') {
    return <FormSuccess form={form} title={t.successTitle} text={t.successText} confirmationText={t.confirmationSent} />;
  }

  return (
    <form className="contact-form" method="post" noValidate onSubmit={form.handleSubmit}>
      <ErrorSummary form={form} order={ERROR_ORDER} title={t.errors.summary} messages={t.errors} />

      <div className="form-grid">
        <Field form={form} messages={t.errors} name="name" label={t.fields.name}>
          <input type="text" autoComplete="name" maxLength={CONTACT_MAX.name} {...form.inputProps('name', { required: true })} />
        </Field>

        <Field form={form} messages={t.errors} name="email" label={t.fields.email}>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            maxLength={CONTACT_MAX.email}
            {...form.inputProps('email', { required: true })}
          />
        </Field>

        <Field form={form} messages={t.errors} name="company" label={t.fields.company}>
          <input type="text" autoComplete="organization" maxLength={CONTACT_MAX.company} {...form.inputProps('company', { required: true })} />
        </Field>

        <Field form={form} messages={t.errors} name="country" label={t.fields.country}>
          <input
            type="text"
            autoComplete="country-name"
            list={form.fieldId('countries')}
            maxLength={CONTACT_MAX.country}
            {...form.inputProps('country', { required: true })}
          />
          <datalist id={form.fieldId('countries')}>
            {t.countries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </Field>

        <Field
          form={form}
          messages={t.errors}
          name="companyWebsite"
          label={t.fields.companyWebsite}
          optionalLabel={t.optional}
          hint={t.hints.companyWebsite}
        >
          <input
            type="text"
            inputMode="url"
            autoComplete="url"
            spellCheck={false}
            maxLength={CONTACT_MAX.companyWebsite}
            {...form.inputProps('companyWebsite', { hint: true })}
          />
        </Field>

        <Field form={form} messages={t.errors} name="language" label={t.fields.language}>
          <select {...form.inputProps('language', { required: true })}>
            {contactLanguageIds.map((id) => (
              <option key={id} value={id}>
                {t.languages[id]}
              </option>
            ))}
          </select>
        </Field>

        <Field form={form} messages={t.errors} name="collaboration" label={t.fields.collaboration} full>
          <select {...form.inputProps('collaboration', { required: true })}>
            <option value="">{t.choose}</option>
            {collaborationIds.map((id) => (
              <option key={id} value={id}>
                {t.collaborations[id]}
              </option>
            ))}
          </select>
        </Field>

        <Field form={form} messages={t.errors} name="message" label={t.fields.message} hint={t.hints.message} full>
          <textarea rows={6} maxLength={CONTACT_MAX.message} {...form.inputProps('message', { hint: true, required: true })} />
        </Field>

        <Field
          form={form}
          messages={t.errors}
          name="budget"
          label={t.fields.budget}
          optionalLabel={t.optional}
          hint={t.hints.budget}
        >
          <input type="text" maxLength={CONTACT_MAX.budget} {...form.inputProps('budget', { hint: true })} />
        </Field>

        <Field form={form} messages={t.errors} name="timeline" label={t.fields.timeline} optionalLabel={t.optional}>
          <select {...form.inputProps('timeline')}>
            {timelineIds.map((id) => (
              <option key={id} value={id}>
                {t.timelines[id]}
              </option>
            ))}
          </select>
        </Field>

        <Honeypot form={form} />
      </div>

      <FormFooter form={form} t={t} submitLabel={t.submit} privacy={t.privacy} note={t.quoteNote} />
    </form>
  );
}
