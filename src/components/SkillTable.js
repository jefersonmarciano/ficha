import React from 'react';
import './SkillTable.css';

const skills = [
  'Atletismo', 'Prestidigitação', 'Luta/Briga', 'Pontaria', 'Magia (Cast)',
  'Reflexos', 'Mana Sense', 'Fortitude', 'Vontade', 'Sobrevivência',
  'Persuasão', 'Diplomacia', 'História', 'Arcana', 'Intuição',
  'Percepção', 'Stealth', 'Loot', 'Medicina', 'Concentração'
];

const attributes = [
  'STR/AGI', 'AGI/PRE', 'STR/AGI', 'STR/AGI', 'INT/PER', 'AGI', 'PRE', 'CON', 'PER', 'CON/PER',
  'FOR/PER', 'PRE', 'INT/PER', 'INT/PER', 'PRE/PER', 'PRE/INT', 'AGI/PRE', 'STR/AGI', 'INT', 'PRE/PER'
];

function SkillTable({ character, setCharacter }) {
  const handleSkillChange = (skill, field, value) => {
    setCharacter(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [skill]: {
          ...prev.skills[skill],
          [field]: field === 'roll' ? parseInt(value) || 0 : value
        }
      }
    }));
  };

  return (
    <div className="skill-table">
      <h2>Perícias</h2>
      <table>
        <thead>
          <tr>
            <th>Perícia</th>
            <th>Roll</th>
            <th>Atributos</th>
            <th>Treinamento</th>
            <th>Outros</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={skill}>
              <td>{skill}</td>
              <td>
                <input
                  type="number"
                  className="skill-input"
                  value={character.skills[skill]?.roll || 0}
                  onChange={(e) => handleSkillChange(skill, 'roll', e.target.value)}
                />
              </td>
              <td>
                {attributes[index]}
              </td>
              <td>
                <input
                  type="number"
                  className="skill-input"
                  value={character.skills[skill]?.trained || 0}
                  onChange={(e) => handleSkillChange(skill, 'trained', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="skill-input"
                  value={character.skills[skill]?.others || 0}
                  onChange={(e) => handleSkillChange(skill, 'others', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SkillTable;