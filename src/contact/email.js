import { EMAILJS_CONFIG } from '../config/emailjs';
import forms from '../data/locales/form';

// EmailJS REST endpoint: the same service the @emailjs/browser SDK calls,
// without shipping the SDK. Only the *public* key is used here.
const ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

/**
 * Maps the form to the existing EmailJS template, which renders
 * {{from_name}}, {{from_email}}, {{reason}} and {{message}}. Every other
 * field is folded into the message, and also sent on its own so a dedicated
 * template can use it later. The email is read by the (French-speaking)
 * team, so labels are always in French.
 */
export function buildTemplateParams(values, lang) {
  const labels = forms.fr;
  const need = labels.needs[values.need] ?? values.need;
  const company = values.company.trim();
  const budget = values.budget.trim();
  const timeline = values.timeline ? labels.timelines[values.timeline] : '';

  const details = [
    `Type de besoin : ${need}`,
    company && `Entreprise : ${company}`,
    budget && `Budget : ${budget}`,
    timeline && `Délai : ${timeline}`,
    `Langue du visiteur : ${lang.toUpperCase()}`,
  ].filter(Boolean);
  const message = `${details.join('\n')}\n\n${values.message.trim()}`;

  return {
    from_name: values.name.trim(),
    from_email: values.email.trim(),
    reply_to: values.email.trim(),
    reason: `Demande de projet : ${need}`,
    message,
    company,
    need,
    budget,
    timeline,
    lang,
  };
}

export async function sendEmail(templateParams) {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
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
