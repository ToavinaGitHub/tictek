import { useEffect, useRef, useState } from 'react';
import { isLikelySpam } from './validate';

/**
 * State and handlers shared by the contact and careers forms: values,
 * per-field errors, submit status, anti-spam timing and focus management.
 * `submit(values)` sends the form and resolves to { confirmed }.
 */
export function useForm({ idPrefix, initialValues, validate, submit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [confirmed, setConfirmed] = useState(false);
  // Submit stays disabled until hydration, so a click before the script
  // loads can't fall back to a native submit.
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

  const fieldId = (name) => `${idPrefix}-${name}`;

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
      const result = await submit(values);
      setConfirmed(result.confirmed);
      setValues(initialValues);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  /** Props for an input/select/textarea bound to `name`. */
  const inputProps = (name, { hint = false, required = false } = {}) => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: handleChange,
    required,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby':
      [hint && `${fieldId(name)}-hint`, errors[name] && `${fieldId(name)}-error`].filter(Boolean).join(' ') || undefined,
  });

  return {
    values,
    errors,
    status,
    confirmed,
    ready,
    fieldId,
    inputProps,
    handleChange,
    handleSubmit,
    summaryRef,
    successRef,
  };
}
