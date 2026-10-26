import { useLocale } from '../i18n';
import Icon from './Icon';

// Illustration of what TicTek builds (web app, mobile app, API), drawn in
// HTML/CSS: no image request, crisp at any size. Purely decorative, so it is
// hidden from assistive tech and shows no figures that could read as claims.
const BAR_COUNT = 7; // heights are set in CSS (.bars span:nth-child)

export default function HeroVisual() {
  const { t } = useLocale();
  const v = t.pages.home.hero.visual;

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="mock-browser">
        <div className="mock-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="mock-url">{v.url}</span>
        </div>
        <div className="mock-app">
          <div className="mock-side">
            <span className="mock-logo" />
            <span className="mock-nav is-active" />
            <span className="mock-nav" />
            <span className="mock-nav" />
            <span className="mock-nav" />
          </div>
          <div className="mock-main">
            <p className="mock-title">{v.dashboard}</p>
            <div className="mock-kpis">
              <div>
                <span className="mock-label">{v.orders}</span>
                <span className="mock-line w-60" />
              </div>
              <div>
                <span className="mock-label">{v.clients}</span>
                <span className="mock-line w-40" />
              </div>
            </div>
            <div className="mock-chart">
              <span className="mock-label">{v.activity}</span>
              <div className="bars">
                {Array.from({ length: BAR_COUNT }, (_, i) => (
                  <span key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mock-phone">
        <span className="notch" />
        <span className="mock-line w-50 strong" />
        {[0, 1, 2].map((i) => (
          <div className="mock-row" key={i}>
            <span className="avatar" />
            <span className="mock-line w-70" />
          </div>
        ))}
        <span className="mock-pill">
          <Icon name="check" size={14} />
          {v.synced}
        </span>
      </div>

      <div className="mock-code">
        <p>
          <b>POST</b> /api/orders
        </p>
        <p className="ok">201 Created</p>
      </div>

      <div className="mock-flow">
        <Icon name="automation" size={16} />
        {v.automation}
      </div>
    </div>
  );
}
