import React from 'react';
import './Backpack.css';

function Backpack({ backpack, money, setCharacter, onClose }) {
  const handleItemChange = (index, field, value) => {
    const newBackpack = [...backpack];
    newBackpack[index][field] = value;
    setCharacter(prev => ({ ...prev, backpack: newBackpack }));
  };

  const handleMoneyChange = (value) => {
    setCharacter(prev => ({ ...prev, money: { ...prev.money, gold: value } }));
  };

  const addItem = () => {
    const newBackpack = [...backpack, { name: '', quantity: 0, description: '' }];
    setCharacter(prev => ({ ...prev, backpack: newBackpack }));
  };

  const removeItem = (index) => {
    const newBackpack = backpack.filter((_, i) => i !== index);
    setCharacter(prev => ({ ...prev, backpack: newBackpack }));
  };

  return (
    <div className="backpack-popup">
      <button className="close-buttonB" onClick={onClose}>X</button>
      <div className="backpack-header">
        <h3>Mochila</h3>        
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantidade</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {backpack.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                    placeholder="Item"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                    placeholder="Quantidade"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                    placeholder="Descrição"
                  />
                </td>
                <td>
                  <button className="remove-item-button" onClick={() => removeItem(index)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-item-button" onClick={addItem}>Adicionar Item</button>
      <h4>Dinheiro</h4>
      <div className="money-section">
        <label>
          Bonoros:
          <input
            type="number"
            value={money.gold}
            onChange={(e) => handleMoneyChange(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default Backpack;