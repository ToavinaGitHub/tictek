import { useScrolled } from '../hooks/useScrollSpy';
import { usePreferences } from '../context/PreferencesContext';

export default function BackToTop() {
  const { t } = usePreferences();
  const visible = useScrolled(100);

  function handleClick(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <a
      href="#hero"
      onClick={handleClick}
      className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      style={{ display: visible ? 'flex' : 'none' }}
      aria-label={t.backToTop}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}
