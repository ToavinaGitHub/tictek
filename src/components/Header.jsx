import { brand, languageNames, languages, navIds, paths } from '../data/site';
import { useLocale } from '../i18n';
import Flag from './Flag';
import Icon from './Icon';

// The menu toggle and the theme toggle are wired up by src/client/main.js.
export default function Header({ pageId }) {
  const { lang, t, href } = useLocale();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={href('home')} className="brand" aria-label={`${brand.name}, ${t.common.nav.home}`}>
          <img src={brand.logo} alt="" width={275} height={89} className="brand-logo logo-light" />
          <img src={brand.logoDark} alt="" width={275} height={89} className="brand-logo logo-dark" loading="lazy" />
        </a>

        <nav id="site-nav" className="site-nav" aria-label={t.common.mainNav}>
          <ul>
            {navIds.map((id) => (
              <li key={id}>
                <a href={href(id)} aria-current={id === pageId ? 'page' : undefined}>
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
                  <Flag lang={code} />
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
                  <Flag lang={code} />
                  <span aria-hidden="true">{code.toUpperCase()}</span>
                  <span className="visually-hidden">{languageNames[code]}</span>
                </a>
              ),
            )}
          </div>

          <button type="button" className="icon-btn theme-toggle" aria-pressed="false" data-theme-toggle title={t.common.darkMode}>
            <Icon name="moon" size={20} className="icon icon-moon" />
            <Icon name="sun" size={20} className="icon icon-sun" />
            <span className="visually-hidden">{t.common.darkMode}</span>
          </button>

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
