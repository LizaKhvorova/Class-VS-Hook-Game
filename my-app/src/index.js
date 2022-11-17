import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Game from './components/game/game';
import {GameHook} from './components/game/gameHooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameHook />
  </React.StrictMode>
);

