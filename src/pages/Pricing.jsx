import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import CtaBand from '../components/CtaBand';

export default function Pricing() {
  const { t, href } = useLocale();
  const page = t.pages.pricing;

  return (
    <>
      <PageHeader pageId="pricing" title={page.h1} lede={page.lede} />

      <section className="container" aria-labelledby="billing-title">
        <h2 id="billing-title" className="section-title-sm">
          {page.modelsTitle}
        </h2>
        <div className="grid grid-2">
          {page.models.map((model) => (
            <section className="card card-service" id={model.id} key={model.id} aria-labelledby={`${model.id}-title`}>
              <h3 id={`${model.id}-title`} className="card-title">
                {model.title}
              </h3>
              <p>{model.text}</p>
              <ul className="check-list">
                {model.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="card-meta">
                <strong>{page.fitLabel} </strong>
                {model.fit}
              </p>
            </section>
          ))}
        </div>
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

      <section className="section section-alt" aria-labelledby="quote-title">
        <div className="container two-col">
          <div>
            <h2 id="quote-title">{page.stepsTitle}</h2>
            <ol className="next-steps">
              {page.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="section-link">
              <a href={href('contact')} className="btn btn-primary">
                {page.cta}
                <Icon name="arrow" size={18} />
              </a>
            </p>
          </div>
          <div>
            <h2>{page.faqTitle}</h2>
            <div className="faq">
              {page.faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
