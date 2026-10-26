import { renderToString } from 'react-dom/server';
import { contactInfo } from '../data/site';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import PageHeader from '../components/PageHeader';
import ContactForm from '../forms/ContactForm';

export default function Contact() {
  const { lang, t } = useLocale();
  const page = t.pages.contact;
  // Rendered separately so src/client/forms.jsx can hydrate it as an island.
  const formHtml = renderToString(<ContactForm lang={lang} />);

  return (
    <>
      <PageHeader pageId="contact" title={page.h1} lede={page.lede} />

      <div className="container contact-grid">
        <div data-form="contact" data-lang={lang} dangerouslySetInnerHTML={{ __html: formHtml }} />

        <aside className="contact-aside">
          <section aria-labelledby="next-title">
            <h2 id="next-title">{page.nextTitle}</h2>
            <ol className="next-steps">
              {page.next.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="direct-title">
            <h2 id="direct-title">{page.directTitle}</h2>
            <ul className="footer-contact">
              <li>
                <Icon name="mail" size={18} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <Icon name="phone" size={18} />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <Icon name="pin" size={18} />
                <span>{t.footer.location}</span>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </>
  );
}
