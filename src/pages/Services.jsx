import { serviceIds } from '../data/site';
import { projects } from '../data/projects';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import { TechList } from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';

export default function Services() {
  const { lang, t, href } = useLocale();
  const page = t.pages.services;
  const { labels } = page;

  return (
    <>
      <PageHeader pageId="services" title={page.h1} lede={page.lede} />

      <nav className="container toc" aria-label={page.h1}>
        <ul>
          {serviceIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`}>{t.services[id].title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container service-list">
        {serviceIds.map((id) => {
          const service = t.services[id];
          const related = projects.filter((p) => p.services?.includes(id));

          return (
            <section className="service" id={id} key={id} aria-labelledby={`${id}-title`}>
              <div className="service-intro">
                <Icon name={id} className="icon card-icon" />
                <h2 id={`${id}-title`}>{service.title}</h2>
                <h3>{labels.problem}</h3>
                <p>{service.problem}</p>
                <h3>{labels.audience}</h3>
                <p>{service.audience}</p>
              </div>
              <div className="service-body">
                <h3>{labels.deliverables}</h3>
                <ul className="check-list">
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>{labels.tech}</h3>
                <TechList items={service.tech} />
                {related.length > 0 && (
                  <>
                    <h3>{labels.projects}</h3>
                    <ul className="plain-list">
                      {related.map((p) => (
                        <li key={p.slug}>
                          <a href={`${href('work')}#${p.slug}`} className="text-link">
                            {p.title[lang]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </div>

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
