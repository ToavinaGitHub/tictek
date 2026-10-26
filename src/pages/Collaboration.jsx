import { modelIds } from '../data/site';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import ProcessSteps from '../components/ProcessSteps';
import CtaBand from '../components/CtaBand';

export default function Collaboration() {
  const { t } = useLocale();
  const page = t.pages.collaboration;

  return (
    <>
      <PageHeader pageId="collaboration" title={page.h1} lede={page.lede} />

      <div className="container">
        <div className="grid grid-3">
          {modelIds.map((id) => {
            const model = t.models[id];
            return (
              <section className="card model" id={id} key={id} aria-labelledby={`${id}-title`}>
                <Icon name={id} className="icon card-icon" />
                <h2 id={`${id}-title`} className="card-title">
                  {model.title}
                </h2>
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
            );
          })}
        </div>
      </div>

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head">
            <h2 id="process-title">{page.processTitle}</h2>
            <p>{page.processLede}</p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="estimate-title">
        <div className="container two-col">
          <div>
            <h2 id="estimate-title">{page.estimateTitle}</h2>
            <ul className="check-list">
              {page.estimateItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
