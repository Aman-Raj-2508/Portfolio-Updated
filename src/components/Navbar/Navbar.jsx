import React, { useState, useEffect, useCallback } from 'react';
import {
  FiMenu, FiX, FiCode, FiSun, FiMoon,
  FiHome, FiUser, FiBarChart2, FiBriefcase, FiFolder, FiMail,
} from 'react-icons/fi';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home', icon: FiHome },
  { label: 'About', href: '#about', icon: FiUser },
  { label: 'Skills', href: '#skills', icon: FiBarChart2 },
  { label: 'Experience', href: '#experience', icon: FiBriefcase },
  { label: 'Projects', href: '#projects', icon: FiFolder },
  { label: 'Contact', href: '#contact', icon: FiMail },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const current = ids.find((id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const { top, bottom } = el.getBoundingClientRect();
      return top <= 120 && bottom >= 120;
    });
    if (current) setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setIsMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (href) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>
          <span className="logo-icon"><FiCode /></span>
          <span className="logo-text">
            Aman<span className="gradient-text">Raj</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href, icon: NavIcon }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
              >
                <NavIcon aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-primary nav-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
        >
          Hire Me
        </a>

        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${isMenuOpen ? ' open' : ''}`} aria-hidden={!isMenuOpen}>
        <ul>
          {NAV_LINKS.map(({ label, href, icon: NavIcon }) => (
            <li key={label}>
              <a
                href={href}
                className={`mobile-link${activeSection === href.slice(1) ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
              >
                <NavIcon aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn-primary mobile-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
