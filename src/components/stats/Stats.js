import React from 'react';
import './Stats.css';

function Stats({ stats, setCharacter }) {
  const handleStatChange = (stat, field, value) => {
    setCharacter((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        [stat]: {
          ...prev.stats[stat],
          [field]: parseInt(value) || 0,
        },
      },
    }));
  };

  const calculateMod = (score) => {
    return Math.floor((score - 10) / 2);
  };

  const statNames = [
    'Agili', 'Const', 'Força',
    'Inteli', 'Persp', 'Prese'
  ];

  return (
    <div className="stats-container">
      <h2>Atributos</h2>
      <div className="stats-grid">
        <div className="stats-header">
          <span>Status Base</span>
          <span>Atributos</span>
          <span>Score</span>
          <span>Mod</span>
        </div>
        {statNames.map((statName, index) => (
          <div key={index} className="stat-row">
            <input
              type="number"
              value={stats[statName.toLowerCase()].base}
              onChange={(e) => handleStatChange(statName.toLowerCase(), 'base', e.target.value)}
              min="0"
            />
            <span className="stat-name">{statName}</span>
            <input
              type="number"
              value={stats[statName.toLowerCase()].score}
              onChange={(e) => handleStatChange(statName.toLowerCase(), 'score', e.target.value)}
              min="0"
            />
            <span className="mod">{calculateMod(stats[statName.toLowerCase()].score)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;