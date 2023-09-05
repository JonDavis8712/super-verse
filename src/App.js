import React, { useState, useEffect } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import API from './assets/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LoginRoute from './pages/LoginRoute';
import Team from './pages/Team';
import Profile from './pages/Profile';
import Signout from './pages/Signout';
import NoPage from './pages/NoPage';
import Appbody from './assets/Appbody';

function App() {
  const location = useLocation();
  const isApiPage = location.pathname === '/API';

  return (
    <>
      {isApiPage && <API />}
      <Routes>
        {/* Define your Header component to appear on every page */}
        <Route element={<Header />} />

        {/* Use the "index" attribute for the Home route */}
        <Route index element={<Home />} />

        {/* Other routes */}
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signout" element={<Signout />} />
        <Route path="/Login/*" element={<LoginRoute />} />
        <Route path="/API/*" element={isApiPage ? <API /> : <NoPage />} />

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