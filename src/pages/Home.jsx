import { clocks, hasProjects } from '../data/site';
import { projects } from '../data/projects';
import { team } from '../data/team';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import HeroVisual from '../components/HeroVisual';
import TechMarquee from '../components/TechMarquee';
import ProcessSteps from '../components/ProcessSteps';
import ProjectCard from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';
import TeamCards from '../components/TeamCards';
import Guarantees from '../components/Guarantees';
import SectionHead from '../components/SectionHead';
import FeatureGrid from '../components/FeatureGrid';
import OfferCards from '../components/OfferCards';
import ModelCards from '../components/ModelCards';
import Security from '../components/Security';
import Faq from '../components/Faq';
import Clocks from '../components/Clocks';

// Sales landing page: who we are, what we do, why us, how to start.
export default function Home() {
  const { t, href } = useLocale();
  const page = t.pages.home;
  // Case studies first: the website itself is not one.
  const featured = projects.filter((project) => project.caseStudy).slice(0, 3);

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
              <a href={href('contact')} className="btn btn-primary btn-lg" data-track="cta_click" data-track-label="hero_primary">
                {page.hero.ctaContact}
                <Icon name="arrow" size={18} />
              </a>
              <a
                href={hasProjects ? href('work') : href('services')}
                className="btn btn-secondary btn-lg"
                data-track="cta_click"
                data-track-label="hero_secondary"
              >
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

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <SectionHead id="why-title" eyebrow={page.why.eyebrow} title={page.why.title} lede={page.why.lede} />
          <FeatureGrid items={t.advantages} columns={4} className="feature-grid-cards" />
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="services-title">
        <div className="container">
          <SectionHead id="services-title" eyebrow={page.services.eyebrow} title={page.services.title} lede={page.services.lede} />
          <OfferCards />
          <p className="section-link">
            <a href={href('services')} className="text-link">
              {page.services.link}
              <Icon name="arrow" size={18} />
            </a>
          </p>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="models-title">
        <div className="container">
          <SectionHead id="models-title" eyebrow={page.models.eyebrow} title={page.models.title} lede={page.models.lede} />
          <ModelCards dark />
          <p className="section-link">
            <a href={href('collaboration')} className="text-link">
              {page.models.link}
              <Icon name="arrow" size={18} />
            </a>
          </p>
        </div>
      </section>

      {hasProjects && featured.length > 0 && (
        <section className="section" aria-labelledby="work-title">
          <div className="container">
            <SectionHead id="work-title" eyebrow={page.work.eyebrow} title={page.work.title} lede={page.work.lede} />
            <div className="grid grid-3 grid-work">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} headingLevel={3} />
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

      <section className="section section-alt" aria-labelledby="process-title">
        <div className="container">
          <SectionHead id="process-title" eyebrow={page.process.eyebrow} title={page.process.title} lede={page.process.lede} />
          <ProcessSteps />
        </div>
      </section>

      <section className="section section-clients" aria-labelledby="clients-title">
        <div className="container">
          <Clocks clocks={clocks}>
            <p className="eyebrow">{page.clients.eyebrow}</p>
            <h2 id="clients-title">{page.clients.title}</h2>
            <p className="clients-lede">{page.clients.lede}</p>
          </Clocks>
        </div>
      </section>

      <Security>
        <div className="guarantees-band reveal">
          <h3 className="guarantees-title">{t.common.guarantees.title}</h3>
          <Guarantees headingLevel={4} />
        </div>
      </Security>

      {team.length > 0 && (
        <section className="section section-alt" aria-labelledby="team-title">
          <div className="container">
            <SectionHead id="team-title" eyebrow={page.team.eyebrow} title={page.team.title} lede={page.team.lede} />
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

      <section className="section" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <SectionHead id="faq-title" eyebrow={page.faq.eyebrow} title={page.faq.title} />
          <Faq items={t.faq} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
