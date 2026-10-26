import { useLocale } from '../i18n';
import PageHeader from '../components/PageHeader';
import { TechList } from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';

export default function About() {
  const { t } = useLocale();
  const page = t.pages.about;

  return (
    <>
      <PageHeader pageId="about" title={page.h1} lede={page.lede} />

      <div className="container prose-grid">
        {page.sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </section>
        ))}
      </div>

      <section className="section" aria-labelledby="skills-title">
        <div className="container">
          <div className="panel">
            <h2 id="skills-title">{page.skillsTitle}</h2>
            <dl className="skills">
              {page.skills.map((group) => (
                <div key={group.name}>
                  <dt>{group.name}</dt>
                  <dd>
                    <TechList items={group.items} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
