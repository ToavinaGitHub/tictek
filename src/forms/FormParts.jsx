import { contactInfo } from '../data/site';

/** Label, optional hint and error message around one control. `messages` maps error keys to text. */
export function Field({ form, messages, name, label, optionalLabel, hint, full = false, children }) {
  const id = form.fieldId(name);
  const error = form.errors[name] && messages[form.errors[name]];

  return (
    <div className={`field${full ? ' field-full' : ''}`}>
      <label htmlFor={id}>
        {label}
        {optionalLabel && <span className="optional"> ({optionalLabel})</span>}
      </label>
      {hint && (
        <p className="field-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
      {children}
    </div>
  );
}

/** Lists every error as a link to its field; receives focus after a failed submit. */
export function ErrorSummary({ form, order, title, messages }) {
  const names = order.filter((name) => form.errors[name]);
  if (names.length === 0) return null;

  return (
    <div className="error-summary" role="alert" tabIndex={-1} ref={form.summaryRef}>
      <p>{title}</p>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <a href={`#${form.fieldId(name)}`}>{messages[form.errors[name]]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Invisible to people and assistive tech, tempting for bots. */
export function Honeypot({ form }) {
  return (
    <div className="hp" aria-hidden="true">
      <label htmlFor={form.fieldId('website')}>Website</label>
      <input
        type="text"
        id={form.fieldId('website')}
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={form.values.website}
        onChange={form.handleChange}
      />
    </div>
  );
}

export function FormSuccess({ form, title, text, confirmationText }) {
  return (
    <div className="form-success" role="status" tabIndex={-1} ref={form.successRef}>
      <h2>{title}</h2>
      <p>{text}</p>
      {form.confirmed && <p>{confirmationText}</p>}
    </div>
  );
}

/** Send error, privacy note, submit button and a live region for the sending state. */
export function FormFooter({ form, t, submitLabel, privacy }) {
  return (
    <>
      {form.status === 'error' && (
        <p className="form-error" role="alert">
          {t.errorText} <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
        </p>
      )}

      <p className="form-privacy">{privacy}</p>

      <button type="submit" className="btn btn-primary" disabled={!form.ready || form.status === 'sending'}>
        {form.status === 'sending' ? t.sending : submitLabel}
      </button>
      <p className="visually-hidden" role="status">
        {form.status === 'sending' ? t.sending : ''}
      </p>
    </>
  );
}
