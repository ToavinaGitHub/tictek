import { useLocale } from '../i18n';

/**
 * One case study from data/projects.js. Optional fields (results, link,
 * image…) are simply not rendered when missing.
 * `compact` is the home page teaser; the full version is used on the work page.
 */
export default function ProjectCard({ project, compact = false, headingLevel = 2 }) {
  const { lang, t, href } = useLocale();
  const labels = t.pages.work.labels;
  const Heading = `h${headingLevel}`;
  const SubHeading = `h${headingLevel + 1}`;
  const text = (field) => project[field]?.[lang];

  if (compact) {
    return (
      <article className="card project-card">
        <p className="eyebrow">{t.pages.work.kinds[project.kind]}</p>
        <Heading className="card-title">
          <a href={`${href('work')}#${project.slug}`}>{text('title')}</a>
        </Heading>
        <p>{text('problem')}</p>
        {project.stack?.length > 0 && <TechList items={project.stack} />}
      </article>
    );
  }

  return (
    <article className="project" id={project.slug}>
      <header className="project-head">
        <p className="eyebrow">
          {t.pages.work.kinds[project.kind]}
          {project.year && ` · ${project.year}`}
        </p>
        <Heading>{text('title')}</Heading>
      </header>

      {project.image && (
        <img
          className="project-image"
          src={project.image.src}
          width={project.image.width}
          height={project.image.height}
          alt={project.image.alt?.[lang] ?? ''}
          loading="lazy"
          decoding="async"
        />
      )}

      <dl className="project-details">
        {['context', 'problem', 'solution', 'role'].map(
          (field) =>
            text(field) && (
              <div key={field}>
                <dt>{labels[field]}</dt>
                <dd>{text(field)}</dd>
              </div>
            ),
        )}
      </dl>

      {text('features')?.length > 0 && (
        <>
          <SubHeading className="project-subtitle">{labels.features}</SubHeading>
          <ul className="check-list">
            {text('features').map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {text('results')?.length > 0 && (
        <>
          <SubHeading className="project-subtitle">{labels.results}</SubHeading>
          <ul className="check-list">
            {text('results').map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {project.stack?.length > 0 && (
        <>
          <SubHeading className="project-subtitle">{labels.stack}</SubHeading>
          <TechList items={project.stack} />
        </>
      )}

      <div className="project-links">
        {project.services?.map((id) => (
          <a key={id} href={`${href('services')}#${id}`} className="text-link">
            {t.services[id].title}
          </a>
        ))}
        {project.link && (
          <a href={project.link} className="text-link" target="_blank" rel="noopener noreferrer">
            {labels.link}
          </a>
        )}
      </div>
    </article>
  );
}

export function TechList({ items }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
