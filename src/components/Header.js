import React, { useState, useEffect } from 'react';
import { useNavigate } from'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header({profilePictureURL, isProfilePictureChangeAllowed}) {
  const [menuActive, setMenuActive] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  });
  return () => {
    unsubscribe();
  };
},[]);

  const logoutUser = async (e) => {
    await signOut(auth);
  }

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleHomeClick = () => {
    navigate('/');
  }



  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <h2 className="app-title" onClick={handleHomeClick}>Super<span>Verse.</span></h2>
        </div>
        <div className={`navbar-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item"><Link to="/about">About</Link></li>
          <li className="navbar-item"><Link to="/contact">Contact</Link></li>


          {!user ? (
            <li className="navbar-item" id="userLog">
              <Link to="/Login">LOGIN</Link>
            </li>
          ) : (
            <>
              <li className="navbar-item" id="signout" onClick={logoutUser}>
                <Link to="/Signout">SignOut</Link>
              </li>
              <li className="navbar-item" id="profile">
                <Link to="/Profile">
                {isProfilePictureChangeAllowed ? (
        profilePictureURL ? (
          <img src={profilePictureURL} alt="Profile" className="profile-picture" />
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )
      ) : (
        <FontAwesomeIcon icon={faUser} />
      )}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;