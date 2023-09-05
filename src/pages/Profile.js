import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { auth } from '../firebaseConfig';
import { useCharacterData } from '../CharacterDataContext';
import API from '../assets/API';



function MyForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectOption, setSelectOption] = useState('Option 1');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleProfilePictureChange = (event) => {
      const file = event.target.files[0];
      setProfilePicture(event.target.files[0]);
  }

  const handleDropDownChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('username: ', username);
    console.log('Profile Picture: ', profilePicture);
    console.log('Selected Option: ', selectedOption);
  }

  // Include your form JSX code here
  return (
   <div>
    <h2>Edit Profile</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username" className="username">Username:</label>
        <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        required
        />
      </div>
      <div className="form-group">
        <label htmlFor="profilePicture" className="profilePicture">Profile Picture:</label>
        <input
        type="file"
        id="profilePicture"
        name="profilePicture"
        accept="image/*"
        onChange={handleProfilePictureChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dropDown" className="dropDown">Select Your Favorite Character</label>
        <select
        id="dropDown"
        name="dropDown"
        value={selectedOption}
        onChange={handleDropDownChange}
        >
        

        </select>
      </div>
    </form>
    <API />
   </div>
  );
}

export default function Profile() {
  const [userEmail, setUserEmail] = useState('');
  const { characterData } = useCharacterData();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const email = currentUser.email;
      setUserEmail(email);
    }
  }, []);

  return (
    <>
      <Header />
      <h1 className="Profile">Profile</h1>
      <div className="profileBox">
     
     
        
      </div>
    </>
  );
}
