import React, { useState } from 'react';
import './DiceRoller.css';

function DiceRoller() {
  const [diceExpression, setDiceExpression] = useState('');
  const [result, setResult] = useState(null);

  const rollDice = () => {
    const regex = /(\d+)?d(\d+)([+-]\d+)?/g;
    const parts = diceExpression.match(regex);

    if (parts) {
      let total = 0;
      let rolls = [];
      let modifier = 0;

      parts.forEach(part => {
        const [, quantity, sides, mod] = part.match(/(\d+)?d(\d+)([+-]\d+)?/);
        const numDice = parseInt(quantity) || 1;
        const numSides = parseInt(sides);
        const diceRolls = Array(numDice).fill().map(() => Math.floor(Math.random() * numSides) + 1);
        
        rolls = [...rolls, ...diceRolls];
        total += diceRolls.reduce((sum, roll) => sum + roll, 0);
        
        if (mod) {
          const modValue = parseInt(mod);
          modifier += modValue;
          total += modValue;
        }
      });

      setResult({ rolls, total, modifier });
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
          placeholder="Ex: 1d20+3+1d4"
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