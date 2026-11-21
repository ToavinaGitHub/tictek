import { contactHref } from '../data/site';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';

// No public rate: prices depend on the project and the engagement model and
// are always set in a written quote. Do not publish unvalidated figures here.
export default function Pricing() {
  const { t, href } = useLocale();
  const page = t.pages.pricing;
  const quote = (label) => (
    <a href={contactHref(href('contact'))} className="btn btn-primary btn-lg" data-track="request_quote" data-track-label={label}>
      {t.common.requestQuote}
      <Icon name="arrow" size={18} />
    </a>
  );

  return (
    <>
      <PageHeader pageId="pricing" title={page.h1} lede={page.lede}>
        {quote('pricing_header')}
      </PageHeader>

      <section className="container" aria-labelledby="options-title">
        <h2 id="options-title" className="section-title-sm">
          {page.optionsTitle}
        </h2>
        <ul className="grid grid-3 pricing-grid">
          {page.options.map((option) => (
            <li className="card pricing-option" id={option.id} key={option.id}>
              <Icon name={option.icon} className="icon card-icon" />
              <h3 className="card-title">{option.title}</h3>
              <p>{option.text}</p>
              <ul className="check-list check-list-sm">
                {option.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="card-meta">
                <strong>{page.fitLabel} </strong>
                {option.fit}
              </p>
            </li>
          ))}
          <li className="card pricing-option pricing-cta">
            <h3 className="card-title">{page.stepsTitle}</h3>
            <ol className="next-steps">
              {page.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="card-meta">{quote('pricing_card')}</p>
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="factors-title">
        <div className="container">
          <div className="section-head">
            <h2 id="factors-title">{page.factorsTitle}</h2>
          </div>
          <ul className="grid grid-3 trust-list">
            {page.factors.map((factor) => (
              <li key={factor.title}>
                <Icon name="check" className="icon trust-icon" />
                <div>
                  <h3>{factor.title}</h3>
                  <p>{factor.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="pricing-faq-title">
        <div className="container faq-layout">
          <div className="section-head">
            <h2 id="pricing-faq-title">{page.faqTitle}</h2>
          </div>
          <Faq items={page.faq} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
