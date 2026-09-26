import React from 'react';
import { FiCode, FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const FOOTER_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'       },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Contact',    href: '#contact'     },
];

const SOCIALS = [
  { icon: <FiGithub />,   href: 'https://github.com/Aman-Raj-2508',                 label: 'GitHub'   },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/aman-raj-1a4a35252/', label: 'LinkedIn' },
  { icon: <FiTwitter />,  href: 'https://x.com/amansingh_2508',                     label: 'Twitter'  },
  { icon: <SiLeetcode/>,  href: 'https://leetcode.com/u/amansingh_2508/',          label: 'LeetCode' },
  { icon: <FiMail />,     href: 'mailto:aman.raj.sde@gmail.com',                   label: 'Email'    },
];

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      {/* Top wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--bg-secondary)"
          />
        </svg>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon"><FiCode /></span>
                <span className="logo-text">Aman<span className="gradient-text">Raj</span></span>
              </div>
              <p className="footer-tagline">
                Data Analyst and Full Stack Developer focused on turning business data
                into actionable insights and building clean, reliable web experiences.
              </p>
              <div className="footer-socials">
                {SOCIALS.map(({ icon, href, label }) => (
                  <a key={label} href={href} className="footer-social" target="_blank" rel="noopener noreferrer" aria-label={label}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {FOOTER_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="footer-tech-col">
              <h4 className="footer-col-title">Built With</h4>
              <div className="footer-stack">
                {['React.js','Node.js','Express.js','MongoDB','Power BI','Microsoft Fabric','SQL','Python'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="footer-availability">
                <span className="avail-dot"></span>
                Available for new projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} Aman Raj. All rights reserved.
            Built with <span className="heart">❤️</span> using React and modern web technologies.
          </p>
          <button className="back-to-top" onClick={scrollTop} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
