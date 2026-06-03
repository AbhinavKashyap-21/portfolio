import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoSpinning, setLogoSpinning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLogoClick = () => {
    setLogoSpinning(true);
    setTimeout(() => setLogoSpinning(false), 600);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">
        {/* Hexagonal Logo */}
        <a
          href="#"
          className={`navbar__logo ${logoSpinning ? 'navbar__logo--spinning' : ''}`}
          onClick={handleLogoClick}
          aria-label="Home"
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__logo-svg"
          >
            <polygon
              points="21,1 39,11 39,31 21,41 3,31 3,11"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="navbar__hex"
            />
            <text
              x="21"
              y="26"
              textAnchor="middle"
              fill="currentColor"
              fontSize="16"
              fontFamily="var(--font-mono)"
              fontWeight="600"
              className="navbar__logo-letter"
            >
              N
            </text>
          </svg>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar__links">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <span className="navbar__chevron">&gt; </span>
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="navbar__resume"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
          >
            Resume
          </a>
          <button
            className="navbar__theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            style={{ animationDelay: `${(navLinks.length + 2) * 100}ms` }}
          >
            {theme === 'dark' ? (
              /* Sun icon */
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="navbar__theme-icon navbar__theme-icon--sun"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon */
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="navbar__theme-icon navbar__theme-icon--moon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Hamburger Button (mobile) */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`navbar__mobile-overlay ${menuOpen ? 'navbar__mobile-overlay--open' : ''}`}>
        <div className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={handleNavClick}
              style={{ transitionDelay: menuOpen ? `${(i + 1) * 80}ms` : '0ms' }}
            >
              <span className="navbar__chevron">&gt; </span>
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="navbar__resume navbar__resume--mobile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            style={{ transitionDelay: menuOpen ? `${(navLinks.length + 1) * 80}ms` : '0ms' }}
          >
            Resume
          </a>
          <button
            className="navbar__theme-toggle navbar__theme-toggle--mobile"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            style={{ transitionDelay: menuOpen ? `${(navLinks.length + 2) * 80}ms` : '0ms' }}
          >
            {theme === 'dark' ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="navbar__theme-icon navbar__theme-icon--sun"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="navbar__theme-icon navbar__theme-icon--moon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
