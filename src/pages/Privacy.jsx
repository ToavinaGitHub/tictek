import { contactInfo } from '../data/site';
import { useLocale } from '../i18n';
import PageHeader from '../components/PageHeader';

/** Paragraph text with the contact email turned into a link. */
function WithEmail({ text }) {
  const [before, after] = text.split('{email}');
  if (after === undefined) return text;
  return (
    <>
      {before}
      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      {after}
    </>
  );
}

export default function Privacy() {
  const { t } = useLocale();
  const page = t.pages.privacy;

  return (
    <>
      <PageHeader pageId="privacy" title={page.h1} lede={page.lede} />
      <div className="container prose">
        {page.sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={text}>
                <WithEmail text={text} />
              </p>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
