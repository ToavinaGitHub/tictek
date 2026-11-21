import { useLocale } from '../i18n';

/** Words wrapped for the word-by-word entrance; the heading text itself is unchanged. */
export function SplitWords({ text }) {
  return text.split(' ').map((word, i) => (
    <span key={i}>
      {i > 0 && ' '}
      <span className="word">
        <span>{word}</span>
      </span>
    </span>
  ));
}

/**
 * Visible breadcrumb + H1 + intro for inner pages. JSON-LD breadcrumbs are
 * emitted in seo/head.js. `parent`: optional pageId between Home and this
 * page. `children`: optional actions under the intro (CTA buttons).
 */
export default function PageHeader({ pageId, parent, title, lede, eyebrow, children }) {
  const { t, href } = useLocale();

  return (
    <div className="page-header">
      <div className="container">
        <nav aria-label={t.common.breadcrumb} className="breadcrumb">
          <ol>
            <li>
              <a href={href('home')}>{t.common.nav.home}</a>
            </li>
            {parent && (
              <li>
                <a href={href(parent)}>{t.common.nav[parent]}</a>
              </li>
            )}
            <li aria-current="page">{t.common.nav[pageId]}</li>
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow page-eyebrow">{eyebrow}</p>}
        <h1 className="split-title">
          <SplitWords text={title} />
        </h1>
        {lede && <p className="lede">{lede}</p>}
        {children && <div className="actions page-actions">{children}</div>}
      </div>
    </div>
  );
}
