import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterInfo from './components/CharacterInfo';
import Stats from './components/Stats';
import ResourceBars from './components/ResourceBars';
import SkillTable from './components/SkillTable';
import AdditionalInfo from './components/AdditionalInfo';
import WeaponTable from './components/WeaponTable';
import Backpack from './components/Backpack';
import MagicTable from './components/MagicTable';
import MagicDetails from './components/MagicDetails';
import MagicPopup from './components/MagicPopup';
import MagicTablePopupCiclo1Fisico from './components/MagicTablePopupCiclo1Fisico';
import MagicTablePopupCiclo1Magico from './components/MagicTablePopupCiclo1Magico';
import MagicTablePopupCiclo2Fisico from './components/MagicTablePopupCiclo2Fisico';
import MagicTablePopupCiclo2Magico from './components/MagicTablePopupCiclo2Magico';
import './App.css';
import backpackImage from './bags.png';
import magiasData from './data/magias.json';

function App() {
  const [character, setCharacter] = useState({
    // ... (outros estados permanecem os mesmos)
    additionalInfo: {
      ca: { base: 0, total: 0 },
      rd: { base: 0, total: 0 },
      movimento: 0,
      taxaCritica: { base: 0, total: 0 },
    },
    playerName: '',
    characterName: '',
    race: '',
    element: '',
    level: 1,
    profileImage: '',
    stats: {
      agility: { base: 10, mod: 0 },
      constitution: { base: 10, mod: 0 },
      strength: { base: 10, mod: 0 },
      intellect: { base: 10, mod: 0 },
      wisdom: { base: 10, mod: 0 },
      presence: { base: 10, mod: 0 },
    },
    resources: {
      health: { max: 100, current: 100 },
      mana: { max: 100, current: 100 },
      stamina: { max: 100, current: 100 },
    },
    skills: [], // Adicionado estado inicial para skills
    weapons: [
      { weaponType: '', name: '', attack: '', attackType: '' },
      { weaponType: '', name: '', attack: '', attackType: '' },
      { weaponType: '', name: '', attack: '', attackType: '' },
    ],
    backpack: [
      { name: '', quantity: 0, description: '' },
      { name: '', quantity: 0, description: '' },
      { name: '', quantity: 0, description: '' },
    ],
    money: { gold: 0, silver: 0, bronze: 0 },
  });

  const [showBackpack, setShowBackpack] = useState(false);
  const [showMagicPopup, setShowMagicPopup] = useState(false); // Estado para controlar a visibilidade do popup
  const [showMagicTablePopupCiclo1Fisico, setShowMagicTablePopupCiclo1Fisico] = useState(false);
  const [showMagicTablePopupCiclo1Magico, setShowMagicTablePopupCiclo1Magico] = useState(false);
  const [showMagicTablePopupCiclo2Fisico, setShowMagicTablePopupCiclo2Fisico] = useState(false);
  const [showMagicTablePopupCiclo2Magico, setShowMagicTablePopupCiclo2Magico] = useState(false);
  const [selectedMagic, setSelectedMagic] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]); // Estado para armazenar as magias selecionadas

  useEffect(() => {
    const savedCharacter = localStorage.getItem('character');
    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('character', JSON.stringify(character));
  }, [character]);

  const handleSelectMagic = (magia) => {
    setSelectedMagic(magia);
    setSelectedSkills((prevSkills) => {
      if (prevSkills.some((skill) => skill.magia === magia.magia)) {
        return prevSkills.filter((skill) => skill.magia !== magia.magia);
      } else {
        return [...prevSkills, magia];
      }
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="character-sheet">
        <div className="top-section">
          <div className="profile-container">
            <CharacterInfo character={character} setCharacter={setCharacter} />
            <div className="button-container">
              <button onClick={() => setShowBackpack(!showBackpack)} className="backpack-button">
                <img src={backpackImage} alt="Mochila" className="backpack-icon" /> Mochila
              </button>
              <button onClick={() => setShowMagicTablePopupCiclo1Fisico(true)} className="magic-button">
                Magias Ciclo 1 - Físico
              </button>
              <button onClick={() => setShowMagicTablePopupCiclo1Magico(true)} className="magic-button">
                Magias Ciclo 1 - Mágico
              </button>
              <button onClick={() => setShowMagicTablePopupCiclo2Fisico(true)} className="magic-button">
                Magias Ciclo 2 - Físico
              </button>
              <button onClick={() => setShowMagicTablePopupCiclo2Magico(true)} className="magic-button">
                Magias Ciclo 2 - Mágico
              </button>
              <button onClick={() => setShowMagicPopup(true)} className="magic-popup-button">
                Ver Magias Selecionadas
              </button>
            </div>
            {showBackpack && (
              <Backpack
                backpack={character.backpack}
                money={character.money}
                setCharacter={setCharacter}
                onClose={() => setShowBackpack(false)}
              />
            )}
            <WeaponTable weapons={character.weapons} setCharacter={setCharacter} />
          </div>
          <div className="right-container">
            <div className="resources-container">
              <ResourceBars resources={character.resources} setCharacter={setCharacter} />
            </div>
            <div className="additional-info-container">
              <AdditionalInfo additionalInfo={character.additionalInfo} setCharacter={setCharacter} />
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="stats-container">
            <Stats stats={character.stats} setCharacter={setCharacter} />
          </div>
          <div className="skills-container">
            <SkillTable character={character} setCharacter={setCharacter} />
          </div>
        </div>
        {showMagicTablePopupCiclo1Fisico && (
          <MagicTablePopupCiclo1Fisico
            magias={magiasData.ciclo1.fisico}
            onClose={() => setShowMagicTablePopupCiclo1Fisico(false)}
            onSelect={handleSelectMagic}
          />
        )}
        {showMagicTablePopupCiclo1Magico && (
          <MagicTablePopupCiclo1Magico
            magias={magiasData.ciclo1.magico}
            onClose={() => setShowMagicTablePopupCiclo1Magico(false)}
            onSelect={handleSelectMagic}
          />
        )}
        {showMagicTablePopupCiclo2Fisico && (
          <MagicTablePopupCiclo2Fisico
            magias={magiasData.ciclo2.fisico.habilidades}
            onClose={() => setShowMagicTablePopupCiclo2Fisico(false)}
            onSelect={handleSelectMagic}
          />
        )}
        {showMagicTablePopupCiclo2Magico && (
          <MagicTablePopupCiclo2Magico
            magias={magiasData.ciclo2.magico}
            onClose={() => setShowMagicTablePopupCiclo2Magico(false)}
            onSelect={handleSelectMagic}
          />
        )}
        
        {showMagicPopup && (
          <MagicPopup
            skills={selectedSkills}
            onClose={() => setShowMagicPopup(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;