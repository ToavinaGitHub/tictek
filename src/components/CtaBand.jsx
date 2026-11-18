import { bookingUrl } from '../data/site';
import { useLocale } from '../i18n';
import Icon from './Icon';

export default function CtaBand() {
  const { t, href } = useLocale();

  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-band">
          <h2 id="cta-title">{t.common.cta.title}</h2>
          <p>{t.common.cta.text}</p>
          <p className="cta-actions">
            <a href={href('contact')} className="btn btn-primary">
              {t.common.ctaContact}
            </a>
            {bookingUrl && (
              <a href={bookingUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" data-track="book_call">
                <Icon name="calendar" size={18} />
                {t.common.booking}
              </a>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
