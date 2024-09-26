import React from 'react';
import './ResourceBars.css';

function ResourceBars({ resources, setCharacter }) {
  const handleResourceChange = (resource, field, value) => {
    setCharacter((prev) => ({
      ...prev,
      resources: {
        ...prev.resources,
        [resource]: {
          ...prev.resources[resource],
          [field]: parseInt(value) || 0,
        },
      },
    }));
  };

  const calculatePercentage = (current, max) => {
    return max > 0 ? Math.round((current / max) * 100) : 0;
  };

  const getBarColor = (resource) => {
    switch (resource) {
      case 'Vida': return '#e74c3c';
      case 'Mana': return '#3498db';
      case 'Estam': return '#f1c40f';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="resource-bars-container">
      {Object.entries(resources).map(([resource, { max, current }]) => (
        <div key={resource} className="resource-bar">
          <h3>{resource.charAt(0).toUpperCase() + resource.slice(1)}</h3>
          <div className="resource-inputs">
            <div className="resource-input-group">
              <label>Máximo:</label>
              <input
                type="number"
                value={max}
                onChange={(e) => handleResourceChange(resource, 'max', e.target.value)}
                min="0"
                className="resource-input"
              />
            </div>
            <div className="resource-input-group">
              <label>Atual:</label>
              <input
                type="number"
                value={current}
                onChange={(e) => handleResourceChange(resource, 'current', e.target.value)}
                min="0"
                max={max}
                className="resource-input"
              />
            </div>
          </div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ 
                width: `${calculatePercentage(current, max)}%`,
                backgroundColor: getBarColor(resource)
              }}
            ></div>
          </div>
          <div className="resource-info">            
            <span>{calculatePercentage(current, max)}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResourceBars;