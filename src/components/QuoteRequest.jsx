import { useState } from 'react';
import { quoteEmail, projectTypes } from '../data/content';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const INITIAL_FORM = { name: '', email: '', company: '', projectType: projectTypes[0], message: '' };

export default function QuoteRequest() {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Demande de devis — ${form.projectType}`;
    const body = [
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      form.company && `Entreprise : ${form.company}`,
      `Type de projet : ${form.projectType}`,
      '',
      form.message,
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:${quoteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div id="devis" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle
            eyebrow="Demande de devis"
            title="Décrivez votre projet, recevez un retour sous 24h"
            lede="Ce formulaire ouvre votre messagerie avec un e-mail déjà rédigé, adressé directement à notre équipe technique. Pas d'intermédiaire, pas de spam."
          />
        </Reveal>
        <Reveal variant="zoom" className="quote-form-wrap mx-auto">
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="row g-3">
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
            </div>
            <button type="submit" className="btn btn-primary py-3 px-5 mt-4">
              Envoyer ma demande de devis
            </button>
            <div className="micro mt-3">Ouvre votre messagerie par défaut, adressée à notre équipe technique.</div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
