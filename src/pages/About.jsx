import { team } from '../data/team';
import { useLocale } from '../i18n';
import BrandIcon from '../components/BrandIcon';
import PageHeader from '../components/PageHeader';
import { TechList } from '../components/ProjectCard';
import CtaBand from '../components/CtaBand';

export default function About() {
  const { lang, t } = useLocale();
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

      {team.length > 0 && (
        <section className="section" aria-labelledby="team-title">
          <div className="container">
            <div className="section-head">
              <h2 id="team-title">{page.teamTitle}</h2>
              <p>{page.teamLede}</p>
            </div>
            <ul className="team-grid">
              {team.map((member) => (
                <li className="team-card" key={member.name}>
                  <img src={member.photo} alt={member.name} width={480} height={600} loading="lazy" className="team-photo" />
                  <div className="team-body">
                    <h3>{member.name}</h3>
                    <p className="team-role">
                      <strong>{member.role[lang]}</strong>
                      {member.title[lang]}
                    </p>
                    <TechList items={member.focus[lang]} />
                    {member.linkedin && (
                      <a href={member.linkedin} className="team-link" target="_blank" rel="noopener noreferrer">
                        <BrandIcon name="linkedin" size={18} />
                        <span className="visually-hidden">{member.name} </span>LinkedIn
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
