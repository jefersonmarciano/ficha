import React from 'react';
import './MagicTablePopup.css'; // Reutiliza os estilos do popup
import MagicTable from '../model table/MagicTable';

const MagicTablePopupCiclo2Magico = ({ magias, onClose, onSelect, selectedSkills }) => {
  return (
    <div className="magic-table-popup-overlay">
      <div className="magic-table-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Magias de Ciclo 2 - Mágico</h2>
        <div className="magic-table-container">
          <MagicTable magias={magias} onSelect={onSelect} selectedSkills={selectedSkills} />
        </div>
      </div>
    </div>
  );
};

export default MagicTablePopupCiclo2Magico;