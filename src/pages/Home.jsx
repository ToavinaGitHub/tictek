import { hasProjects, modelIds, serviceIds } from '../data/site';
import { projects } from '../data/projects';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import HeroVisual from '../components/HeroVisual';
import TechMarquee from '../components/TechMarquee';
import ProcessSteps from '../components/ProcessSteps';
import ProjectCard from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';

export default function Home() {
  const { t, href } = useLocale();
  const page = t.pages.home;

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              {page.hero.title} <span className="accent-text">{page.hero.titleAccent}</span>
            </h1>
            <p className="lede">{page.hero.lede}</p>
            <div className="actions">
              <a href={href('contact')} className="btn btn-primary btn-lg">
                {t.common.ctaContact}
                <Icon name="arrow" size={18} />
              </a>
              <a href={hasProjects ? href('work') : href('services')} className="btn btn-secondary btn-lg">
                {hasProjects ? page.hero.ctaWork : page.hero.ctaServices}
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>

        <div className="container">
          <TechMarquee />
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">{t.common.nav.services}</p>
            <h2 id="services-title">{page.services.title}</h2>
            <p>{page.services.lede}</p>
          </div>
          <ul className="grid grid-3 grid-services">
            {serviceIds.map((id) => (
              <li className="card card-service reveal" key={id}>
                <Icon name={id} className="icon card-icon" />
                <h3 className="card-title">
                  <a href={`${href('services')}#${id}`} className="stretched-link">
                    {t.services[id].title}
                  </a>
                </h3>
                <p>{t.services[id].short}</p>
                <span className="card-more" aria-hidden="true">
                  {t.common.learnMore}
                  <Icon name="arrow" size={16} />
                </span>
              </li>
            ))}
            <li className="card card-service card-other reveal">
              <h3 className="card-title">
                <a href={href('contact')} className="stretched-link">
                  {page.services.otherTitle}
                </a>
              </h3>
              <p>{page.services.otherText}</p>
              <span className="card-more" aria-hidden="true">
                {t.common.ctaContact}
                <Icon name="arrow" size={16} />
              </span>
            </li>
          </ul>
          <p className="section-link">
            <a href={href('services')} className="text-link">
              {page.services.link}
              <Icon name="arrow" size={18} />
            </a>
          </p>
        </div>
      </section>

      {hasProjects && (
        <section className="section section-alt" aria-labelledby="work-title">
          <div className="container">
            <div className="section-head reveal">
              <h2 id="work-title">{page.work.title}</h2>
            </div>
            <div className="grid grid-3">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.slug} project={project} teaser headingLevel={3} />
              ))}
            </div>
            <p className="section-link">
              <a href={href('work')} className="text-link">
                {page.work.link}
                <Icon name="arrow" size={18} />
              </a>
            </p>
          </div>
        </section>
      )}

      <section className="section section-dark" aria-labelledby="models-title">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">{t.common.nav.collaboration}</p>
            <h2 id="models-title">{page.models.title}</h2>
            <p>{page.models.lede}</p>
          </div>
          <ul className="grid grid-3">
            {modelIds.map((id) => (
              <li className="card card-dark reveal" key={id}>
                <Icon name={id} className="icon card-icon" />
                <h3 className="card-title">{t.models[id].title}</h3>
                <p>{t.models[id].text}</p>
                <p className="card-meta">{t.models[id].fit}</p>
              </li>
            ))}
          </ul>
          <p className="section-link">
            <a href={href('collaboration')} className="text-link">
              {page.models.link}
              <Icon name="arrow" size={18} />
            </a>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head reveal">
            <h2 id="process-title">{page.process.title}</h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="trust-title">
        <div className="container trust-layout">
          <div className="reveal">
            <h2 id="trust-title">{page.trust.title}</h2>
          </div>
          <ul className="trust-list">
            {page.trust.items.map((item) => (
              <li key={item.title} className="reveal">
                <Icon name="check" className="icon trust-icon" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
