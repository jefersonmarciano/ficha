// src/components/MagicDetails.js
import React from 'react';

const MagicDetails = ({ magia }) => {
  if (!magia) {
    return <div>Selecione uma magia para ver os detalhes</div>;
  }

  return (
    <div>
      <h2>{magia.magia}</h2>
      <p><strong>Efeito 1:</strong> {magia.efeito1}</p>
      <p><strong>Alcance:</strong> {magia.alcance}</p>
      <p><strong>Descrição:</strong> {magia.descricao}</p>
    </div>
  );
};

export default MagicDetails;