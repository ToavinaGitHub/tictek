import { paths, postPageId } from '../data/site';
import { useLocale } from '../i18n';
import Icon from './Icon';

/** "11 novembre 2026" / "November 11, 2026". Dates are calendar days: format in UTC. */
export function formatDate(date, lang) {
  return new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}

/** One post from data/posts.js on the blog page: image, date, title, excerpt. */
export default function PostCard({ post, priority = false }) {
  const { lang, t } = useLocale();
  const { image } = post;

  return (
    <article className="card card-service project-card">
      <img
        className="project-thumb"
        src={image.small}
        srcSet={`${image.small} 960w, ${image.src} ${image.width}w`}
        sizes="(min-width: 1240px) 380px, (min-width: 960px) 31vw, (min-width: 640px) 50vw, 100vw"
        width={image.width}
        height={image.height}
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : undefined}
        decoding="async"
      />
      <time className="post-date" dateTime={post.date}>
        {formatDate(post.date, lang)}
      </time>
      <h2 className="card-title">
        <a href={paths[lang][postPageId(post.slug)]} className="stretched-link">
          {post.title[lang]}
        </a>
      </h2>
      <p>{post.excerpt[lang]}</p>
      <span className="card-more" aria-hidden="true">
        {t.pages.blog.readMore}
        <Icon name="arrow" size={16} />
      </span>
    </article>
  );
}
