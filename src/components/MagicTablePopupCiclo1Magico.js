import React from 'react';
import './MagicTablePopup.css'; // Reutiliza os estilos do popup
import MagicTable from './MagicTable';

const MagicTablePopupCiclo1Magico = ({ magias, onClose, onSelect }) => {
  return (
    <div className="magic-table-popup-overlay">
      <div className="magic-table-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Magias de Ciclo 1 - Mágico</h2>
        <div className="magic-table-container">
          <MagicTable magias={magias} onSelect={onSelect} />
        </div>
      </div>
    </div>
  );
};

export default MagicTablePopupCiclo1Magico;