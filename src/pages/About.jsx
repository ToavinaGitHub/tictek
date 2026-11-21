import { team } from '../data/team';
import { useLocale } from '../i18n';
import PageHeader from '../components/PageHeader';
import SectionHead from '../components/SectionHead';
import TeamCards from '../components/TeamCards';
import Guarantees from '../components/Guarantees';
import { TechList } from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';

export default function About() {
  const { t } = useLocale();
  const page = t.pages.about;

  return (
    <>
      <PageHeader pageId="about" title={page.h1} lede={page.lede} />

      <div className="container prose-grid">
        {page.intro.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </div>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionHead id="values-title" title={page.valuesTitle} />
          <ol className="values-list">
            {page.values.map((value) => (
              <li key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {team.length > 0 && (
        <section className="section section-alt" aria-labelledby="team-title">
          <div className="container">
            <SectionHead id="team-title" title={page.teamTitle} lede={page.teamLede} />
            <TeamCards />
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <SectionHead id="work-title" title={page.workTitle} />
          <ul className="grid grid-2 trust-list">
            {page.work.map((item) => (
              <li key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="skills-title">
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

      <section className="section" aria-labelledby="commitment-title">
        <div className="container">
          <SectionHead id="commitment-title" title={page.commitmentTitle} lede={page.commitmentLede} />
          <Guarantees headingLevel={3} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
