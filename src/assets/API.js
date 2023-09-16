import React, { useEffect, useState } from 'react';
import toggleButtonAndTab from './ToggleButtonAndTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Fetch() {
  
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [apiData, setApiData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);


  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchAllSuperHero(searchText);
  };

  const clearSearchList = () => {
    const searchList = document.querySelector('.search-list');
    if (searchList) {
      searchList.innerHTML = '';
    }
  };

   const showSearchList = (data) => {
    clearSearchList();
    const searchList = document.querySelector('.search-list');
    if (searchList) {
      data.forEach(dataItem => {
        const divElem = document.createElement('div');
        divElem.classList.add('search-list-item');
        divElem.innerHTML = `
          <img src="${dataItem.image.url ? dataItem.image.url : ''}" alt="">
          <p data-id="${dataItem.id}">${dataItem.name}</p>
        `;
        divElem.addEventListener('click', handleSearchResultClick); // Add click listener
        searchList.appendChild(divElem);
      });
    }
  };

  const handleSearchResultClick = (e) => {
  clearSearchList();
  setSearchText('');

  const searchId = e.target.dataset.id;
  const singleData = allData.find(data => searchId === data.id.toString());
  setSelectedData(singleData);
  console.log(singleData);

  if (singleData) {
    const thumbnailImage = document.querySelector('.image');
    if (thumbnailImage) {
      thumbnailImage.src = singleData.image.url || '';
    }

    const name = document.querySelector('.name');
    if (name) {
      name.textContent = singleData.name || '';
    }

    const fullname = document.querySelector('.fullname');
    if (fullname) {
      fullname.textContent = singleData.biography['full-name'] || '';
    }
    const firstAppearance = document.querySelector('.firstAppearance');
    if (firstAppearance) {
      firstAppearance.textContent = singleData.biography['first-appearance'] || '';
    }
    const publisher = document.querySelector('.publisher');
    if (publisher) {
      publisher.textContent = singleData.biography['publisher'] || '';
    }
    const Alignment = document.querySelector('.Alignment');
    if (Alignment) {
      Alignment.textContent = singleData.biography['alignment'] || '';
    }


    const race = document.querySelector('.race');
    if (race) {
      race.textContent = singleData.appearance['race'] || '';
    }
    const gender = document.querySelector('.gender');
    if (gender) {
      gender.textContent = singleData.appearance['gender'] || '';
    }
    const height = document.querySelector('.height');
    if (height) {
      height.textContent = singleData.appearance['height'] || '';
    }
    const weight = document.querySelector('.weight');
    if (weight) {
      weight.textContent = singleData.appearance['weight'] || '';
    }
    const eyeColor = document.querySelector('.eyeColor');
    if (eyeColor) {
      eyeColor.textContent = singleData.appearance['eye-color'] || '';
    }
    const HairColor = document.querySelector('.HairColor');
    if (HairColor) {
      HairColor.textContent = singleData.appearance['hair-color'] || '';
    }

    const powerstats = singleData.powerstats || {};

    const strength = document.querySelector('.strength');
    if (strength) {
      strength.textContent = powerstats.strength || '';
    }

    const intelligence = document.querySelector('.intelligence');
    if (intelligence) {
      intelligence.textContent = powerstats.intelligence || '';
    }

    const speed = document.querySelector('.speed');
    if (speed) {
      speed.textContent = powerstats.speed || '';
    }

    const durability = document.querySelector('.durability');
    if (durability) {
      durability.textContent = powerstats.durability || '';
    }

    const power = document.querySelector('.power');
    if (power) {
      power.textContent = powerstats.power || '';
    }

    const combat = document.querySelector('.combat');
    if (combat) {
      combat.textContent = powerstats.combat || '';
    }

    const Birth = document.querySelector('.Birth');
    if (Birth) {
      Birth.textContent = singleData.biography['place-of-birth'] || '';
    }

    const aliasesDiv = document.querySelector('.Aliases');
    if (aliasesDiv) {
      const aliasesSpans = aliasesDiv.querySelectorAll('span');
      const aliasesArray = singleData.biography.aliases || [];
      if (aliasesArray.length === 0) {
        aliasesSpans[1].textContent = 'No aliases found';
      } else {
        const concatenatedAliases = aliasesArray.join(' • ');
        aliasesSpans[1].textContent = concatenatedAliases;

        for (let i = 2; i < aliasesSpans.length; i++) {
          aliasesSpans[i].textContent = '';
        }
      }
    }

    const alterEgosDiv = document.querySelector('.Alter-egos');
if (alterEgosDiv) {
  const alterEgosSpans = alterEgosDiv.querySelectorAll('span');
  const alterEgosValue = singleData.biography['alter-egos'];
  if (!Array.isArray(alterEgosValue)) {
    alterEgosSpans[1].textContent = 'No alter-egos found';
  } else {
    const concatenatedEgos = alterEgosValue.join(' • ');
    alterEgosSpans[1].textContent = concatenatedEgos;

    for (let i = 2; i < alterEgosSpans.length; i++) {
      alterEgosSpans[i].textContent = '';
    }
  }
}

const affiliationDiv = document.querySelector('.group-affiliation');
if (affiliationDiv) {
  const affiliationSpans = affiliationDiv.querySelectorAll('span');
  const affiliationArray = singleData.connections['group-affiliation'] || [];
  if (!Array.isArray(affiliationArray)) {
    affiliationSpans[1].textContent = singleData.connections['group-affiliation'];
  } else {
    const concatenatedAffiliation = affiliationArray.join(' • ');
    affiliationSpans[1].textContent = concatenatedAffiliation;

    for (let i = 2; i < affiliationSpans.length; i++) {
      affiliationSpans[i].textContent = '';
    }
  }
}

const relativesDiv = document.querySelector('.relatives');
if (relativesDiv) {
  const relativesSpans = relativesDiv.querySelectorAll('span');
  const relativesArray = singleData.connections.relatives || [];
  if (!Array.isArray(relativesArray)) {
    relativesSpans[1].textContent = singleData.connections.relatives;
  } else {
    const concatenatedrelatives = relativesArray.join(' • ');
    relativesSpans[1].textContent = concatenatedrelatives;

    for (let i = 2; i < relativesSpans.length; i++) {
      relativesSpans[i].textContent = '';
    }
  }
}

  }
};

  const fetchAllSuperHero = async (searchText) => {
    let url = `https://superheroapi.com/api.php/3382114452106328/search/${searchText}`;
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      if (responseData.response === 'success') {
        setAllData(responseData.results);
        showSearchList(responseData.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllSuperHero(searchText);
  }, [searchText]);

  return (
    <div className='character-container'>
      <button className="toggle-button" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      {isSearchVisible && (
        <form onSubmit={handleFormSubmit} className="top-search">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a character here"
            name="search"
            value={searchText}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-btn">
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <div className="search-list" id='search-list'>
                {/* <div className="search-list-item">
                  <img src = 'https://drive.google.com/uc?export=download&id=1vuIx3xtTBdBzJ2dYZrBMr_r0Qu0YMbXX' alt=''/>
                  <p>Superman</p>
                </div> */}
              
              </div>
          </button>
          {/* You can render search results here or in another component */}
        </form>
      )}
      {isDropdownOpen && (
        <div className="app-body character"> 
          <div className="charbox">
            <ul className='characters'>
              {apiData.map((character, index) => (
                <div key={index} className="character-container">
                  <h2 className='names'>{character.name}</h2>
                  <div className="character-content">
                    {character.image && character.image.url ? (
                      <img src={character.image.url} alt={character.name} style={{ width: '80px', height: '120px' }} />
                    ) : (
                      <p>No image available</p>
                    )}
                    <ul className='character-box'>
                      <li><span>Power:</span> <span>{character.powerstats && character.powerstats.power}</span></li>
                      <li><span>Speed:</span> <span>{character.powerstats && character.powerstats.speed}</span></li>
                      <li><span>Strength:</span> <span>{character.powerstats && character.powerstats.strength}</span></li>
                      <li><span>Intelligence:</span> <span>{character.powerstats && character.powerstats.intelligence}</span></li>
                      <li><span>Combat:</span> <span>{character.powerstats && character.powerstats.combat}</span></li>
                      <li><span>Alignment:</span> <span>{character.biography && character.biography.alignment}</span></li>
                    </ul>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fetch;
