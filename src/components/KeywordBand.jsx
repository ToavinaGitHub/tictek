import { useLocale } from '../i18n';

// Large scrolling band of what TicTek builds, above the footer on every page.
// Rendered twice for a seamless loop; purely decorative.
export default function KeywordBand() {
  const { t } = useLocale();
  const list = (
    <span className="kband-list">
      {t.common.keywords.map((word) => (
        <span key={word}>{word}</span>
      ))}
    </span>
  );

  return (
    <div className="kband" aria-hidden="true">
      <div className="kband-track">
        {list}
        {list}
      </div>
    </div>
  );
}
