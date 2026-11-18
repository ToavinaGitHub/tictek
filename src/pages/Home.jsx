import { clocks, hasProjects, modelIds, serviceIds } from '../data/site';
import { projects } from '../data/projects';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import Flag from '../components/Flag';
import HeroVisual from '../components/HeroVisual';
import TechMarquee from '../components/TechMarquee';
import ProcessSteps from '../components/ProcessSteps';
import ProjectCard from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';
import TeamCards from '../components/TeamCards';
import Guarantees from '../components/Guarantees';
import { team } from '../data/team';

export default function Home() {
  const { t, href } = useLocale();
  const page = t.pages.home;

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              {page.hero.title} <span className="script-text">{page.hero.titleAccent}</span>
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

      <section className="section" aria-labelledby="outsource-title">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">{page.outsource.eyebrow}</p>
            <h2 id="outsource-title">{page.outsource.title}</h2>
            <p>{page.outsource.lede}</p>
          </div>
          <div className="compare">
            <div className="compare-col compare-inhouse reveal">
              <h3>{page.outsource.inhouse.title}</h3>
              <ul>
                {page.outsource.inhouse.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="compare-col compare-tictek reveal">
              <h3>{page.outsource.tictek.title}</h3>
              <ul className="check-list">
                {page.outsource.tictek.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={href('collaboration')} className="text-link">
                {page.models.link}
                <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
          <p className="compare-hours reveal">
            <Icon name="globe" size={20} />
            {page.outsource.hours}
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="services-title">
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

      {team.length > 0 && (
        <section className="section" aria-labelledby="team-title">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">{page.team.eyebrow}</p>
              <h2 id="team-title">{page.team.title}</h2>
              <p>{page.team.lede}</p>
            </div>
            <TeamCards />
            <p className="section-link">
              <a href={href('about')} className="text-link">
                {page.team.link}
                <Icon name="arrow" size={18} />
              </a>
            </p>
          </div>
        </section>
      )}

      {hasProjects && (
        <section className="section section-alt" aria-labelledby="work-title">
          <div className="container">
            <div className="section-head reveal">
              <h2 id="work-title">{page.work.title}</h2>
            </div>
            <div className="grid grid-3 grid-work">
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

      <section className="section section-dark section-teal" aria-labelledby="models-title">
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
                <p>{t.models[id].short}</p>
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

      <section className="section section-clients" aria-labelledby="clients-title">
        <div className="container">
          <div className="clocks" data-clocks data-same={page.hours.same} data-unit={page.hours.hourUnit} data-versus={page.hours.versus}>
            <div className="clients-head reveal">
              <div>
                <p className="eyebrow">{page.clients.eyebrow}</p>
                <h2 id="clients-title">{page.clients.title}</h2>
                <p className="clients-lede">{page.clients.lede}</p>
              </div>
              <p className="clocks-langs">
                <span>{page.hours.languagesLabel}</span>
                {page.hours.languages.map((language) => (
                  <strong key={language}>{language}</strong>
                ))}
              </p>
            </div>
            <ul className="clock-grid" aria-label={page.hours.listLabel}>
              {clocks.map((clock, index) => (
                <li key={clock.id} className={index === 0 ? 'clock is-home' : 'clock'} data-tz={clock.timeZone}>
                  <span className="clock-place">
                    <Flag code={clock.flag} />
                    <span>
                      <strong>{t.cities[clock.id].city}</strong>
                      <span className="clock-country">{t.cities[clock.id].country}</span>
                    </span>
                  </span>
                  <span className="clock-time" data-clock-time>
                    --:--
                  </span>
                  <span className="clock-gap" data-clock-gap>
                    {index === 0 ? page.hours.ours : '\u00a0'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head reveal">
            <h2 id="why-title">{page.why.title}</h2>
            <p>{page.why.lede}</p>
          </div>
          <ul className="why-grid">
            <li className="why-card why-price">
              <h3>{page.why.priceTitle}</h3>
              <p className="rate-value">
                <span className="rate-from">{t.pages.pricing.rate.from}</span> <strong>{t.pages.pricing.rate.value}</strong>{' '}
                <span className="rate-unit">{t.pages.pricing.rate.unit}</span>
              </p>
              <p>{page.why.priceText}</p>
              <a href={href('pricing')} className="text-link">
                {page.why.priceLink}
                <Icon name="arrow" size={18} />
              </a>
            </li>
            {page.why.items.map((item) => (
              <li key={item.title} className="card why-card">
                <Icon name={item.icon} className="icon card-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="guarantees-band reveal">
            <h3 className="guarantees-title">{t.common.guarantees.title}</h3>
            <Guarantees headingLevel={4} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
