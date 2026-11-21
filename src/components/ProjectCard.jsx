import { useLocale } from '../i18n';
import Icon from './Icon';

/** Screenshot of a project (data/projects.js), responsive. */
function ProjectImage({ image, alt, priority = false, sizes }) {
  return (
    <img
      className="project-thumb"
      src={image.small ?? image.src}
      srcSet={image.small ? `${image.small} 960w, ${image.src} ${image.width}w` : undefined}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}

/** "Delivered as a service provider" label (projects.js origin). */
function OriginBadge({ origin }) {
  const { t } = useLocale();
  const label = origin && t.pages.work.labels.origin[origin];
  return label ? <p className="origin-badge">{label}</p> : null;
}

/**
 * One project teaser (home page): screenshot, title, summary and key
 * technologies; the whole card links to its case study on the work page.
 */
export default function ProjectCard({ project, headingLevel = 3 }) {
  const { lang, t, href } = useLocale();
  const Heading = `h${headingLevel}`;
  const { image } = project;

  return (
    <article className="card card-service project-card">
      {image && (
        <ProjectImage image={image} alt="" sizes="(min-width: 1240px) 380px, (min-width: 960px) 31vw, (min-width: 640px) 50vw, 100vw" />
      )}
      <OriginBadge origin={project.origin} />
      <Heading className="card-title">
        <a href={`${href('work')}#${project.slug}`} className="stretched-link" data-track="project_click" data-track-label={project.slug}>
          {project.title[lang]}
        </a>
      </Heading>
      <p>{project.summary[lang]}</p>
      <TechList items={project.stack} />
      <span className="card-more" aria-hidden="true">
        {t.pages.home.work.read}
        <Icon name="arrow" size={16} />
      </span>
    </article>
  );
}

/**
 * A full case study (work page): context, problem, solution, features,
 * TicTek's contribution, published facts, technologies, screenshot and link.
 * Projects without a caseStudy show their summary only.
 */
export function CaseStudy({ project, priority = false, reverse = false }) {
  const { lang, t } = useLocale();
  const { labels } = t.pages.work;
  const study = project.caseStudy;
  const { image } = project;

  return (
    <article className={`case-study${reverse ? ' is-reverse' : ''}`} id={project.slug} aria-labelledby={`${project.slug}-title`}>
      <div className="case-media">
        {image && (
          <ProjectImage
            image={image}
            alt={image.alt[lang]}
            priority={priority}
            sizes="(min-width: 1240px) 580px, (min-width: 960px) 48vw, 100vw"
          />
        )}
        {project.link && (
          <p className="project-links">
            <a
              href={project.link}
              className="btn btn-secondary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
              data-track="project_click"
              data-track-label={`${project.slug}_external`}
            >
              {project.linkLabel?.[lang] ?? labels.link}
              <Icon name="arrow" size={16} />
            </a>
          </p>
        )}
      </div>

      <div className="case-body">
        <OriginBadge origin={project.origin} />
        <h2 id={`${project.slug}-title`}>{project.title[lang]}</h2>
        <p className="case-summary">{project.summary[lang]}</p>

        {study && (
          <>
            <dl className="case-facts">
              <div>
                <dt>{labels.context}</dt>
                <dd>{study.context[lang]}</dd>
              </div>
              <div>
                <dt>{labels.problem}</dt>
                <dd>{study.problem[lang]}</dd>
              </div>
              <div>
                <dt>{labels.solution}</dt>
                <dd>{study.solution[lang]}</dd>
              </div>
            </dl>
            <h3>{labels.features}</h3>
            <ul className="check-list">
              {study.features[lang].map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <h3>{labels.role}</h3>
            <p>{study.role[lang]}</p>
            {study.facts && (
              <>
                <h3>{labels.facts}</h3>
                <ul className="case-numbers">
                  {study.facts[lang].map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}

        <h3>{labels.tech}</h3>
        <TechList items={project.stack} />
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
