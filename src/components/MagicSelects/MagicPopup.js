import React from 'react';
import './MagicPopup.css'; // Importa os estilos do popup

const MagicPopup = ({ skills, onClose }) => {
  return (
    <div className="magic-popup-overlay">
      <div className="magic-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Magias Selecionadas</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.magia}</strong>: {skill.descricao}: Efeito 1: {skill.efeito1} Efeito 2: {skill.efeito2}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MagicPopup;