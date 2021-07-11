import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Game from './components/Game';


ReactDOM.render(
  <React.StrictMode>
    <Game correctWord={"state"}/>
  </React.StrictMode>,
  document.getElementById('root')
);
