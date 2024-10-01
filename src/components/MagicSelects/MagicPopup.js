import React from 'react';
import './MagicPopup.css'; // Importa os estilos do popup

const MagicPopup = ({ skills, onClose, setCharacter }) => {
  const handleUseSkill = (skill, resourceType) => {
    setCharacter(prevState => {
      const resources = prevState.resources;
      const isCiclo1 = skill.ciclo === 'ciclo1';
      const cost = resourceType === 'Mana' ? (isCiclo1 ? 2 : 4) : (isCiclo1 ? 3 : 5);

      if (resources[resourceType].current < cost) {
        alert(`${resourceType} insuficiente!`);
        return prevState;
      }

      return {
        ...prevState,
        resources: {
          ...resources,
          [resourceType]: {
            ...resources[resourceType],
            current: resources[resourceType].current - cost
          }
        }
      };
    });
  };

  return (
    <div className="magic-table-popup-overlay">
      <div className="magic-table-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Magias Selecionadas</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="skill-info">
                <strong>{skill.magia}</strong>: {skill.descricao}
                <br />Efeito 1: {skill.efeito1} Efeito 2: {skill.efeito2}
                <br />Ciclo: {skill.ciclo}
              </div>
              <div className="button-group">
                <button 
                  className="usar-skill-button mana-button" 
                  onClick={() => handleUseSkill(skill, 'Mana')}
                >
                  <i className="fas fa-tint"></i> Usar Mana ({skill.ciclo === 'ciclo1' ? '2' : '4'})
                </button>
                <button 
                  className="usar-skill-button stamina-button" 
                  onClick={() => handleUseSkill(skill, 'Estam')}
                >
                  <i className="fas fa-bolt"></i> Usar Stamina ({skill.ciclo === 'ciclo1' ? '3' : '5'})
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MagicPopup;