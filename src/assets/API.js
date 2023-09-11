import React, { useEffect, useState } from 'react';

function API() {
  const [apiData, setApiData] = useState([]);
  const [characterIds, setCharacterIds] = useState([]);
  
  const characterID = Array.from({ length: 731 }, (_, index) => index + 1);
  const characterIdNumber = characterID.filter((item) => typeof item === 'number');
  
  useEffect(() => {
    // Fetch data for each character using characterIdNumber
    const fetchCharacters = () => {
        try {
          const dataPromises = characterIdNumber.map((characterId) => {
            return fetch(`https://superheroapi.com/api.php/3382114452106328/${characterId}`)
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error(`Error fetching character with ID: ${characterId}`);
                }
              });
          });
      
          Promise.all(dataPromises)
            .then((characterData) => {
                characterData.forEach(character =>{
                  let markup = `
                  <div>
                  <h2>${character.name}</h2>
                  <img src="${character.image.url}" alt="${character.name}" style = "width:130px; height:220px;">
                 <li> <span>Power:</span> <span>${character.powerstats.power}</span></li>
                 <li> <span>Speed:</span> <span>${character.powerstats.speed}</span></li>
                 <li> <span>Strength:</span> <span>${character.powerstats.strength}</span></li>
                 <li> <span>Intelligence:</span> <span>${character.powerstats.intelligence}</span></li>
                 <li> <span>Combat:</span> <span>${character.powerstats.combat}</span></li>
                 <li> <span>Alignment:</span> <span>${character.biography.alignment}</span></li>
                 </div>`
                  document.querySelector('.characters').insertAdjacentHTML('beforeend', markup);
                })
              setApiData(characterData.results); // Assuming the API response has a "results" property
            })
            .catch((error) => {
              console.error('Error fetching characters:', error);
            });
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };


    fetchCharacters();
  }, []);

  

  return (
    <div>
    <div className="charbox">
       <ul className='characters'>  
      </ul> 
    </div>
      </div>
  );
}

export default API;