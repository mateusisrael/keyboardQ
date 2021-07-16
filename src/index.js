import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Components
import FirstGame from './pages/FirstGame';
import Home from './pages/Home';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path={"/firstgame"} children={<FirstGame correctWord={"state"}/>}/>
        <Route path={"/secondgame"} children={<h1>SecondGame</h1>}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
