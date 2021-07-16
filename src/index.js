import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Components
import Home from './pages/Home';
import FirstGame from './pages/FirstGame';
import SecondGame from './pages/SecondGame'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path={"/firstgame"} children={<FirstGame correctWord={"state"}/>}/>
        <Route path={"/secondgame"} children={<SecondGame />}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
