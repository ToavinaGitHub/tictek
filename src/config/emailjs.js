// EmailJS configuration, sourced from Vite's built-in .env support
// (import.meta.env.VITE_*) — see .env.example for the required keys.
//
// First-time setup: copy .env.example to .env and fill in your EmailJS
// Service ID, Template ID and Public Key (Email Services / Email Templates /
// Account → General on the EmailJS dashboard).
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  // Optional: template for the automatic confirmation sent to the visitor
  // (To Email: {{to_email}}, Subject: {{subject}}, Content: {{message}}).
  // Left empty, no confirmation is sent.
  confirmTemplateId: import.meta.env.VITE_EMAILJS_CONFIRM_TEMPLATE_ID ?? '',
};
