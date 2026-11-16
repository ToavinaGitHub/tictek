import { findPost } from '../data/site';
import { useLocale } from '../i18n';
import Icon from '../components/Icon';
import CtaBand from '../components/CtaBand';
import { formatDate } from '../components/PostCard';

/** One blog post, rendered for each entry of data/posts.js (pageId "post:<slug>"). */
export default function BlogPost({ pageId }) {
  const { lang, t, href } = useLocale();
  const post = findPost(pageId);
  const { image } = post;

  return (
    <>
      <article className="post">
        <header className="page-header">
          <div className="container post-container">
            <nav aria-label={t.common.breadcrumb} className="breadcrumb">
              <ol>
                <li>
                  <a href={href('home')}>{t.common.nav.home}</a>
                </li>
                <li>
                  <a href={href('blog')}>{t.common.nav.blog}</a>
                </li>
                <li aria-current="page">{post.title[lang]}</li>
              </ol>
            </nav>
            <h1>{post.title[lang]}</h1>
            <time className="post-date" dateTime={post.date}>
              {formatDate(post.date, lang)}
            </time>
          </div>
        </header>

        <div className="container post-container post-content">
          <img
            className="post-image"
            src={image.src}
            srcSet={`${image.small} 960w, ${image.src} ${image.width}w`}
            sizes="(min-width: 860px) 800px, 100vw"
            width={image.width}
            height={image.height}
            alt={image.alt[lang]}
            fetchpriority="high"
            decoding="async"
          />
          {post.body[lang].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="post-back">
            <a href={href('blog')} className="text-link">
              <Icon name="arrow" size={18} className="icon icon-back" />
              {t.pages.blog.allPosts}
            </a>
          </p>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
