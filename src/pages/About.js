import React from 'react'
import Header from '../components/Header'
import './About.css'

export default function About(profilePictureURL, isProfilePictureChangeAllowed, username, isSubmitted){
    return (
      <>
     <Header />
     <div className="aboutContainer">
     <div className="container">
     <div className="app about">
     <h1 className="about-title">ABOUT: <br /> SuperVerse</h1>
       <p className="about">
        Welcome to SuperVerse! This Page started out as a simple idea <br />
        but quickly turned into a full-stack web application. <br />
        of course, the code is not the cleanest, but it is the <br />
        first real multi-paged project I have created. <br />
        Building this page so far was difficult to say the least <br />
        as this was my first attempt at a larger project with React, <br />
        something I have not worked long with. But, doing so has been rewarding <br />
        as I have learned a lot. I will continue to work on this project as I continue to learn React.
       </p>
       <h1 className="about-title">THINGS TO COME: <br /></h1>
       <p className="about">
        <ul className="about-list">
          <li>Full profile page, with username, favorite character,
          fully modular editing</li>
          <li>A team page, where you can save a team of 7 characters, and 7 reserves based on <br />
          a not yet determined point system. With this team, you can go up against <br />
          other users to gain points, or to trade.</li>
          <li>Head to head matchup game mode, take your team of characters, and face other <br />
          teams, wins and losses are determined by the average powerstats of each of your, and your <br />
          opponent's characters. The game mode details are not yet fully fledged out <br />
          of course, but as this is a passion project, I will continue to think of ideas!</li>
          <li>As I learn more, I will clean up the code for this project, It's kind of terrible, not <br />
          going to lie, but man was it fun!</li>
        </ul>
       </p>
       </div>
       </div>
       </div>
      </>
    )
  }
