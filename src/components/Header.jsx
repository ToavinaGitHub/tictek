import { brand, languageNames, languages, navIds, paths } from '../data/site';
import { useLocale } from '../i18n';
import Flag from './Flag';
import Icon from './Icon';

// The menu toggle is wired up by src/client/main.js.

// A blog post highlights "Blog" without being that page ("true", not "page").
const navCurrent = (id, pageId) => {
  if (id === pageId) return 'page';
  if (id === 'blog' && pageId.startsWith('post:')) return 'true';
  return undefined;
};

export default function Header({ pageId }) {
  const { lang, t, href } = useLocale();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={href('home')} className="brand" aria-label={`${brand.name}, ${t.common.nav.home}`}>
          <img src={brand.logo} alt="" width={275} height={89} className="brand-logo" />
        </a>

        <nav id="site-nav" className="site-nav" aria-label={t.common.mainNav}>
          <ul>
            {navIds.map((id) => (
              <li key={id}>
                <a href={href(id)} aria-current={navCurrent(id, pageId)}>
                  {t.common.nav[id]}
                </a>
              </li>
            ))}
            <li>
              <a
                href={href('contact')}
                className="btn btn-primary btn-sm"
                aria-current={pageId === 'contact' ? 'page' : undefined}
              >
                {t.common.nav.contact}
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-tools">
          <div className="lang-switch" role="group" aria-label={t.common.language}>
            {languages.map((code) =>
              code === lang ? (
                <span key={code} className="lang-option is-current" lang={code} aria-current="true">
                  <Flag code={code} />
                  <span aria-hidden="true">{code.toUpperCase()}</span>
                  <span className="visually-hidden">{languageNames[code]}</span>
                </span>
              ) : (
                <a
                  key={code}
                  href={paths[code][pageId] ?? paths[code].home}
                  className="lang-option"
                  hrefLang={code}
                  lang={code}
                  title={languageNames[code]}
                >
                  <Flag code={code} />
                  <span aria-hidden="true">{code.toUpperCase()}</span>
                  <span className="visually-hidden">{languageNames[code]}</span>
                </a>
              ),
            )}
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded="false"
            aria-controls="site-nav"
            data-nav-toggle
          >
            <Icon name="menu" />
            <span>{t.common.menu}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
