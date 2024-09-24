import React from 'react';
import './MagicTablePopup.css'; // Importa os estilos do popup
import MagicTable from './MagicTable';

const MagicTablePopup = ({ magias, onClose }) => {
  return (
    <div className="magic-table-popup-overlay">
      <div className="magic-table-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Magias</h2>
        <div className="magic-table-container">
          <MagicTable magias={magias} onSelect={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default MagicTablePopup;