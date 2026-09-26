import React from 'react';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Experience.css';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Data Analyst',
    company: 'MAQ Software',
    location: 'India',
    duration: '2025 – Present',
    type: 'Professional Experience',
    description:
      'Joined MAQ Software as a Data Analyst and delivered business-intelligence projects for enterprise reporting. Worked across Tableau-to-Power BI migration, data cleaning, analysis, dashboard development, and reporting delivery.',
    achievements: [
      'Delivered multiple projects migrating Tableau reports and workbooks to Power BI while preserving business logic and reporting requirements.',
      'Developed enterprise-level Power BI reports and dashboards with clear KPIs, reusable models, and business-ready visualizations.',
      'Cleaned, transformed, and prepared data from multiple sources to improve reporting accuracy and consistency.',
      'Analysed business data to identify trends, generate insights, and support data-driven decision-making.',
      'Managed project delivery from requirements and analysis through dashboard development, validation, and final handover.',
      'Built automated validation and LLM-assisted review workflows to reduce repetitive checks and improve delivery efficiency.',
    ],
    tech: ['Power BI', 'Tableau', 'SQL', 'Python', 'Excel', 'Data Cleaning', 'Enterprise Reporting', 'LLM Automation'],
    link: 'https://github.com/Aman-Raj-2508',
    current: true,
  },
  {
    id: 2,
    role: 'Full Stack Agentic Solution',
    company: 'MAQ Software',
    location: 'India',
    duration: '2025 – Present',
    type: 'Agentic BI Engineering',
    description:
      'Developed a full stack agentic solution to accelerate Tableau-to-Power BI migration, reducing developer effort by approximately 50% while automating complex conversion and validation workflows.',
    achievements: [
      'Enabled migration of Tableau workbooks to Power BI, including RLS, bookmarks, visuals, images, measures, calculated columns, and parameters.',
      'Built user workflows to inspect metadata and similarity, select data sources, and change the selected source before conversion.',
      'Added publishing capabilities so converted reports can be deployed directly to a Power BI workspace.',
      'Used OpenAI keys to support DAX conversion and translate Tableau calculations into Power BI-compatible expressions.',
      'Enhanced the solution with harness engineering so the agent automatically detects issues, applies fixes, and repeats validation until the defined threshold is reached.',
      'Reduced repetitive developer effort by approximately 50% through automated conversion, validation, and correction loops.',
    ],
    tech: ['Power BI', 'Tableau', 'React', 'Node.js', 'OpenAI', 'DAX', 'RLS', 'Harness Engineering'],
    link: 'https://github.com/Aman-Raj-2508',
    current: false,
  },
];

const Experience = () => {
  useScrollAnimation();

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Where I've Worked</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey – companies I've contributed to and
            the impact I've created along the way.
          </p>
        </div>

        <div className="exp-timeline">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className={`exp-card reveal${idx % 2 === 0 ? '-left' : '-right'}`}
            >
              {/* Timeline dot */}
              <div className="exp-dot">
                {exp.current && <span className="dot-pulse"></span>}
              </div>

              <div className="exp-card-inner glass-card">
                {/* Header */}
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <span className="gradient-text">{exp.company}</span>
                      <a href={exp.link} className="exp-link" target="_blank" rel="noopener noreferrer">
                        <FiExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  {exp.current && (
                    <span className="current-badge">Current</span>
                  )}
                </div>

                {/* Meta */}
                <div className="exp-meta">
                  <span><FiCalendar size={13} /> {exp.duration}</span>
                  <span><FiMapPin size={13} /> {exp.location}</span>
                  <span className="exp-type">{exp.type}</span>
                </div>

                <p className="exp-desc">{exp.description}</p>

                {/* Achievements */}
                <ul className="exp-achievements">
                  {exp.achievements.map((a) => (
                    <li key={a}>
                      <span className="bullet">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="exp-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Timeline line */}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
