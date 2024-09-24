import React, { useState } from 'react';
import './MagicTablePopup.css'; // Reutiliza os estilos do popup
import MagicTable from './MagicTable';

const MagicTablePopupCiclo2Fisico = ({ magias, onClose, onSelect, selectedSkills  }) => {
  

  return (
    <div className="magic-table-popup-overlay">
      <div className="magic-table-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Magias de Ciclo 2 - Físico</h2>
        <div className="magic-table-container">
          <MagicTable magias={magias} onSelect={onSelect} selectedSkills={selectedSkills} />
        </div>
      </div>
    </div>
  );
};

export default MagicTablePopupCiclo2Fisico;