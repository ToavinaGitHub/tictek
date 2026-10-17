import { useState } from 'react';
import { sectionIds } from '../data/content';
import { usePreferences } from '../context/PreferencesContext';
import { useScrollSpy, useScrolled } from '../hooks/useScrollSpy';
import Logo from './Logo';

export default function Navbar() {
  const { t } = usePreferences();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(45);
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3${scrolled ? ' sticky-top shadow-sm' : ''}`}>
      <a href="#hero" className="navbar-brand p-0">
        <Logo />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-label={t.nav.openMenu}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
        <div className="navbar-nav ms-auto py-0">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-item nav-link${activeId === id ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {t.nav.links[id]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
