import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Timeline.css';

const TIMELINE_EVENTS = [
  {
    year: '2025',
    title: 'Built Personal Analytics Projects',
    subtitle: 'Data stories, reporting, and dashboard work',
    desc: 'Started building practical data-focused projects while strengthening my reporting, dashboard design, and business analysis skills.',
    icon: '🚀',
    side: 'right',
    type: 'work',
  },
  {
    year: '2025',
    title: 'Worked on Real-World BI & Reporting Projects',
    subtitle: 'Power BI, Tableau, automation, and validation',
    desc: 'Developed a Tableau-to-Power BI migration solution and automated validation workflows to reduce manual effort and improve quality checks using LLM-assisted review loops.',
    icon: '💼',
    side: 'left',
    type: 'milestone',
  },
  {
    year: '2023',
    title: 'Explored Data Analytics & Visualization',
    subtitle: 'Power BI, SQL, Python, Excel',
    desc: 'Focused on learning dashboards, DAX, reporting, data cleaning, and business insight generation to build a strong analytics foundation.',
    icon: '⚡',
    side: 'right',
    type: 'learning',
  },
  {
    year: '2022',
    title: 'Joined College and Built Foundations',
    subtitle: 'Galgotias University',
    desc: 'Started my degree and built a foundation in programming, logic, problem-solving, and technical understanding before moving into analytics-focused work.',
    icon: '🎓',
    side: 'left',
    type: 'education',
  },
  {
    year: '2021',
    title: 'Started Learning Technology',
    subtitle: 'The beginning of my journey',
    desc: 'Began exploring coding and technology, which later led me to a path focused on analytics, dashboards, automation, and business value creation.',
    icon: '🌱',
    side: 'right',
    type: 'milestone',
  },
];

const TYPE_COLORS = {
  work: 'var(--primary)',
  education: 'var(--accent)',
  learning: 'var(--secondary)',
  milestone: 'var(--success)',
};

const Timeline = () => {
  useScrollAnimation();

  return (
    <section id="timeline" className="timeline-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            The <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">
            Every step of my journey – education, milestones, and the
            experiences that shaped who I am as a developer.
          </p>
        </div>

        {/* Legend */}
        <div className="timeline-legend reveal">
          {Object.entries(TYPE_COLORS).map(([type, color]) => (
            <div key={type} className="legend-item">
              <span className="legend-dot" style={{ background: color }}></span>
              <span className="legend-label">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="timeline-events">
          {/* Centre line */}
          <div className="centre-line"></div>

          {TIMELINE_EVENTS.map((ev, i) => (
            <div
              key={i}
              className={`tl-event tl-${ev.side} reveal${ev.side === 'left' ? '-left' : '-right'}`}
              style={{ '--type-color': TYPE_COLORS[ev.type] }}
            >
              {/* Year bubble */}
              <div className="tl-year">
                <span>{ev.year}</span>
              </div>

              {/* Card */}
              <div className="tl-card glass-card">
                <div className="tl-card-header">
                  <span className="tl-emoji">{ev.icon}</span>
                  <div>
                    <h3 className="tl-title">{ev.title}</h3>
                    <span className="tl-subtitle">{ev.subtitle}</span>
                  </div>
                </div>
                <p className="tl-desc">{ev.desc}</p>
                <div className="tl-type-tag" style={{ color: TYPE_COLORS[ev.type], borderColor: TYPE_COLORS[ev.type] }}>
                  {ev.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
