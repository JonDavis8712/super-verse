// THIS CODE IS CURRENTLY UNUSED IN THE PAGE, BUT WILL BE ADDED IN THE FUTURE
// CharacterDropdown.js

import React, { useState, useEffect } from 'react';
import '../App.css';

function CharacterDropdown({ onSelectCharacter }) {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const characterID = Array.from({ length: 731 }, (_, index) => index + 1);
    const characterIdNumber = characterID.filter((item) => typeof item === 'number');

    const fetchCharacters = async () => {
      try {
        const dataPromises = characterIdNumber.map((characterId) =>
          fetch(`https://superheroapi.com/api.php/3382114452106328/${characterId}`)
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error(`Error fetching character with ID: ${characterId}`);
              }
            })
        );

        const characterData = await Promise.all(dataPromises);
        setCharacterData(characterData);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const handleCharacterSelect = (character) => {
    onSelectCharacter(character);
  };

  return (
    <div>
      <select onChange={(e) => handleCharacterSelect(e.target.value)}>
        {characterData.map((character) => (
          <option key={character.id} value={character.name}>
            {character.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CharacterDropdown;
