import React, { useState, useEffect } from 'react';
import { HelmetProvider } from'react-helmet-async';
import ToggleButtonAndTab from './ToggleButtonAndTab';
import Layout from '../components/Layout';

const Appbody = ({ profilePictureURL, isProfilePictureChangeAllowed, isSubmitted }) => {
  const [allData, setAllData] = useState([]);
  const [searchText, setSearchText] = useState('');
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

  const handleButtonClick = (buttonId) => {
    ToggleButtonAndTab(buttonId);
  };

  return (
    <div>
    <Layout profilePictureURL={profilePictureURL} isProfilePictureChangeAllowed={isProfilePictureChangeAllowed}>
     
    </Layout>
    <HelmetProvider>
    <title>Super<span>Verse</span></title>
      <meta name="description" content="SuperVerse is a website for all things Super!" />
      <link rel = "stylesheet" href="main.css" ></link>
      <link rel = "stylesheet" href="https://use.fontawesome.com/releases/v6.4.2/css/all.css" ></link>
    </HelmetProvider>
    <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    <div className="body">
    <div className="main-wrapper">
    <div className="app">
    <div className="header">
          {/* <h2 className="app-title">Super<span>Verse.
          </span></h2> */}
          <form onSubmit={handleFormSubmit} className="top-search">
            <input type = "text" className='form-control' placeholder="Search for a character here"
            name = "search" value={searchText} onChange={handleInputChange}/>
            <button type='submit' className="search-btn">
              <i className="fas fa-search"></i>
            </button>
            
              <div className="search-list" id='search-list'>
                {/* <div className="search-list-item">
                  <img src = 'https://drive.google.com/uc?export=download&id=1vuIx3xtTBdBzJ2dYZrBMr_r0Qu0YMbXX' alt=''/>
                  <p>Superman</p>
                </div> */}
              
              </div>
              
            </form>
      </div>    
     <div className="app-body">
        <div className="body-content">
          <div className="content-thumbnail">
            <img className="image" src= 'https://drive.google.com/uc?export=download&id=1vuIx3xtTBdBzJ2dYZrBMr_r0Qu0YMbXX' alt=''/>
          </div>
          <div className="content-list">
            <div className="name">Superman</div>
              <div className="body-tabs-head">
                <button type='button' className="single-tab-head active-btn" id='powerstats' data-id='1'onClick={() => handleButtonClick("1")}>
                  <span className='tabs-top'><span className='faulty-letters'>Pow</span>er<span className='faulty-letters'>stats</span></span>
                </button>
                <button type='button' className="single-tab-head" id='biography' data-id='2' onClick={() => handleButtonClick("2")}>
                  <span className='tabs-top'>Biog<span className='faulty-letters'>ra</span><span className='faulty-letters'>phy</span></span>
                </button>
                <button type='button' className="single-tab-head" id='appearance' data-id='3'onClick={() => handleButtonClick("3")}>
                <span className='tabs-top'><span className='faulty-letters'>App</span>ear<span className='faulty-letters'>ance</span></span>
                </button>
                <button type='button' className="single-tab-head" id='connections' data-id='4'onClick={() => handleButtonClick("4")}>
                  <span className='tabs-top'>Conn<span className='faulty-letters'>ect</span>ions</span>
                </button>
              </div>
              <div className="body-tabs">
                <ul className="single-tab powerstats active-tab" data-id='1'>
                  <li>
                  <div>
                    <i className="fas fa-brain"></i>
                    <span>Intelligence</span>
                  </div>
                  <span className='intelligence'>94</span>
                  </li>
                  <li>
                  <div>
                    <i className="fa-solid fa-dumbbell"></i>
                    <span>Strength</span>
                  </div>
                  <span className='strength'>100</span>
                  </li>
                  <li>
                  <div>
                  <i className="fa-solid fa-person-running"></i>
                    <span>Speed</span>
                  </div>
                  <span className='speed'>100</span>
                  </li>
                  <li>
                  <div>
                    <i className="fas fa-shield-alt"></i>
                    <span>Durability</span>
                  </div>
                  <span className='durability'>100</span>
                  </li>
                  <li>
                  <div>
                    <i className="fas fa-bolt"></i>
                    <span>Power</span>
                  </div>
                  <span className='power'>100</span>
                  </li>
                  <li>
                  <div>
                    <i className="fas fa-fist-raised"></i>
                    <span>Combat</span>
                  </div>
                  <span className='combat'>85</span>
                  </li>
                </ul>
                <ul className="single-tab biography" data-id='2'>
                <li>
                  <div className="fullName">
                  <span>Full Name</span>
                  <span className='fullname'>Clark Kent</span>
                  </div>
                </li>
                <li>
                <div className="Alter-egos">
                  <span>Alter-egos</span>
                  <span>Superman Prime One-Million</span>
                  </div>
                </li>
                <li>
                  <div className="Aliases">
                  <span>Aliases</span>
                  <span>Clark Joseph Kent, </span>
                  <span>The Man of Steel, </span>
                  <span>the Man of Tomorrow, </span>
                  <span>the Last Son of Krypton, </span>
                  <span>Big Blue, </span>
                  <span>the Metropolis Marvel, </span>
                  <span>the Action Ace</span>
                  </div>
                </li>
                <li>
                <div>
                  <span>Place of birth</span>
                  <span className="Birth">Krypton</span>
                  </div>
                </li>
                <li>
                 <div>
                  <span>First appearance</span>
                  <span className="firstAppearance">ACTION COMICS #1</span>
                  </div>
                </li>
                <li>
                  <div>
                  <span>Publisher</span>
                  <span className="publisher">Superman Prime One-million</span>
                  </div>
                </li>
                <li>
                  <div>
                  <span>Alignment</span>
                  <span className="Alignment">good</span>
                  </div>
                </li>
                </ul>
                <ul className="single-tab appearance" data-id='3'>
                  <li>
                    <span>
                      <i className="fas fa-rocket"></i> Gender: </span>
                      <div>
                    <span className="gender">Male</span></div>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-rocket"></i> Race: </span>
                      <div>
                    <span className="race">Kryptonian</span>
                    </div>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-rocket"></i> Height: </span>
                    <div>
                    <span className="height">6'3</span>
                    </div>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-rocket"></i> Weight: </span>
                      <div>
                    <span className="weight">225 lb</span>
                    </div>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-rocket"></i> Eye-color: </span>
                    <span className="eyeColor"><span>Blue</span>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-rocket"></i> Hair-color: </span>
                      <span className="HairColor">
                    <span>Black</span>
                    </span>
                  </li>
                </ul>
                <ul className="single-tab connections" data-id='4'>
                  <li>
                  <div className="group-affiliation">
                    <span>Group Affiliation: </span>
                    <span>Justice League of America, 
                    The Legion of Super-Heroes (pre-Crisis as Superboy), 
                    Justice Society of America (pre-Crisis Earth-2 version),
                    All-Star Squadron (pre-Crisis Earth-2 version)</span>
                    </div>
                  </li>
                  <li>
                    <div className="relatives">
                    <span>Relatives: </span>
                    <span>Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), 
                    Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), 
                    Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)</span>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>  
   </div>
  </div>
</div>
    
    </div>
  )
}

export default Appbody











