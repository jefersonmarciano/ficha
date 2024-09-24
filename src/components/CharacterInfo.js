import React, { useState, useEffect } from 'react';
import './CharacterInfo.css';

function CharacterInfo({ character, setCharacter }) {
  const [showOwlinElement, setShowOwlinElement] = useState(false);

  useEffect(() => {
    setShowOwlinElement(character.race === 'owlin');
  }, [character.race]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCharacter((prev) => ({ ...prev, profileImage: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="character-info">
      <div className="profile-section">
        <div className="profile-image-container">
          <img
            src={character.profileImage || 'https://via.placeholder.com/150'}
            alt="Perfil"
            className="profile-image"
          />
          <label htmlFor="image-upload" className="image-upload-label">
            Alterar Imagem
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="image-upload"
          />
        </div>
        <div className="character-name-level">
          <input
            type="text"
            name="characterName"
            value={character.characterName}
            onChange={handleInputChange}
            placeholder="Nome do Personagem"
            className="character-name-input"
          />
          <div className="level-container">
            <label htmlFor="level">Nível:</label>
            <input
              id="level"
              type="number"
              name="level"
              value={character.level}
              onChange={handleInputChange}
              placeholder="Nível"
              className="level-input"
            />
          </div>
        </div>
      </div>
      <div className="character-details">
        <div className="input-group">
          <label htmlFor="playerName">Jogador:</label>
          <input
            id="playerName"
            type="text"
            name="playerName"
            value={character.playerName}
            onChange={handleInputChange}
            placeholder="Nome do Jogador"
          />
        </div>
        <div className="input-group">
          <label htmlFor="race">Raça:</label>
          <select
            id="race"
            name="race"
            value={character.race}
            onChange={handleInputChange}
          >
            <option value="">Selecione a Raça</option>
            <option value="humano">Humano</option>
            <option value="meio-orc">Meio-Orc</option>
            <option value="minotauro">Minotauro</option>
            <option value="centauro">Centauro</option>
            <option value="tabaxi">Tabaxi</option>
            <option value="kenku">Kenku</option>
            <option value="aarakocra">Aarakocra</option>
            <option value="owlin">Owlin</option>
            <option value="elfo">Elfo</option>
            <option value="sereia-tritao">Sereia/Tritão</option>
            <option value="goliath">Goliath</option>
            <option value="dwarf">Dwarf</option>
            <option value="archelon">Archelon</option>
            <option value="draconato">Draconato</option>
            <option value="deadalus">Deadalus</option>
            <option value="eldritch">Eldritch</option>
            <option value="osteon">Osteon</option>
            <option value="typhon">Typhon</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="element">Elemento:</label>
          <select
            id="element"
            name="element"
            value={character.element}
            onChange={handleInputChange}
          >
            <option value="">Selecione o Elemento</option>
            <option value="fogo">Fogo</option>
            <option value="gelo">Gelo</option>
            <option value="vento">Vento</option>
            <option value="agua">Água</option>
            <option value="pedra">Pedra</option>
            <option value="raio">Raio</option>
            <option value="trevas">Trevas</option>
            <option value="luz">Luz</option>
          </select>
        </div>
        {showOwlinElement && (
          <div className="input-group">
            <label htmlFor="owlinElement">Elemento Owlin:</label>
            <select
              id="owlinElement"
              name="owlinElement"
              value={character.owlinElement || ''}
              onChange={handleInputChange}
            >
              <option value="">Selecione o Elemento Owlin</option>
              <option value="fogo">Fogo</option>
              <option value="gelo">Gelo</option>
              <option value="vento">Vento</option>
              <option value="agua">Água</option>
              <option value="pedra">Pedra</option>
              <option value="raio">Raio</option>
              <option value="trevas">Trevas</option>
              <option value="luz">Luz</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterInfo;