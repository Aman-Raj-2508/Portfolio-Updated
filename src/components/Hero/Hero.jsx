import React, { useState, useEffect } from 'react';
import {
  FiGithub, FiLinkedin, FiTwitter, FiMail,
  FiDownload, FiArrowRight
} from 'react-icons/fi';
import { SiLeetcode, SiPowerbi } from 'react-icons/si';
import './Hero.css';

/* ── Typing animation roles ── */
const ROLES = [
  'Data Analyst',
  'Full Stack Developer',
  'Data Analyst & Full Stack Developer',
  'Power BI Specialist',
  'Problem Solver',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayed, setDisplayed] = useState('');

  /* Typing effect */
  useEffect(() => {
    const current = ROLES[roleIdx];
    const delay = isDeleting ? 45 : charIdx === current.length ? 1800 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setIsDeleting(true);
          setCharIdx(current.length);
        } else {
          setCharIdx((p) => p + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setIsDeleting(false);
          setRoleIdx((p) => (p + 1) % ROLES.length);
          setCharIdx(0);
        } else {
          setCharIdx((p) => p - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, roleIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* ── Background layers ── */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container hero-container">
        {/* ── Left content ── */}
        <div className="hero-content">
          <div className="available-badge">
            <span className="badge-pulse"></span>
            Open to Opportunities
          </div>

          <p className="greeting">
            <span className="wave-emoji">👋</span> Hi there, I'm
          </p>

          <h1 className="hero-name">
            <span className="gradient-text">Aman Raj</span>
          </h1>

          <h2 className="hero-role">
            <span className="role-prefix">I build as a </span>
            <span className="role-typed">{displayed}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-desc">
            I am a results-oriented <strong>Data Analyst</strong> and <strong>Full Stack Developer</strong>{' '}
            with hands-on experience in <strong>Power BI, Microsoft Fabric, Tableau, SQL, Excel, Python, React, Node.js, and MongoDB</strong>.
            I enjoy turning raw data into actionable insights, building scalable analytics workflows,
            and delivering end-to-end solutions that combine reporting, automation, and clean product experiences.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              View My Work <FiArrowRight />
            </button>
            <a
              className="btn-outline"
              href="/Aman_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Aman_Raj_Resume.pdf"
            >
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="socials">
            {[
              { icon: <FiGithub />, href: 'https://github.com/Aman-Raj-2508', label: 'GitHub' },
              { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/aman-raj-1a4a35252/', label: 'LinkedIn' },
              { icon: <FiTwitter />, href: 'https://x.com/amansingh_2508', label: 'Twitter' },
              { icon: <SiLeetcode />, href: 'https://leetcode.com/u/amansingh_2508/', label: 'LeetCode' },
              { icon: <FiMail />, href: 'mailto:aman.raj.sde@gmail.com', label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right visual ── */}
        <div className="hero-visual">
          <div className="profile-card glass-card">
            <div className="avatar-wrap">
              {/* Spinning rings */}
              <div className="ring ring-outer"></div>
              <div className="ring ring-inner"></div>
              {/* Profile photo */}
              <img src="/profile.jpg" alt="Aman Raj" className="avatar" />

              {/* Floating tech chips */}
              {[
                { label: 'React', icon: '⚛️', cls: 'chip-react' },
                { label: 'Node.js', icon: '🟢', cls: 'chip-node' },
                { label: 'MongoDB', icon: '🍃', cls: 'chip-mongo' },
                { label: 'Power BI', icon: <SiPowerbi />, cls: 'chip-powerbi' },
                { label: 'Fabric', icon: 'F', cls: 'chip-fabric' },
                { label: 'Express', icon: '⚡', cls: 'chip-express' },
              ].map(({ label, icon, cls }) => (
                <div key={label} className={`tech-chip ${cls}`}>
                  <span className="tech-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Quick stats row */}
            <div className="quick-stats">
              {[
                { value: '1+', label: 'Yr Exp' },
                { value: '5+', label: 'Projects' },
                { value: '250+', label: 'Problems' },
              ].map(({ value, label }, i) => (
                <React.Fragment key={label}>
                  {i > 0 && <div className="qs-divider"></div>}
                  <div className="qs-item">
                    <span className="qs-value gradient-text">{value}</span>
                    <span className="qs-label">{label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-track">
          <div className="scroll-thumb"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
