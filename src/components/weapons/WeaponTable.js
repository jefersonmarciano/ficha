import React, { useEffect, useState } from 'react';
import '../weapons/WeaponTable.css';

function WeaponTable({ weapons, setCharacter }) {
  const [weaponImages, setWeaponImages] = useState([]);

  useEffect(() => {
    const newWeaponImages = weapons.map(weapon => {
      if (weapon.weaponType) {
        return require(`../../img/${weapon.weaponType}.png`);
      }
      return '';
    });
    setWeaponImages(newWeaponImages);
  }, [weapons]);

  const handleWeaponChange = (index, field, value) => {
    setCharacter(prev => {
      const newWeapons = [...prev.weapons];
      newWeapons[index] = { ...newWeapons[index], [field]: value };
      
      // Se o campo alterado for o tipo de arma, atualize automaticamente o tipo de ataque
      if (field === 'weaponType') {
        newWeapons[index].attackType = getAttackType(value);
      }
      
      return { ...prev, weapons: newWeapons };
    });
  };

  const getAttackType = (weaponType) => {
    const magicWeapons = ['Magic Sword', 'Grimory', 'Staff', 'Floating Sword'];
    const meleeWeapons = ['Dagger', 'Chain Blade', 'Espada + Escudo', 'Espadas Gêmeas', 'Gauntlet', 'Claymore', 'Glaive', 'Lamina Curva', 'Machadao', 'Marretao'];
    const rangedWeapons = ['Bow', 'Long Bow'];

    if (magicWeapons.includes(weaponType)) return 'Magia (Cast)';
    if (meleeWeapons.includes(weaponType)) return 'Luta/Briga';
    if (rangedWeapons.includes(weaponType)) return 'Pontaria';
    return '';
  };

  const attackTypes = ['Magia (Cast)', 'Luta/Briga', 'Pontaria'];
  const weaponTypes = [
    'Dagger', 'Chain Blade', 'Espada + Escudo', 'Espadas Gêmeas', 'Gauntlet',
    'Claymore', 'Glaive', 'Lamina Curva', 'Machadao', 'Marretao', 'Staff', 'Grimory',
    'Magic Sword', 'Floating Sword', 'Bow', 'Long Bow'
  ];
  const elements = ['Neutro','Fogo', 'Gelo', 'Vento', 'Água', 'Pedra', 'Raio', 'Luz', 'Trevas'];
  const generations = Array.from({ length: 11 }, (_, i) => i); // Gera um array de 0 a 10

  return (
    <div className="weapon-table">
      <h3>Arma</h3>
      <table>
        <thead>
          <tr>
            <th>Tipo de Arma</th>
            <th>Geração</th>
            <th>Ataque</th>
            <th>Tipo de Ataque</th>
            <th>Elemento</th>
            <th>Def</th>
            <th>Move</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Tipo de Arma">
              <select
                className="weapon-type-select"
                id="weapon-type"
                value={weapons[0]?.weaponType || ''}
                onChange={(e) => handleWeaponChange(0, 'weaponType', e.target.value)}
              >
                <option value="">Selecione</option>
                {weaponTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </td>
            <td data-label="Geração">
              <select
                className="generation-select"
                id="weapon-generation"
                value={weapons[0]?.generation || ''}
                onChange={(e) => handleWeaponChange(0, 'generation', e.target.value)}
              >
                <option value="">Selecione</option>
                {generations.map((gen) => (
                  <option key={gen} value={gen}>{gen}</option>
                ))}
              </select>
            </td>
            <td data-label="Ataque">
              <input
                type="text"
                className="weapon-attack-input"
                id="weapon-attack"
                value={weapons[0]?.attack || ''}
                onChange={(e) => handleWeaponChange(0, 'attack', e.target.value)}
                placeholder="Ataque"
              />
            </td>
            <td data-label="Tipo de Ataque">
              <select
                className="attack-type-select"
                id="weapon-attack-type"
                value={weapons[0]?.attackType || ''}
                onChange={(e) => handleWeaponChange(0, 'attackType', e.target.value)}
              >
                <option value="">Selecione</option>
                {attackTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </td>
            <td data-label="Elemento">
              <select
                className="element-select"
                id="weapon-element"
                value={weapons[0]?.element || ''}
                onChange={(e) => handleWeaponChange(0, 'element', e.target.value)}
              >
                <option value="">Selecione</option>
                {elements.map((element) => (
                  <option key={element} value={element}>{element}</option>
                ))}
              </select>
            </td>
            <td data-label="Def">
              <input
                type="text"
                className="small-input weapon-def-input"
                id="weapon-def"
                value={weapons[0]?.def || ''}
                onChange={(e) => handleWeaponChange(0, 'def', e.target.value)}
                placeholder="Def"
              />
            </td>
            <td data-label="Move">
              <input
                type="text"
                className="small-input weapon-move-input"
                id="weapon-move"
                value={weapons[0]?.move || ''}
                onChange={(e) => handleWeaponChange(0, 'move', e.target.value)}
                placeholder="Move"
              />
            </td>
            <td data-label="Imagem">
              {weaponImages[0] && (
                <img
                  src={weaponImages[0]}
                  alt={weapons[0]?.weaponType}
                  className="weapon-image"
                />
              )}
            </td>
          </tr>
        </tbody>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
}

export default WeaponTable;