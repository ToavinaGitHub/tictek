import { contactHref } from '../data/site';
import { findMarket } from '../data/markets';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import SectionHead from '../components/SectionHead';
import FeatureGrid from '../components/FeatureGrid';
import OfferCards from '../components/OfferCards';
import Faq from '../components/Faq';
import Clocks from '../components/Clocks';
import CtaInline from '../components/CtaInline';
import CtaBand from '../components/CtaBand';

// One country page (data/markets.js), copy in locales pages.<marketId>.
export default function Market({ pageId }) {
  const { t, href } = useLocale();
  const market = findMarket(pageId);
  const page = t.pages[pageId];

  return (
    <>
      <PageHeader pageId={pageId} parent="outsourcing" title={page.h1} lede={page.lede}>
        <a
          href={contactHref(href('contact'))}
          className="btn btn-primary btn-lg"
          data-track="cta_click"
          data-track-label={`market_${pageId}_header`}
        >
          {t.common.ctaContact}
          <Icon name="arrow" size={18} />
        </a>
        <a href={href('outsourcing')} className="btn btn-secondary btn-lg">
          {t.common.nav.outsourcing}
        </a>
      </PageHeader>

      <section className="section section-first" aria-labelledby="intro-title">
        <div className="container two-col">
          <div>
            <h2 id="intro-title">{page.intro.title}</h2>
          </div>
          <div className="prose">
            {page.intro.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="reasons-title">
        <div className="container">
          <SectionHead id="reasons-title" title={page.reasons.title} />
          <FeatureGrid items={page.reasons.items} columns={4} className="feature-grid-cards" />
        </div>
      </section>

      <section className="section section-clients" aria-labelledby="time-title">
        <div className="container">
          <Clocks clocks={market.clocks}>
            <h2 id="time-title">{page.time.title}</h2>
            <p className="clients-lede">{page.time.lede}</p>
          </Clocks>
        </div>
      </section>

      <section className="section" aria-labelledby="cities-title">
        <div className="container">
          <SectionHead id="cities-title" title={page.cities.title} lede={page.cities.lede} />
          <ul className="city-list">
            {page.cities.list.map((city) => (
              <li key={city}>
                <Icon name="pin" size={18} />
                {city}
              </li>
            ))}
          </ul>
          <p className="city-note">{page.cities.note}</p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="market-services-title">
        <div className="container">
          <SectionHead id="market-services-title" title={page.services.title} lede={page.services.lede} />
          <OfferCards ids={page.services.ids} />
          <CtaInline title={t.pages.outsourcing.ctaMid.title} text={t.pages.outsourcing.ctaMid.text} trackLabel={`market_${pageId}_mid`} />
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
