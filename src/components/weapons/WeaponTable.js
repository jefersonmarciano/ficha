import React, { useEffect, useState } from 'react';
import '../weapons/WeaponTable.css';

// Mapeamento dos dados das armas
const weaponDetails = {
  'Dagger': {
    name: 'Adagas duplas',
    damage: '2d4+4',
    def: 1,
    move: 3,
    abilities: 'Bônus action como segundo hit'
  },
  'Chain Blade': {
    name: 'Chain blades',
    damage: '2d6+4',
    def: -1,
    move: 3,
    abilities: 'Pode se prender em qualquer coisa para se puxar ação de movimento, range = 2x mov'
  },
  'Espada + Escudo': {
    name: 'Espada + escudo',
    damage: '1d8+4',
    def: 3,
    move: 0,
    abilities: 'Ataque de Oportunidade se algum inimigo de seu alcance (bônus action)'
  },
  'Espadas Gêmeas': {
    name: 'Espadas gêmeas',
    damage: '2d8+4',
    def: -1,
    move: 2,
    abilities: 'Passar na Reação gera conter'
  },
  'Gauntlet': {
    name: 'Manoplas',
    damage: '1d4+4',
    def: -1,
    move: 4,
    abilities: 'Reações deixam o inimigo "Prone"'
  },
  'Claymore': {
    name: 'Claymore',
    damage: '1d10+4',
    def: 3,
    move: -1,
    abilities: 'Pode ser utilizada para Block em qualquer ação ofensiva (reage com luta)'
  },
  'Glaive': {
    name: 'Glaive',
    damage: '1d8+4',
    def: 1,
    move: 2,
    abilities: 'Ataque de oportunidade se algum inimigo entrar em seu alcance (bônus action)'
  },
  'Lamina Curva': {
    name: 'Lâmina curva',
    damage: '1d10+4',
    def: 2,
    move: 2,
    abilities: 'Caso tenha reagido, ganha vantagem no acerto'
  },
  'Machadao': {
    name: 'Machadao',
    damage: '1d12+1d4+4',
    def: 1,
    move: -1,
    abilities: 'Pode utilizar a movimentação para atacar'
  },
  'Staff': {
    name: 'Cajado',
    damage: '1d8+4',
    def: 1,
    move: 1,
    abilities: 'Magia tem ⭐️⭐️ no efeito'
  },
  'Grimorio': {
    name: 'Grimório',
    damage: '1d6+4',
    def: 4,
    move: 1,
    abilities: 'Após descanso pode mudar 3 das magias conhecidas, por ciclo.'
  },
  'Magic Sword': {
    name: 'Espada Mágica',
    damage: '1d12+4',
    def: -1,
    move: 1,
    abilities: 'Ao atacar pode gastar +3 de mana para conjurar uma lâmina com 1/4 do dano em arco 1/2 move.'
  },
  'Floating Sword': {
    name: 'Lâmina Flutuante',
    damage: '1d8+4',
    def: 0,
    move: 3,
    abilities: 'Pode duplicar magias gastando o dobro de mana'
  },
  'Bow': {
    name: 'Arco curto',
    damage: '1d6+4',
    def: -1,
    move: 5,
    abilities: 'Ao acertar, reseta seu movimento.'
  },
  'Long Bow': {
    name: 'Arco longo',
    damage: '1d12+1d4+4',
    def: -1,
    move: 1,
    abilities: 'Preparar a flecha utiliza seu movimento, pode carregar com ação bônus para mais dano. ⭐️⭐️ de ataque na recarga'
  }
};

function WeaponTable({ weapons, setCharacter }) {
  const [weaponImages, setWeaponImages] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState(null);

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
      
      if (field === 'weaponType') {
        const weaponData = weaponDetails[value];
        if (weaponData) {
          newWeapons[index] = {
            ...newWeapons[index],
            attackType: getAttackType(value),
            attack: weaponData.damage,
            def: weaponData.def,
            move: weaponData.move
          };
        }
        setSelectedWeapon(weaponData || null);
      }
      
      return { ...prev, weapons: newWeapons };
    });
  };

  const getAttackType = (weaponType) => {
    const magicWeapons = ['Magic Sword', 'Grimorio', 'Staff', 'Floating Sword'];
    const meleeWeapons = ['Dagger', 'Chain Blade', 'Espada + Escudo', 'Espadas Gêmeas', 'Gauntlet', 'Claymore', 'Glaive', 'Lamina Curva', 'Machadao', 'Marretao'];
    const rangedWeapons = ['Bow', 'Long Bow'];

    if (magicWeapons.includes(weaponType)) return 'Magia (Cast)';
    if (meleeWeapons.includes(weaponType)) return 'Luta/Briga';
    if (rangedWeapons.includes(weaponType)) return 'Pontaria';
    return '';
  };

  const attackTypes = ['Magia (Cast)', 'Luta/Briga', 'Pontaria'];
  const weaponTypes = Object.keys(weaponDetails);
  const elements = ['Neutro','Fogo', 'Gelo', 'Vento', 'Água', 'Pedra', 'Raio', 'Luz', 'Trevas'];
  const generations = Array.from({ length: 11 }, (_, i) => i);

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
            <td data-label="Arma">
              <select
                className="weapon-type-select"
                id="weapon-type"
                value={weapons[0]?.weaponType || ''}
                onChange={(e) => handleWeaponChange(0, 'weaponType', e.target.value)}
              >
                <option value="">Selecione</option>
                {weaponTypes.map((type) => (
                  <option key={type} value={type}>{weaponDetails[type].name}</option>
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
      </table>
      {selectedWeapon && (
        <div className="weapon-status" style={{ textAlign: 'center', marginTop: '10px' }}>
          <strong>Habilidades:</strong> {selectedWeapon.abilities}
        </div>
      )}
    </div>
  );
}

export default WeaponTable;