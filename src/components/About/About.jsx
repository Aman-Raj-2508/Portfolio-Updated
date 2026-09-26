import React, { useEffect } from 'react';
import {
  FiMapPin, FiMail, FiCalendar, FiBriefcase,
  FiCode, FiUser, FiDownload
} from 'react-icons/fi';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './About.css';

const INFO_ITEMS = [
  { icon: <FiUser />, label: 'Name', value: 'Aman Raj' },
  { icon: <FiMapPin />, label: 'Location', value: 'India' },
  { icon: <FiBriefcase />, label: 'Role', value: 'Data Analyst · Full Stack Developer' },
  { icon: <FiCalendar />, label: 'Experience', value: '1+ Year' },
  { icon: <FiMail />, label: 'Email', value: 'aman.raj.sde@gmail.com' },
  { icon: <FiCode />, label: 'Stack', value: 'Power BI · Fabric · React · Node.js' },
];

const About = () => {
  useScrollAnimation();

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get to Know Me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A Data Analyst and Full Stack Developer who turns business data into
            actionable insights and reliable digital solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* ── Left – Avatar card ── */}
          <div className="about-image-col reveal-left">
            <div className="about-avatar-card glass-card">
              <div className="about-avatar">
                <img src="/profile.jpg" alt="Aman Raj" className="about-photo" />
                <div className="avatar-ring"></div>
              </div>
              <div className="avatar-tag">
                <span className="tag-dot"></span>
                Available for work
              </div>
            </div>

            {/* Floating mini-cards */}
            <div className="float-card fc-exp glass-card">
              <span className="fc-number gradient-text">1+</span>
              <span className="fc-label">Years Experience</span>
            </div>
            <div className="float-card fc-proj glass-card">
              <span className="fc-number gradient-text">5+</span>
              <span className="fc-label">Projects Built</span>
            </div>
          </div>

          {/* ── Right – Content ── */}
          <div className="about-content reveal-right">
            <h3 className="about-heading">
              Building business-ready insights and full stack solutions with{' '}
              <span className="gradient-text">data and technology</span>
            </h3>

            <p className="about-bio">
              Hi, my name is <strong>Aman Raj</strong>. I am a <strong>Data Analyst</strong> and{' '}
              <strong>Full Stack Developer</strong> with a blend of analytics, reporting, product
              development, and problem-solving skills. I work with business data, automate validation
              workflows, and build dashboards and web experiences that make complex information easier
              to understand and act on.
            </p>
            <p className="about-bio">
              My expertise spans <strong>Power BI</strong>, <strong>Microsoft Fabric</strong>,{' '}
              <strong>Tableau</strong>, <strong>SQL</strong>, <strong>Python</strong>,{' '}
              <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. I enjoy
              turning raw information into meaningful insights while building end-to-end solutions that
              combine data analysis, workflow automation, APIs, and clear user experiences.
            </p>

            {/* Info grid */}
            <div className="info-grid">
              {INFO_ITEMS.map(({ icon, label, value }) => (
                <div key={label} className="info-item">
                  <span className="info-icon">{icon}</span>
                  <div>
                    <span className="info-label">{label}</span>
                    <span className="info-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Let's Talk
              </a>
              <a className="btn-outline" href="/Aman_Resume.pdf" target="_blank" rel="noopener noreferrer" download="Aman_Raj_Resume.pdf">
                <FiDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
