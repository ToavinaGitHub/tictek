import { EMAILJS_CONFIG } from '../config/emailjs';
import { contactInfo } from '../data/site';
import forms from '../data/locales/form';

// EmailJS REST endpoint: the same service the @emailjs/browser SDK calls,
// without shipping the SDK. Only the *public* key is used here.
const ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

// Emails to the team are always in French.
const fr = forms.fr;

async function send(templateId, templateParams) {
  const { serviceId, publicKey } = EMAILJS_CONFIG;
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS is not configured (see .env.example).');
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    throw new Error(`EmailJS responded ${response.status}`);
  }
}

/** Sends to the team through the existing template, which renders {{from_name}}, {{from_email}}, {{reason}} and {{message}}. */
function sendToTeam({ name, email, reason, details, body, extra }) {
  return send(EMAILJS_CONFIG.templateId, {
    from_name: name.trim(),
    from_email: email.trim(),
    reply_to: email.trim(),
    reason,
    message: `${details.filter(Boolean).join('\n')}\n\n${body.trim()}`,
    ...extra,
  });
}

/**
 * Automatic confirmation to the visitor, in their language. The content is
 * fixed site copy (never visitor input) so the form can't be used to send
 * arbitrary text to arbitrary addresses. Resolves to false when not
 * configured or when sending fails: the request itself already went through.
 */
async function sendConfirmation(kind, lang, email) {
  if (!EMAILJS_CONFIG.confirmTemplateId) return false;
  const copy = forms[lang].confirmation[kind];
  try {
    await send(EMAILJS_CONFIG.confirmTemplateId, {
      to_email: email.trim(),
      subject: copy.subject,
      message: copy.message.replace('{email}', contactInfo.email),
    });
    return true;
  } catch {
    return false;
  }
}

export function buildContactEmail(values, lang) {
  const need = fr.needs[values.need] ?? values.need;
  const company = values.company.trim();
  const budget = values.budget.trim();
  const timeline = values.timeline ? fr.timelines[values.timeline] : '';

  return {
    name: values.name,
    email: values.email,
    reason: `Demande de projet : ${need}`,
    details: [
      `Type de besoin : ${need}`,
      company && `Entreprise : ${company}`,
      budget && `Budget : ${budget}`,
      timeline && `Délai : ${timeline}`,
      `Langue du visiteur : ${lang.toUpperCase()}`,
    ],
    body: values.message,
    extra: { company, need, budget, timeline, lang },
  };
}

export function buildCareersEmail(values, lang) {
  const profile = fr.careers.profiles[values.profile] ?? values.profile;
  const level = fr.careers.levels[values.level] ?? values.level;
  const phone = values.phone.trim();
  const links = values.links.trim();

  return {
    name: values.name,
    email: values.email,
    reason: `Candidature spontanée : ${profile}`,
    details: [
      `Profil : ${profile}`,
      `Expérience : ${level}`,
      `CV : ${values.cvUrl.trim()}`,
      links && `Liens : ${links}`,
      phone && `Téléphone : ${phone}`,
      `Langue du candidat : ${lang.toUpperCase()}`,
    ],
    body: values.message,
    extra: { profile, level, cv_url: values.cvUrl.trim(), links, phone, lang },
  };
}

/** Sends the request to the team, then the confirmation. Resolves to { confirmed }. */
export async function submitForm(kind, values, lang) {
  const message = kind === 'careers' ? buildCareersEmail(values, lang) : buildContactEmail(values, lang);
  await sendToTeam(message);
  const confirmed = await sendConfirmation(kind, lang, values.email);
  return { confirmed };
}
