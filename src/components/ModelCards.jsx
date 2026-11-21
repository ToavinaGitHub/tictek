import { contactHref, modelIds } from '../data/site';
import { useLocale } from '../i18n';
import Icon from './Icon';

/**
 * The three engagement models: who each is for, when to choose it, how it
 * works, its benefits and a CTA that preselects it in the contact form.
 * `anchors`: give each card its id (collaboration page only).
 */
export default function ModelCards({ headingLevel = 3, anchors = false, dark = false }) {
  const { t, href } = useLocale();
  const Heading = `h${headingLevel}`;
  const Sub = `h${headingLevel + 1}`;
  const labels = t.modelLabels;

  return (
    <div className={`model-grid${dark ? ' model-grid-dark' : ''}`}>
      {modelIds.map((id) => {
        const model = t.models[id];
        return (
          <article className="model-card" id={anchors ? id : undefined} key={id}>
            <header>
              <Icon name={id} className="icon card-icon" />
              <Heading className="card-title">{model.title}</Heading>
              <p className="model-short">{model.short}</p>
            </header>
            <dl className="model-facts">
              <div>
                <dt>{labels.audience}</dt>
                <dd>{model.audience}</dd>
              </div>
              <div>
                <dt>{labels.when}</dt>
                <dd>{model.when}</dd>
              </div>
              <div>
                <dt>{labels.how}</dt>
                <dd>{model.how}</dd>
              </div>
            </dl>
            <Sub className="model-subtitle">{labels.benefits}</Sub>
            <ul className="check-list">
              {model.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <p className="model-cta">
              <a
                href={contactHref(href('contact'), model.type)}
                className="btn btn-primary"
                data-track="cta_click"
                data-track-label={`model_${model.type}`}
              >
                {model.cta}
                <Icon name="arrow" size={18} />
              </a>
            </p>
          </article>
        );
      })}
    </div>
  );
}
