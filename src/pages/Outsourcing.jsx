import { contactHref } from '../data/site';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import SectionHead from '../components/SectionHead';
import FeatureGrid from '../components/FeatureGrid';
import ModelCards from '../components/ModelCards';
import ProcessSteps from '../components/ProcessSteps';
import Security from '../components/Security';
import Faq from '../components/Faq';
import CtaInline from '../components/CtaInline';
import CtaBand from '../components/CtaBand';
import TrustList from '../components/TrustList';
import { TechList } from '../components/ProjectCard';

// Conversion page for "software development outsourcing" searches: why
// outsource, why Madagascar, models, skills, audiences, process, security.
export default function Outsourcing() {
  const { t, href } = useLocale();
  const page = t.pages.outsourcing;

  return (
    <>
      <PageHeader pageId="outsourcing" title={page.h1} lede={page.lede} eyebrow={t.common.slogan}>
        <a href={contactHref(href('contact'))} className="btn btn-primary btn-lg" data-track="cta_click" data-track-label="outsourcing_header">
          {t.common.ctaContact}
          <Icon name="arrow" size={18} />
        </a>
        <a href="#models-title" className="btn btn-secondary btn-lg">
          {page.models.title}
        </a>
      </PageHeader>

      <div className="container">
        <TrustList className="trust-points-light" label={t.pages.home.hero.trustLabel} />
      </div>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <SectionHead id="why-title" eyebrow={page.why.eyebrow} title={page.why.title} lede={page.why.lede} />
          <div className="compare">
            <div className="compare-col compare-inhouse reveal">
              <h3>{page.why.inhouse.title}</h3>
              <ul>
                {page.why.inhouse.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="compare-col compare-tictek reveal">
              <h3>{page.why.tictek.title}</h3>
              <ul className="check-list">
                {page.why.tictek.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="madagascar-title">
        <div className="container">
          <SectionHead id="madagascar-title" eyebrow={page.madagascar.eyebrow} title={page.madagascar.title} />
          <FeatureGrid items={page.madagascar.items} columns={4} className="feature-grid-cards" />
          <div className="remote-benefits reveal">
            <h3>{page.remote.title}</h3>
            <ul className="check-list check-list-2">
              {page.remote.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="models-title">
        <div className="container">
          <SectionHead id="models-title" eyebrow={page.models.eyebrow} title={page.models.title} lede={page.models.lede} />
          <ModelCards />
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="audiences-title">
        <div className="container">
          <SectionHead id="audiences-title" title={page.audiences.title} />
          <FeatureGrid items={page.audiences.items} columns={3} className="feature-grid-cards" />
        </div>
      </section>

      <section className="section" aria-labelledby="skills-title">
        <div className="container">
          <SectionHead id="skills-title" title={page.skills.title} lede={page.skills.lede} />
          <dl className="skills">
            {t.pages.about.skills.map((group) => (
              <div key={group.name}>
                <dt>{group.name}</dt>
                <dd>
                  <TechList items={group.items} />
                </dd>
              </div>
            ))}
          </dl>
          <CtaInline title={page.ctaMid.title} text={page.ctaMid.text} trackLabel="outsourcing_mid" />
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="process-title">
        <div className="container">
          <SectionHead id="process-title" title={page.process.title} lede={page.process.lede} />
          <ProcessSteps />
        </div>
      </section>

      <Security />

      <section className="section section-alt" aria-labelledby="maintenance-title">
        <div className="container two-col">
          <div>
            <h2 id="maintenance-title">{page.maintenance.title}</h2>
            <p className="lede">{page.maintenance.text}</p>
          </div>
          <div>
            <ul className="check-list">
              {page.maintenance.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-link">
              <a href={`${href('services')}#support`} className="text-link">
                {page.maintenance.link}
                <Icon name="arrow" size={18} />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <SectionHead id="faq-title" title={page.faqTitle} />
          <Faq items={page.faq} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
