import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterInfo from './components/characterInfo/CharacterInfo';
import Stats from './components/stats/Stats';
import ResourceBars from './components/stats life/ResourceBars';
import SkillTable from './components/SkillTable';
import AdditionalInfo from './components/pupop/aditional info/AdditionalInfo';
import WeaponTable from './components/weapons/WeaponTable';
import Backpack from './components/pupop/backpacks/Backpack';
import MagicTable from './components/model table/MagicTable';
import MagicDetails from './components/MagicDetails';
import MagicPopup from './components/MagicSelects/MagicPopup';
import MagicTablePopupCiclo1Fisico from './components/tabelas de magias/MagicTablePopupCiclo1Fisico';
import MagicTablePopupCiclo1Magico from './components/tabelas de magias/MagicTablePopupCiclo1Magico';
import MagicTablePopupCiclo2Fisico from './components/tabelas de magias/MagicTablePopupCiclo2Fisico';
import MagicTablePopupCiclo2Magico from './components/tabelas de magias/MagicTablePopupCiclo2Magico';
import DiceRoller from './components/diceRoller/DiceRoller';
import './App.css';
import backpackImage from './bags.png';
import { GiMagicBroom, GiMagicAxe, GiMagickTrick, GiSave, GiLoad } from "react-icons/gi";

import { saveAs } from 'file-saver';

import magiasData from './data/magias.json';

const initialSkills = {
  'Atletismo': { roll: 0, trained: 0, others: 0 },
  'Prestidigitação': { roll: 0, trained: 0, others: 0 },
  'Luta/Briga': { roll: 0, trained: 0, others: 0 },
  'Pontaria': { roll: 0, trained: 0, others: 0 },
  'Magia (Cast)': { roll: 0, trained: 0, others: 0 },
  'Reflexos': { roll: 0, trained: 0, others: 0 },
  'Mana Sense': { roll: 0, trained: 0, others: 0 },
  'Fortitude': { roll: 0, trained: 0, others: 0 },
  'Vontade': { roll: 0, trained: 0, others: 0 },
  'Sobrevivência': { roll: 0, trained: 0, others: 0 },
  'Persuasão': { roll: 0, trained: 0, others: 0 },
  'Diplomacia': { roll: 0, trained: 0, others: 0 },
  'História': { roll: 0, trained: 0, others: 0 },
  'Arcana': { roll: 0, trained: 0, others: 0 },
  'Intuição': { roll: 0, trained: 0, others: 0 },
  'Percepção': { roll: 0, trained: 0, others: 0 },
  'Stealth': { roll: 0, trained: 0, others: 0 },
  'Loot': { roll: 0, trained: 0, others: 0 },
  'Medicina': { roll: 0, trained: 0, others: 0 },
  'Concentração': { roll: 0, trained: 0, others: 0 }
};

