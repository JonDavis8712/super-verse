import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { firestore } from './firebaseConfig';
import { CharacterDataProvider } from './CharacterDataContext';

ReactDOM.render(
  <BrowserRouter>
  <CharacterDataProvider>
    <App />
  </CharacterDataProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
