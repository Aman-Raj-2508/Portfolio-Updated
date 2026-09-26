import React, { useState } from 'react';
import { FiGithub, FiFolder } from 'react-icons/fi';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Tableau to Power BI Migration Solution',
    description:
      'Developed a solution to migrate Tableau workbooks to Power BI while preserving report structure, logic, and stakeholder usability across analytics workflows.',
    tech: ['Power BI', 'Tableau', 'SQL', 'Data Migration', 'Reporting'],
    github: 'https://github.com/Aman-Raj-2508',
    live: '#',
    category: 'data',
    highlight: 'var(--primary)',
  },
  {
    id: 3,
    title: 'Executive Dashboard & KPI Reporting',
    description:
      'Designed business dashboards and KPI reporting views that turn raw operational data into clear insights for faster decision-making.',
    tech: ['Power BI', 'DAX', 'Excel', 'SQL', 'Dashboarding'],
    github: 'https://github.com/Aman-Raj-2508',
    live: '#',
    category: 'data',
    featured: true,
    highlight: 'var(--accent)',
  },
  {
    id: 4,
    title: 'Data Cleaning & Transformation Workflow',
    description:
      'Created ETL-style cleaning and transformation workflows to prepare messy source data for analysis, validation, and reporting.',
    tech: ['Python', 'SQL', 'Excel', 'ETL', 'Data Prep'],
    github: 'https://github.com/Aman-Raj-2508',
    live: '#',
    category: 'data',
    featured: false,
    highlight: 'var(--primary)',
  },
  {
    id: 6,
    title: 'Developer Portfolio – This Site',
    description:
      'A personal portfolio built to showcase analytics projects, skills, and professional experience in a modern presentation.',
    tech: ['React.js', 'Vite', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Aman-Raj-2508',
    live: '#',
    category: 'fullstack',
    featured: false,
    highlight: 'var(--accent)',
  },
  {
    id: 7,
    title: 'Chatify - Real-Time Chat Application',
    description:
      'Built a full stack real-time chat application with seamless messaging features and a responsive interface designed for dependable communication.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Real-Time Messaging'],
    github: 'https://github.com/Aman-Raj-2508',
    live: 'https://chatapp-9zte.onrender.com',
    category: 'fullstack',
    featured: true,
    highlight: 'var(--secondary)',
  },
  {
    id: 8,
    title: 'E-Commerce Website',
    description:
      'Created a shopping website with a broad product catalogue and a user-friendly browsing experience for online purchases.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'E-Commerce'],
    github: 'https://github.com/Aman-Raj-2508',
    live: 'https://aman-raj-2508.github.io/E-Commerce-Website/',
    category: 'fullstack',
    featured: false,
    highlight: 'var(--accent)',
  },
  {
    id: 11,
    title: 'To-Do Application',
    description:
      'Created a lightweight task-management app for adding and organizing daily to-do items with a focused user interface.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'UI Design'],
    github: 'https://github.com/Aman-Raj-2508',
    live: 'https://aman-raj-2508.github.io/TODO-APP/',
    category: 'frontend',
    featured: false,
    highlight: 'var(--secondary)',
  },
];

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'data', label: 'Data & BI' },
  { id: 'frontend', label: 'Frontend' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  useScrollAnimation();

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of analytics solutions, full stack applications, and
            frontend projects built through professional and personal work.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="project-filters reveal">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-btn${filter === id ? ' active' : ''}`}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`project-card glass-card reveal${i % 3 === 1 ? '' : i % 2 === 0 ? '-left' : '-right'}`}
              style={{ '--highlight': p.highlight }}
            >
              {/* Colour bar */}
              <div className="project-bar"></div>

              <div className="project-body">
                <div className="project-icon">
                  <FiFolder />
                </div>

                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="projects-cta reveal">
          <a href="https://github.com/Aman-Raj-2508" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FiGithub /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
