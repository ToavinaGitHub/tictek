import { useLocale } from '../i18n';

export default function CtaBand() {
  const { t, href } = useLocale();

  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-band">
          <h2 id="cta-title">{t.common.cta.title}</h2>
          <p>{t.common.cta.text}</p>
          <a href={href('contact')} className="btn btn-primary">
            {t.common.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
