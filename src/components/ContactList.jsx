import { contactInfo, socialLinks } from '../data/site';
import { useLocale } from '../i18n';
import Icon from './Icon';
import BrandIcon from './BrandIcon';

// Direct contact details, shown in the footer and on the contact page.
export default function ContactList() {
  const { t } = useLocale();

  return (
    <ul className="footer-contact">
      <li>
        <Icon name="mail" size={18} />
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </li>
      <li>
        <Icon name="phone" size={18} />
        <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
      </li>
      <li>
        <BrandIcon name="whatsapp" size={18} />
        <a
          href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(t.common.whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          data-track="contact_whatsapp"
        >
          WhatsApp
        </a>
      </li>
      <li>
        <BrandIcon name="linkedin" size={18} />
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={t.common.linkedin}>
          LinkedIn
        </a>
      </li>
      <li>
        <Icon name="pin" size={18} />
        <span>{t.footer.location}</span>
      </li>
    </ul>
  );
}
