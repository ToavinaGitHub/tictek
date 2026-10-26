import { useEffect, useRef, useState } from 'react';
import forms from '../data/locales/form';
import { contactInfo } from '../data/site';
import { INITIAL_VALUES, MAX_LENGTH, isLikelySpam, needIds, timelineIds, validate } from './validate';
import { buildTemplateParams, sendEmail } from './email';

const FIELD_ORDER = ['name', 'email', 'need', 'message', 'company', 'budget'];
const fieldId = (name) => `contact-${name}`;

/**
 * Rendered to HTML at build time, then hydrated by src/client/contact.jsx.
 * The submit button stays disabled until hydration so a click before the
 * script loads can't fall back to a native submit that puts data in the URL.
 */
export default function ContactForm({ lang }) {
  const t = forms[lang];
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [ready, setReady] = useState(false);
  const mountedAt = useRef(0);
  const summaryRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    mountedAt.current = Date.now();
    setReady(true);
  }, []);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Once a field has been flagged, re-check it as the user fixes it.
    if (errors[name]) {
      const { [name]: _previous, ...rest } = errors;
      const recheck = validate(next)[name];
      setErrors(recheck ? { ...rest, [name]: recheck } : rest);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('idle');
      // Let the summary render before moving focus to it.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    if (isLikelySpam(values, Date.now() - mountedAt.current)) {
      setStatus('success');
      return;
    }

    setStatus('sending');
    try {
      await sendEmail(buildTemplateParams(values, lang));
      setValues(INITIAL_VALUES);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success" role="status" tabIndex={-1} ref={successRef}>
        <h2>{t.successTitle}</h2>
        <p>{t.successText}</p>
      </div>
    );
  }

  const errorList = FIELD_ORDER.filter((name) => errors[name]);
  const describedBy = (name, hint) =>
    [hint && `${fieldId(name)}-hint`, errors[name] && `${fieldId(name)}-error`].filter(Boolean).join(' ') || undefined;

  const fieldProps = (name, { hint = false, required = false } = {}) => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: handleChange,
    required,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': describedBy(name, hint),
  });

  const label = (name, optional = false) => (
    <label htmlFor={fieldId(name)}>
      {t.fields[name]}
      {optional && <span className="optional"> ({t.optional})</span>}
    </label>
  );

  const errorText = (name) =>
    errors[name] && (
      <p className="field-error" id={`${fieldId(name)}-error`}>
        {t.errors[errors[name]]}
      </p>
    );

  return (
    <form className="contact-form" method="post" noValidate onSubmit={handleSubmit}>
      {errorList.length > 0 && (
        <div className="error-summary" role="alert" tabIndex={-1} ref={summaryRef}>
          <p>{t.errors.summary}</p>
          <ul>
            {errorList.map((name) => (
              <li key={name}>
                <a href={`#${fieldId(name)}`}>{t.errors[errors[name]]}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="form-grid">
        <div className="field">
          {label('name')}
          {errorText('name')}
          <input type="text" autoComplete="name" maxLength={MAX_LENGTH.name} {...fieldProps('name', { required: true })} />
        </div>

        <div className="field">
          {label('email')}
          {errorText('email')}
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            maxLength={MAX_LENGTH.email}
            {...fieldProps('email', { required: true })}
          />
        </div>

        <div className="field">
          {label('company', true)}
          {errorText('company')}
          <input type="text" autoComplete="organization" maxLength={MAX_LENGTH.company} {...fieldProps('company')} />
        </div>

        <div className="field">
          {label('need')}
          {errorText('need')}
          <select {...fieldProps('need', { required: true })}>
            <option value="">{t.choose}</option>
            {needIds.map((id) => (
              <option key={id} value={id}>
                {t.needs[id]}
              </option>
            ))}
          </select>
        </div>

        <div className="field field-full">
          {label('message')}
          <p className="field-hint" id={`${fieldId('message')}-hint`}>
            {t.hints.message}
          </p>
          {errorText('message')}
          <textarea rows={6} maxLength={MAX_LENGTH.message} {...fieldProps('message', { hint: true, required: true })} />
        </div>

        <div className="field">
          {label('budget', true)}
          <p className="field-hint" id={`${fieldId('budget')}-hint`}>
            {t.hints.budget}
          </p>
          {errorText('budget')}
          <input type="text" maxLength={MAX_LENGTH.budget} {...fieldProps('budget', { hint: true })} />
        </div>

        <div className="field">
          {label('timeline', true)}
          <select {...fieldProps('timeline')}>
            {timelineIds.map((id) => (
              <option key={id} value={id}>
                {t.timelines[id]}
              </option>
            ))}
          </select>
        </div>

        {/* Honeypot: invisible to people and assistive tech, tempting for bots. */}
        <div className="hp" aria-hidden="true">
          <label htmlFor={fieldId('website')}>Website</label>
          <input
            type="text"
            id={fieldId('website')}
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={handleChange}
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert">
          {t.errorText} <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
        </p>
      )}

      <p className="form-privacy">{t.privacy}</p>

      <button type="submit" className="btn btn-primary" disabled={!ready || status === 'sending'}>
        {status === 'sending' ? t.sending : t.submit}
      </button>
      <p className="visually-hidden" role="status">
        {status === 'sending' ? t.sending : ''}
      </p>
    </form>
  );
}
