import { useState } from 'react';
import { navLinks } from '../data/content';
import { useScrollSpy, useScrolled } from '../hooks/useScrollSpy';

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(45);
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3${scrolled ? ' sticky-top shadow-sm' : ''}`}>
      <a href="#hero" className="navbar-brand p-0">
        <span className="wordmark">T<span>I</span>c<span>T</span>eK</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Ouvrir le menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
        <div className="navbar-nav ms-auto py-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-item nav-link${activeId === link.href.slice(1) ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
