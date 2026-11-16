import { contactInfo } from '../data/site';
import { useLocale } from '../i18n';
import BrandIcon from './BrandIcon';

// Floating WhatsApp shortcut, bottom right on every page. Opens a chat with
// a short greeting already typed in the visitor's language.
export default function WhatsAppButton() {
  const { t } = useLocale();
  const { label, message } = t.common.whatsapp;
  const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      data-track="contact_whatsapp"
    >
      <BrandIcon name="whatsapp" size={30} />
    </a>
  );
}
