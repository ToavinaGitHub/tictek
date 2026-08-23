import { useScrolled } from '../hooks/useScrollSpy';

export default function BackToTop() {
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
      aria-label="Retour en haut de page"
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}