function App() {
  const [character, setCharacter] = useState({
    // ... outros estados permanecem os mesmos
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
      agili: { base: 10, mod: 0 },
      const: { base: 10, mod: 0 },
      força: { base: 10, mod: 0 },
      inteli: { base: 10, mod: 0 },
      persp: { base: 10, mod: 0 },
      prese: { base: 10, mod: 0 },
    },
    resources: {
      Vida: { max: 30, current: 0 },
      Mana: { max: 10, current: 10 },
      Estam: { max: 10, current: 100 }
    },
    skills: initialSkills,
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
    selectedMagicSkills: [],
  });

  const [showBackpack, setShowBackpack] = useState(false);
  const [showMagicPopup, setShowMagicPopup] = useState(false); 
  const [showMagicTablePopupCiclo1Fisico, setShowMagicTablePopupCiclo1Fisico] = useState(false);
  const [showMagicTablePopupCiclo1Magico, setShowMagicTablePopupCiclo1Magico] = useState(false);
  const [showMagicTablePopupCiclo2Fisico, setShowMagicTablePopupCiclo2Fisico] = useState(false);
  const [showMagicTablePopupCiclo2Magico, setShowMagicTablePopupCiclo2Magico] = useState(false);
  const [selectedMagic, setSelectedMagic] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);

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
    setCharacter((prevCharacter) => {
      const prevSkills = prevCharacter.selectedMagicSkills;
      let newSkills;
      if (prevSkills.some((skill) => skill.magia === magia.magia)) {
        newSkills = prevSkills.filter((skill) => skill.magia !== magia.magia);
      } else {
        newSkills = [...prevSkills, magia];
      }
      return {
        ...prevCharacter,
        selectedMagicSkills: newSkills,
      };
    });
  };

  const exportData = () => {
    const dataStr = JSON.stringify(character);
    const blob = new Blob([dataStr], {type: "application/json"});
    saveAs(blob, "character-data.json");
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedCharacter = JSON.parse(e.target.result);
          setCharacter(importedCharacter);
          localStorage.setItem('character', JSON.stringify(importedCharacter));
          alert('Dados importados com sucesso!');
        } catch (error) {
          alert('Erro ao importar os dados. Verifique se o arquivo é válido.');
        }
      };
      reader.readAsText(file);
    }
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
              <button onClick={() => setShowMagicTablePopupCiclo1Fisico(true)} className="magic-button ciclo1-fisico-button">
              <GiMagicAxe className="magic-icon" id='magic-icon'/> Ciclo 1 - Físico
              </button>
              <button onClick={() => setShowMagicTablePopupCiclo1Magico(true)} className="magic-button">
              <GiMagickTrick className="magic-icon" id='magic-icon'/> Ciclo 1 - Mágico
              </button>
              <button onClick={() => setShowMagicPopup(true)} className="magic-popup-button">
              <GiMagicBroom className="magic-icon" /> Ver Magias Selecionadas
              </button>
              <button onClick={() => setShowMagicTablePopupCiclo2Fisico(true)} className="magic-button">
              <GiMagicAxe className="magic-icon" id='magic-icon'/>  Ciclo 2 - Físico
              </button>
              <button onClick={() => setShowMagicTablePopupCiclo2Magico(true)} className="magic-button">
              <GiMagickTrick className="magic-icon" id='magic-icon'/> Ciclo 2 - Mágico
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
            
          </div>
          
          <div className="right-container">
            <div className="resources-container">
              <ResourceBars resources={character.resources} setCharacter={setCharacter} />
            </div>
            <div className="dice-roller-container">
              <DiceRoller />
            </div>
            
            
          </div>
        </div>
        <div className="weapon-table-container weapon-table-margin">
          <WeaponTable weapons={character.weapons} setCharacter={setCharacter} />
        </div>
        <div className="additional-info-container">
              <AdditionalInfo additionalInfo={character.additionalInfo} setCharacter={setCharacter} />
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
            selectedSkills={character.selectedMagicSkills}
          />
        )}
        {showMagicTablePopupCiclo1Magico && (
          <MagicTablePopupCiclo1Magico
            magias={magiasData.ciclo1.magico}
            onClose={() => setShowMagicTablePopupCiclo1Magico(false)}
            onSelect={handleSelectMagic}
            selectedSkills={character.selectedMagicSkills}
          />
        )}
        {showMagicTablePopupCiclo2Fisico && (
          <MagicTablePopupCiclo2Fisico
            magias={magiasData.ciclo2.fisico}
            onClose={() => setShowMagicTablePopupCiclo2Fisico(false)}
            onSelect={handleSelectMagic}
            selectedSkills={character.selectedMagicSkills}
          />
        )}
        {showMagicTablePopupCiclo2Magico && (
          <MagicTablePopupCiclo2Magico
            magias={magiasData.ciclo2.magico}
            onClose={() => setShowMagicTablePopupCiclo2Magico(false)}
            onSelect={handleSelectMagic}
            selectedSkills={character.selectedMagicSkills}
          />
        )}
        
        {showMagicPopup && (
          <MagicPopup
            skills={character.selectedMagicSkills}
            onClose={() => setShowMagicPopup(false)}
            setCharacter={setCharacter}
          />
        )}
        
        <div className="export-import-buttons" id='export-import-buttons'>
          <button onClick={exportData} className="export-button">
            <GiSave className="export-icon" />
            Exportar Dados
            </button>
          <label htmlFor="import-input" className="import-button">
            <GiLoad className="button-icon" />
            Importar Dados
            <input
              id="import-input"
              type="file"
              accept=".json"
              onChange={importData}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>
      
    </div>
  );
}

export default App;