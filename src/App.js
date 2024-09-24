import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterInfo from './components/CharacterInfo';
import Stats from './components/Stats';
import ResourceBars from './components/ResourceBars';
import SkillTable from './components/SkillTable';
import AdditionalInfo from './components/AdditionalInfo';
import WeaponTable from './components/WeaponTable';
import Backpack from './components/Backpack';
import './App.css';

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
    skills: {}, // Adicionado estado inicial para skills
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

  useEffect(() => {
    const savedCharacter = localStorage.getItem('character');
    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('character', JSON.stringify(character));
  }, [character]);

  return (
    <div className="App">
      <Header />
      <div className="character-sheet">
        <div className="top-section">
          <div className="profile-container">
            <CharacterInfo character={character} setCharacter={setCharacter} />
            <button onClick={() => setShowBackpack(!showBackpack)}>Mochila</button>
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
      </div>
    </div>
  );
}

export default App;