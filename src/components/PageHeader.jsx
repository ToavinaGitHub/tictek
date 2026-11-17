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

/** Decorative shapes of the inner-page headers (floating disc and square). */
export function HeaderArt() {
  return (
    <div className="ph-art" aria-hidden="true">
      <span className="ph-disc" />
      <span className="ph-square" />
    </div>
  );
}

/** Visible breadcrumb + H1 + intro for inner pages. JSON-LD breadcrumbs are emitted in seo/head.js. */
export default function PageHeader({ pageId, title, lede }) {
  const { t, href } = useLocale();

  return (
    <div className="page-header">
      <HeaderArt />
      <div className="container">
        <nav aria-label={t.common.breadcrumb} className="breadcrumb">
          <ol>
            <li>
              <a href={href('home')}>{t.common.nav.home}</a>
            </li>
            <li aria-current="page">{t.common.nav[pageId]}</li>
          </ol>
        </nav>
        <h1 className="split-title">
          <SplitWords text={title} />
        </h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </div>
  );
}
