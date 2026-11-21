import { renderToString } from 'react-dom/server';
import { useLocale } from '../i18n';
import ContactList from '../components/ContactList';
import PageHeader from '../components/PageHeader';
import ContactForm from '../forms/ContactForm';
import Guarantees from '../components/Guarantees';
import Icon from '../components/Icon';
import { bookingUrl } from '../data/site';

export default function Contact() {
  const { lang, t } = useLocale();
  const page = t.pages.contact;
  // Rendered separately so src/client/forms.jsx can hydrate it as an island.
  const formHtml = renderToString(<ContactForm lang={lang} />);

  return (
    <>
      <PageHeader pageId="contact" title={page.h1} lede={page.lede} />

      <div className="container contact-grid">
        <section className="contact-main" aria-labelledby="form-title">
          <h2 id="form-title" className="contact-form-title">
            {page.formTitle}
          </h2>
          <div id="form" data-form="contact" data-lang={lang} dangerouslySetInnerHTML={{ __html: formHtml }} />
        </section>

        <aside className="contact-aside">
          <section aria-labelledby="next-title">
            <h2 id="next-title">{page.nextTitle}</h2>
            <ol className="next-steps">
              {page.next.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="guarantees-title">
            <h2 id="guarantees-title">{t.common.guarantees.title}</h2>
            <Guarantees compact />
          </section>

          {bookingUrl && (
            <p>
              <a href={bookingUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" data-track="book_call">
                <Icon name="calendar" size={18} />
                {t.common.booking}
              </a>
            </p>
          )}

          <section aria-labelledby="direct-title">
            <h2 id="direct-title">{page.directTitle}</h2>
            <ContactList />
          </section>
        </aside>
      </div>
    </>
  );
}
