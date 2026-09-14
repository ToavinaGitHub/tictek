import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { projectTypes } from '../data/content';
import { EMAILJS_CONFIG } from '../config/emailjs';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const INITIAL_FORM = { name: '', email: '', company: '', projectType: projectTypes[0], message: '' };

export default function QuoteRequest() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage(null);

    // Reuses the portfolio's EmailJS service/template (see .env), whose
    // template only interpolates {{from_name}}, {{from_email}}, {{reason}}
    // and {{message}} — so company/projectType are folded into those two
    // fields instead of sent as their own (unrendered) variables.
    const message = [
      `Type de projet : ${form.projectType}`,
      form.company.trim() && `Entreprise : ${form.company.trim()}`,
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
          reason: `Demande de devis — ${form.projectType}`,
          message,
        },
        { publicKey: EMAILJS_CONFIG.publicKey },
      );

      setIsSuccess(true);
      setForm(INITIAL_FORM);
    } catch {
      setErrorMessage("Une erreur est survenue lors de l'envoi. Merci de réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="devis" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle
            eyebrow="Demande de devis"
            title="Décrivez votre projet, recevez un retour sous 24h"
            lede="Ce formulaire envoie votre demande directement à notre équipe technique. Pas d'intermédiaire, pas de spam."
          />
        </Reveal>
        <Reveal variant="zoom" className="quote-form-wrap mx-auto">
          <form className="quote-form" onSubmit={handleSubmit}>
            <fieldset disabled={isSubmitting} className="row g-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="quote-name">Nom complet</label>
                <input
                  required
                  id="quote-name"
                  name="name"
                  type="text"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="quote-email">Email</label>
                <input
                  required
                  id="quote-email"
                  name="email"
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@entreprise.com"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="quote-company">Entreprise (optionnel)</label>
                <input
                  id="quote-company"
                  name="company"
                  type="text"
                  className="form-control"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Nom de votre entreprise"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="quote-type">Type de projet</label>
                <select
                  id="quote-type"
                  name="projectType"
                  className="form-select"
                  value={form.projectType}
                  onChange={handleChange}
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="quote-message">Décrivez votre besoin</label>
                <textarea
                  required
                  id="quote-message"
                  name="message"
                  rows={5}
                  className="form-control"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Contexte, objectifs, délais envisagés..."
                />
              </div>
            </fieldset>
            <button type="submit" className="btn btn-primary py-3 px-5 mt-4" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                  Envoi en cours...
                </>
              ) : (
                'Envoyer ma demande de devis'
              )}
            </button>
            <div className="micro mt-3">Envoyé directement à notre équipe technique.</div>

            {isSuccess && (
              <p className="mt-3 mb-0" style={{ color: 'var(--bs-success, #198754)' }}>
                ✓ Votre demande a bien été envoyée. Nous revenons vers vous sous 24h.
              </p>
            )}
            {errorMessage && (
              <p className="mt-3 mb-0" style={{ color: 'var(--bs-danger, #dc3545)' }}>
                {errorMessage}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
}
