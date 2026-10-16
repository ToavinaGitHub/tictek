import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { projectTypeIds, translations } from '../data/content';
import { usePreferences } from '../context/PreferencesContext';
import { EMAILJS_CONFIG } from '../config/emailjs';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const INITIAL_FORM = { name: '', email: '', company: '', projectType: projectTypeIds[0], message: '' };

export default function QuoteRequest() {
  const { lang, t } = usePreferences();
  const quote = t.quote;
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    setHasError(false);

    // Reuses the portfolio's EmailJS service/template (see .env), whose
    // template only interpolates {{from_name}}, {{from_email}}, {{reason}}
    // and {{message}}, so company/projectType are folded into those two
    // fields instead of sent as their own (unrendered) variables.
    // The email is for the (French-speaking) team, so it is always in French.
    const projectLabel = translations.fr.quote.projectTypes[form.projectType];
    const message = [
      `Type de projet : ${projectLabel}`,
      form.company.trim() && `Entreprise : ${form.company.trim()}`,
      `Langue du visiteur : ${lang.toUpperCase()}`,
      '',
      form.message.trim(),
    ].filter(Boolean).join('\n');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reason: `Demande de devis : ${projectLabel}`,
          message,
        },
        { publicKey: EMAILJS_CONFIG.publicKey },
      );

      setIsSuccess(true);
      setForm(INITIAL_FORM);
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="devis" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle eyebrow={quote.eyebrow} title={quote.title} lede={quote.lede} />
        </Reveal>
        <Reveal variant="zoom" className="quote-form-wrap mx-auto">
          <form className="quote-form" onSubmit={handleSubmit}>
            <fieldset disabled={isSubmitting} className="row g-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="quote-name">{quote.fields.name}</label>
                <input
                  required
                  id="quote-name"
                  name="name"
                  type="text"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={quote.placeholders.name}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="quote-email">{quote.fields.email}</label>
                <input
                  required
                  id="quote-email"
                  name="email"
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={quote.placeholders.email}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="quote-company">{quote.fields.company}</label>
                <input
                  id="quote-company"
                  name="company"
                  type="text"
                  className="form-control"
                  value={form.company}
                  onChange={handleChange}
                  placeholder={quote.placeholders.company}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="quote-type">{quote.fields.projectType}</label>
                <select
                  id="quote-type"
                  name="projectType"
                  className="form-select"
                  value={form.projectType}
                  onChange={handleChange}
                >
                  {projectTypeIds.map((id) => (
                    <option key={id} value={id}>{quote.projectTypes[id]}</option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="quote-message">{quote.fields.message}</label>
                <textarea
                  required
                  id="quote-message"
                  name="message"
                  rows={5}
                  className="form-control"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={quote.placeholders.message}
                />
              </div>
            </fieldset>
            <button type="submit" className="btn btn-primary py-3 px-5 mt-4" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                  {quote.sending}
                </>
              ) : (
                quote.submit
              )}
            </button>
            <div className="micro mt-3">{quote.micro}</div>

            {isSuccess && (
              <p className="mt-3 mb-0" style={{ color: 'var(--success)' }}>
                {quote.success}
              </p>
            )}
            {hasError && (
              <p className="mt-3 mb-0" style={{ color: 'var(--danger)' }}>
                {quote.error}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
}
