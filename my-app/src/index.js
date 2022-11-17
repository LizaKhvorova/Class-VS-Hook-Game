import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './components/game/game'; // Add to root.render to watch classes 
import {GameHook} from './components/game/gameHooks'; // Add to root.render to watch Hooks

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameHook />
  </React.StrictMode>
);

