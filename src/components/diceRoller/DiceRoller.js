import React, { useState } from 'react';
import './DiceRoller.css';

function DiceRoller() {
  const [diceExpression, setDiceExpression] = useState('');
  const [result, setResult] = useState(null);

  const rollDice = () => {
    const regex = /(\d+)[dD](\d+)([+-]\d+)?/;
    const match = diceExpression.match(regex);

    if (match) {
      const [, quantity, sides, modifier] = match;
      const rolls = Array(parseInt(quantity)).fill().map(() => Math.floor(Math.random() * parseInt(sides) + 1));
      const modifierValue = modifier ? parseInt(modifier) : 0;
      const total = rolls.reduce((sum, roll) => sum + roll, 0) + modifierValue;
      setResult({ rolls, total, modifier: modifierValue });
    } else {
      setResult({ error: 'Expressão de dados inválida' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      rollDice();
    }
  };

  return (
    <div className="dice-roller">
      <h3>Rolagem de Dados</h3>
      <div className="dice-controls">
        <input
          type="text"
          value={diceExpression}
          onChange={(e) => setDiceExpression(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ex: 1D20+3"
        />
        <button onClick={rollDice}>Rolar</button>
      </div>
      {result && (
        <div className="dice-result">
          {result.error ? (
            <p>{result.error}</p>
          ) : (
            <>
              <p>Rolagens: {result.rolls.join(', ')}</p>
              <p>Modificador: {result.modifier >= 0 ? '+' : ''}{result.modifier}</p>
              <p>Total: {result.total}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default DiceRoller;