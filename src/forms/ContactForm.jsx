import forms from '../data/locales/form';
import { CONTACT_INITIAL, CONTACT_MAX, needIds, timelineIds, validateContact } from './validate';
import { submitForm } from './email';
import { useForm } from './useForm';
import { ErrorSummary, Field, FormFooter, FormSuccess, Honeypot } from './FormParts';

const ERROR_ORDER = ['name', 'email', 'company', 'need', 'message', 'budget'];

/** Project request form. Rendered at build time, hydrated by src/client/forms.jsx. */
export default function ContactForm({ lang }) {
  const t = forms[lang];
  const form = useForm({
    idPrefix: 'contact',
    initialValues: CONTACT_INITIAL,
    validate: validateContact,
    submit: (values) => submitForm('contact', values, lang),
  });

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

        <Field form={form} messages={t.errors} name="company" label={t.fields.company} optionalLabel={t.optional}>
          <input type="text" autoComplete="organization" maxLength={CONTACT_MAX.company} {...form.inputProps('company')} />
        </Field>

        <Field form={form} messages={t.errors} name="need" label={t.fields.need}>
          <select {...form.inputProps('need', { required: true })}>
            <option value="">{t.choose}</option>
            {needIds.map((id) => (
              <option key={id} value={id}>
                {t.needs[id]}
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

      <FormFooter form={form} t={t} submitLabel={t.submit} privacy={t.privacy} />
    </form>
  );
}
