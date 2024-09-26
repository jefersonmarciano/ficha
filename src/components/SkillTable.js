import React from 'react';
import './SkillTable.css';

const skills = [
  { fullName: 'Atletismo' },
  { fullName: 'Prestidigitação' },
  { fullName: 'Luta/Briga' },
  { fullName: 'Pontaria' },
  { fullName: 'Magia (Cast)' },
  { fullName: 'Reflexos' },
  { fullName: 'Mana Sense' },
  { fullName: 'Fortitude' },
  { fullName: 'Vontade' },
  { fullName: 'Sobrevivência' },
  { fullName: 'Persuasão' },
  { fullName: 'Diplomacia' },
  { fullName: 'História' },
  { fullName: 'Arcana' },
  { fullName: 'Intuição' },
  { fullName: 'Percepção' },
  { fullName: 'Stealth' },
  { fullName: 'Loot' },
  { fullName: 'Medicina' },
  { fullName: 'Concentração' }
];

const attributes = [
  'STR/AGI', 'AGI/PRE', 'STR/AGI', 'STR/AGI', 'INT/PER', 'AGI', 'PRE', 'CON', 'PER', 'CON/PER',
  'FOR/PER', 'PRE', 'INT/PER', 'INT/PER', 'PRE/PER', 'PRE/INT', 'AGI/PRE', 'STR/AGI', 'INT', 'PRE/PER'
];

function SkillTable({ character, setCharacter }) {
  const handleSkillChange = (skillName, field, value) => {
    setCharacter(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [skillName]: {
          ...prev.skills[skillName],
          [field]: field === 'roll' ? value : parseInt(value) || 0
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
            <tr key={skill.fullName}>
              <td>{skill.fullName}</td>
              <td>
                <input
                  type="text"
                  className="skill-input"
                  value={character.skills[skill.fullName]?.roll || ''}
                  onChange={(e) => handleSkillChange(skill.fullName, 'roll', e.target.value)}
                />
              </td>
              <td>
                {attributes[index]}
              </td>
              <td>
                <input
                  type="number"
                  className="skill-input"
                  value={character.skills[skill.fullName]?.trained || 0}
                  onChange={(e) => handleSkillChange(skill.fullName, 'trained', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="skill-input"
                  value={character.skills[skill.fullName]?.others || 0}
                  onChange={(e) => handleSkillChange(skill.fullName, 'others', e.target.value)}
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