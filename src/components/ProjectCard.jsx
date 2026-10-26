import { useLocale } from '../i18n';
import Icon from './Icon';

/**
 * One project from data/projects.js: screenshot, title, short summary, key
 * technologies and a link to the project. Same card on the home page
 * (`teaser`: the whole card links to the work page) and on the work page.
 * `priority`: the first image of the work page is the largest visible
 * element (LCP), so it loads eagerly instead of lazily.
 */
export default function ProjectCard({ project, teaser = false, headingLevel = 2, priority = false }) {
  const { lang, t, href } = useLocale();
  const Heading = `h${headingLevel}`;
  const { image } = project;

  return (
    <article className="card card-service project-card" id={teaser ? undefined : project.slug}>
      {image && (
        <img
          className="project-thumb"
          src={image.small ?? image.src}
          srcSet={image.small ? `${image.small} 960w, ${image.src} ${image.width}w` : undefined}
          sizes="(min-width: 1240px) 380px, (min-width: 960px) 31vw, (min-width: 640px) 50vw, 100vw"
          width={image.width}
          height={image.height}
          alt={teaser ? '' : image.alt[lang]}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : undefined}
          decoding="async"
        />
      )}

      <Heading className="card-title">
        {teaser ? (
          <a href={`${href('work')}#${project.slug}`} className="stretched-link">
            {project.title[lang]}
          </a>
        ) : (
          project.title[lang]
        )}
      </Heading>
      <p>{project.summary[lang]}</p>
      <TechList items={project.stack} />

      {!teaser && project.link && (
        <p className="project-links">
          <a href={project.link} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
            {project.linkLabel?.[lang] ?? t.pages.work.labels.link}
            <Icon name="arrow" size={16} />
          </a>
        </p>
      )}
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
