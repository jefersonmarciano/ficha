// src/components/MagicTable.js
import React from 'react';
import './MagicTable.css'; // Importa os estilos da tabela

const MagicTable = ({ magias, onSelect, selectedSkills, id }) => {
  return (
    <table className="magic-table">
      <thead>
        <tr>
          <th>Requisito</th>
          <th>Tipo</th>
          <th>Magia</th>
          <th>Ação</th>
          <th>Recurso</th>
          <th>Duração</th>
          <th>Efeito 1</th>
          <th>Efeito 2</th>
          <th>Alcance</th>
          <th>Descrição</th>
          <th>Selecionar</th>
        </tr>
      </thead>
      <tbody>
        {magias.map((magia, index) => {
          const isSelected = selectedSkills.some(skill => skill.magia === magia.magia);
          return (
            <tr key={index}>
              <td>{magia.requisito}</td>
              <td>{magia.tipo}</td>
              <td>{magia.magia}</td>
              <td>{magia.acao}</td>
              <td>{magia.recurso}</td>
              <td>{magia.duracao}</td>
              <td>{magia.efeito1}</td>
              <td>{magia.efeito2}</td>
              <td>{magia.alcance}</td>
              <td>{magia.descricao}</td>
              <td>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => {
                    // Chama onSelect com a magia atual e o id do popup
                    onSelect(magia, id);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MagicTable;