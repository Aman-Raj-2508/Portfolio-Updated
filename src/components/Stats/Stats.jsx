import React from 'react';
import useCounter from '../../hooks/useCounter';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { FiCode, FiStar, FiClock, FiUsers } from 'react-icons/fi';
import './Stats.css';

const STAT_DATA = [
  { icon: <FiClock />,  end: 1,   suffix: '+', label: 'Year Experience',   color: '--primary'   },
  { icon: <FiCode />,   end: 5,   suffix: '+', label: 'Projects Built',    color: '--secondary' },
  { icon: <FiStar />,   end: 250, suffix: '+', label: 'Problems Solved',   color: '--accent'    },
  { icon: <FiUsers />,  end: 100, suffix: '%', label: 'Commitment',       color: '--success'   },
];

const StatCard = ({ icon, end, suffix, label, color }) => {
  const [ref, count] = useCounter(end, 2200);

  return (
    <div className="stat-card glass-card" ref={ref}>
      <div className="stat-icon" style={{ '--c': `var(${color})` }}>
        {icon}
      </div>
      <div className="stat-number" style={{ '--c': `var(${color})` }}>
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats = () => {
  useScrollAnimation();

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid reveal">
          {STAT_DATA.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
