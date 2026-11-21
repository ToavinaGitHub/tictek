import { contactHref } from '../data/site';
import { useLocale } from '../i18n';
import Icon from './Icon';

/** A short call to action between two sections (outsourcing and market pages). */
export default function CtaInline({ title, text, trackLabel, type }) {
  const { t, href } = useLocale();

  return (
    <aside className="cta-inline reveal">
      <div>
        <p className="cta-inline-title">{title}</p>
        <p>{text}</p>
      </div>
      <a href={contactHref(href('contact'), type)} className="btn btn-primary" data-track="cta_click" data-track-label={trackLabel}>
        {t.common.ctaContact}
        <Icon name="arrow" size={18} />
      </a>
    </aside>
  );
}
