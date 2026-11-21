import { useLocale } from '../i18n';
import PageHeader from '../components/PageHeader';
import ModelCards from '../components/ModelCards';
import ProcessSteps from '../components/ProcessSteps';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';

export default function Collaboration() {
  const { t } = useLocale();
  const page = t.pages.collaboration;

  return (
    <>
      <PageHeader pageId="collaboration" title={page.h1} lede={page.lede} />

      <div className="container">
        <ModelCards headingLevel={2} anchors />
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
            <Faq items={page.faq} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
