import { contactHref, expertiseIds, offerIds } from '../data/site';
import { projects } from '../data/projects';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import SectionHead from '../components/SectionHead';
import { TechList } from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';

// The six offers (what clients buy), then the technical expertise behind
// them. Expertise anchors (/services/#web…) predate the offers: keep them.
export default function Services() {
  const { lang, t, href } = useLocale();
  const page = t.pages.services;
  const { labels } = page;

  return (
    <>
      <PageHeader pageId="services" title={page.h1} lede={page.lede}>
        <a href={contactHref(href('contact'))} className="btn btn-primary btn-lg" data-track="cta_click" data-track-label="services_header">
          {t.common.ctaContact}
          <Icon name="arrow" size={18} />
        </a>
      </PageHeader>

      <nav className="container toc" aria-label={page.h1}>
        <ul>
          {offerIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`}>{t.offers[id].title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container service-list">
        {offerIds.map((id) => {
          const offer = t.offers[id];
          return (
            <section className="service" id={id} key={id} aria-labelledby={`${id}-title`}>
              <div className="service-intro">
                <Icon name={id} className="icon card-icon" />
                <h2 id={`${id}-title`}>{offer.title}</h2>
                <p className="service-short">{offer.short}</p>
                <h3>{labels.need}</h3>
                <p>{offer.need}</p>
                <h3>{labels.audience}</h3>
                <p>{offer.audience}</p>
              </div>
              <div className="service-body">
                <h3>{labels.deliverables}</h3>
                <ul className="check-list">
                  {offer.points.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="service-cta">
                  <a
                    href={contactHref(href('contact'), offer.type)}
                    className="btn btn-secondary"
                    data-track="cta_click"
                    data-track-label={`service_${id}`}
                  >
                    {labels.cta}
                    <Icon name="arrow" size={18} />
                  </a>
                </p>
              </div>
            </section>
          );
        })}
      </div>

      <section className="section section-alt" aria-labelledby="expertise-title">
        <div className="container">
          <SectionHead id="expertise-title" eyebrow={page.expertise.eyebrow} title={page.expertise.title} lede={page.expertise.lede} />
          <ul className="grid grid-3 expertise-grid">
            {expertiseIds.map((id) => {
              const area = t.expertise[id];
              const related = projects.filter((p) => p.services?.includes(id));
              return (
                <li className="card expertise-card" id={id} key={id}>
                  <Icon name={id} className="icon card-icon" />
                  <h3 className="card-title">{area.title}</h3>
                  <p>{area.problem}</p>
                  <ul className="check-list check-list-sm">
                    {area.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <TechList items={area.tech} />
                  {related.length > 0 && (
                    <p className="expertise-related">
                      <span className="expertise-related-label">{labels.projects}</span>
                      {related.map((p, i) => (
                        <span key={p.slug}>
                          {i > 0 && ', '}
                          <a href={`${href('work')}#${p.slug}`}>{p.title[lang]}</a>
                        </span>
                      ))}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="quality-title">
        <div className="container">
          <div className="panel">
            <h2 id="quality-title">{page.quality.title}</h2>
            <ul className="check-list check-list-2">
              {page.quality.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
