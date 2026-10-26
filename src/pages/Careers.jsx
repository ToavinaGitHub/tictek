import { renderToString } from 'react-dom/server';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import CareersForm from '../forms/CareersForm';

export default function Careers() {
  const { lang, t } = useLocale();
  const page = t.pages.careers;
  // Rendered separately so src/client/forms.jsx can hydrate it as an island.
  const formHtml = renderToString(<CareersForm lang={lang} />);

  return (
    <>
      <PageHeader pageId="careers" title={page.h1} lede={page.lede} />

      <section className="container" aria-labelledby="why-title">
        <h2 id="why-title" className="section-title-sm">
          {page.whyTitle}
        </h2>
        <ul className="grid grid-2 trust-list">
          {page.why.map((item) => (
            <li key={item.title}>
              <Icon name="check" className="icon trust-icon" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="apply-title">
        <div className="container contact-grid">
          <div>
            <h2 id="apply-title" className="section-title-sm">
              {page.formTitle}
            </h2>
            <div data-form="careers" data-lang={lang} dangerouslySetInnerHTML={{ __html: formHtml }} />
          </div>

          <aside className="contact-aside">
            <section aria-labelledby="profiles-title">
              <h2 id="profiles-title">{page.profilesTitle}</h2>
              <ul className="check-list">
                {page.profiles.map((profile) => (
                  <li key={profile}>{profile}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="process-title">
              <h2 id="process-title">{page.processTitle}</h2>
              <ol className="next-steps">
                {page.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
          </aside>
        </div>
      </section>
    </>
  );
}
