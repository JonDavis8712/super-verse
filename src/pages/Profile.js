import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { auth } from '../firebaseConfig';
import { db } from '../firebaseConfig';
import { useCharacterData } from '../CharacterDataContext';
import './Profile.css';
import './Login.css';

export default function Profile() {

const [isDivHidden, setIsDivHidden] = useState(true);


  const toggleDivVisibility = () => {
    setIsDivHidden(!isDivHidden); // Toggle the state
  };

  

  return (
    <>
     <div> 
    <Header />
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <h1 className='construction'>THIS PROFILE PAGE SECTION<br />
      IS UNDER CONSTRUCTION</h1>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" onClick={toggleDivVisibility}/>
                  <label htmlFor="reg-log"></label>
            <div className="card-3d-wrap profile">
              <div className="card-3d-wrapper">
                <div className="card-front-profile">
                  <div className="center-wrap">
                    <div className="section text-center">
                              
                     
                    </div>
                  </div>
                </div>
                <div className="card-back-profile">
                <div className={`form-group-profile ${isDivHidden ? 'hidden' : ''}`}>
              
            
            <div className="content-thumbnail fav">
            <img className="image fav" src= 'https://drive.google.com/uc?export=download&id=1L5hRlcV1Tjy-_cugoMmnw71HlmwtnGpo' alt=''/>
          </div>
          <div className="content-list"/>
            <div className="name">Batman</div>
      </div></div>
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        
     
    
    </>
  );
}
