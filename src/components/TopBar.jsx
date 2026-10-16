import { contactInfo, languages } from '../data/content';
import { usePreferences } from '../context/PreferencesContext';

export default function TopBar() {
  const { lang, setLang, theme, toggleTheme, t } = usePreferences();

  return (
    <div className="container-fluid px-4 px-lg-5 topbar-line">
      <div className="d-flex align-items-center justify-content-between" style={{ height: 40 }}>
        <div className="d-none d-lg-inline-flex align-items-center">
          <small className="me-3 topbar-item">
            <i className="fa fa-phone-alt me-2"></i>{contactInfo.phone}
          </small>
          <small className="topbar-item">
            <i className="fa fa-envelope-open me-2"></i>{contactInfo.email}
          </small>
        </div>

        <div className="d-flex align-items-center gap-2 ms-auto">
          <div className="lang-switch" role="group" aria-label={t.topbar.language}>
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                className={code === lang ? 'active' : ''}
                aria-pressed={code === lang}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.topbar.toLight : t.topbar.toDark}
            title={theme === 'dark' ? t.topbar.toLight : t.topbar.toDark}
          >
            <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon'}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
