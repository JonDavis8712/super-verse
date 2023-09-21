import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LoginRoute from './pages/LoginRoute';
import Profile from './pages/Profile';
import Signout from './pages/Signout';
import NoPage from './pages/NoPage';
import Appbody from './assets/Appbody';

function App() {
  const location = useLocation(); // Use useLocation to get the location object

  return (
    <>
      <Routes>
        {/* This sets the Header component to appear on every page */}
        <Route element={<Header />} />

        {/* Use the "index" attribute for the Home route */}
        <Route index element={<Home />} />

        {/* Other routes */}
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signout" element={<Signout />} />
        <Route path="/Login/*" element={<LoginRoute />} />

        {/* Catch-all route */}
        <Route path="*" element={<NoPage />} />
      </Routes>

      <div className="body">
        {/* Only render Appbody for the Home page */}
        {location.pathname === '/' && <Appbody />}
      </div>
    </>
  );
}

export default App;
