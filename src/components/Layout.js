// Layout.js
import React from 'react';
import Header from './Header';

export default function Layout({ children, profilePictureURL, isProfilePictureChangeAllowed }) {
  return (
    <div>
      <Header profilePictureURL={profilePictureURL} isProfilePictureChangeAllowed={isProfilePictureChangeAllowed} />
      {children}
    </div>
  );
}
