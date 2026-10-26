import { useLocale } from '../i18n';

/** Visible breadcrumb + H1 + intro for inner pages. JSON-LD breadcrumbs are emitted in seo/head.js. */
export default function PageHeader({ pageId, title, lede }) {
  const { t, href } = useLocale();

  return (
    <div className="page-header">
      <div className="container">
        <nav aria-label={t.common.breadcrumb} className="breadcrumb">
          <ol>
            <li>
              <a href={href('home')}>{t.common.nav.home}</a>
            </li>
            <li aria-current="page">{t.common.nav[pageId]}</li>
          </ol>
        </nav>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </div>
  );
}
