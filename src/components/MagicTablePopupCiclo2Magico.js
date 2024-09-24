import React, { useState } from 'react';
import './MagicTablePopup.css'; // Reutiliza os estilos do popup
import MagicTable from './MagicTable';

const MagicTablePopupCiclo2Magico = ({ magias, onClose }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelect = (magia) => {
    setSelectedSkills((prevSelectedSkills) => {
      if (prevSelectedSkills.some(skill => skill.magia === magia.magia)) {
        return prevSelectedSkills.filter(skill => skill.magia !== magia.magia);
      } else {
        return [...prevSelectedSkills, magia];
      }
    });
  };

  return (
    <div className="magic-table-popup-overlay">
      <div className="magic-table-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Magias de Ciclo 2 - Mágico</h2>
        <div className="magic-table-container">
          <MagicTable magias={magias} onSelect={handleSelect} selectedSkills={selectedSkills} />
        </div>
      </div>
    </div>
  );
};

export default MagicTablePopupCiclo2Magico;