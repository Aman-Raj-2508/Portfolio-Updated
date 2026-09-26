import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'React.js', level: 92, color: '#61DBFB' },
      { name: 'JavaScript', level: 88, color: '#f7df1e' },
      { name: 'HTML5 & CSS3', level: 90, color: '#e34f26' },
      { name: 'TypeScript', level: 85, color: '#3178c6' },
      { name: 'Redux Toolkit', level: 82, color: '#764ABC' },
      { name: 'Responsive UI', level: 84, color: '#00bcd4' },
      { name: 'UI/UX Design', level: 80, color: '#ff8a65' },
      { name: 'REST UI Integration', level: 78, color: '#ec4899' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js', level: 84, color: '#68A063' },
      { name: 'Express.js', level: 80, color: '#ffffff' },
      { name: 'MongoDB', level: 82, color: '#4DB33D' },
      { name: 'REST APIs', level: 90, color: '#ff6b6b' },
      { name: 'Authentication', level: 76, color: '#0078D4' },
      { name: 'API Design', level: 78, color: '#f59e0b' },
      { name: 'Data Modelling', level: 75, color: '#10b981' },
      { name: 'Automation', level: 80, color: '#8b5cf6' },
    ],
  },
  {
    id: 'data',
    label: 'Data & BI',
    emoji: '📊',
    skills: [
      { name: 'Power BI', level: 92, color: '#F2C811' },
      { name: 'Tableau', level: 88, color: '#5F9FFF' },
      { name: 'SQL', level: 90, color: '#00C2FF' },
      { name: 'Python', level: 85, color: '#1E88E5' },
      { name: 'Excel', level: 90, color: '#1D6F42' },
      { name: 'DAX', level: 82, color: '#FF8C00' },
      { name: 'Microsoft Fabric', level: 80, color: '#0078D4' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    emoji: '☁️',
    skills: [
      { name: 'Git & GitHub', level: 92, color: '#f05032' },
      { name: 'LLM Workflows', level: 80, color: '#0078D4' },
      { name: 'Automation', level: 78, color: '#0089D6' },
      { name: 'Harness', level: 74, color: '#2496ED' },
      { name: 'CI/CD', level: 72, color: '#00AEEF' },
      { name: 'Cloud Reporting', level: 70, color: '#FCC624' },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  useScrollAnimation();

  const active = SKILL_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I've explored, practised, and used to build
            production-ready applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="skills-tabs reveal">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab${activeTab === cat.id ? ' active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="skills-panel reveal">
          <div className="skill-bars">
            {active.skills.map(({ name, level, color }, i) => (
              <div className="skill-bar-item" key={name} style={{ '--delay': `${i * 0.08}s` }}>
                <div className="skill-meta">
                  <span className="skill-name">{name}</span>
                  <span className="skill-percent" style={{ color }}>{level}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ '--w': `${level}%`, '--color': color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech badge cloud */}
          <div className="tech-cloud">
            <h4 className="cloud-title">Also Explored</h4>
            <div className="cloud-tags">
              {['React.js', 'Node.js', 'MongoDB', 'Power BI', 'Tableau', 'SQL', 'Python', 'Excel', 'DAX',
                'Fabric', 'GitHub Copilot', 'Prompt Engineering', 'ETL', 'Dashboarding'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
