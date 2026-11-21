import { bookingUrl, contactHref } from '../data/site';
import { useLocale } from '../i18n';
import Icon from './Icon';

/** Closing call to action on every commercial page. */
export default function CtaBand({ type }) {
  const { t, href } = useLocale();

  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-band">
          <h2 id="cta-title">{t.common.cta.title}</h2>
          <p>{t.common.cta.text}</p>
          <p className="cta-actions">
            <a href={contactHref(href('contact'), type)} className="btn btn-primary" data-track="cta_click" data-track-label="cta_band">
              {t.common.cta.button}
              <Icon name="arrow" size={18} />
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
