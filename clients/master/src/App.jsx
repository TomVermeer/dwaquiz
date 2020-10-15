import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import { Home } from './pages/home/Home';
import { Teams } from './pages/teams/Teams';
import { PAGES } from './pages/pages';
import {MasterTitle} from "./components/MasterTitle";

function App() {
  return (
    <div className="App">
      <MasterTitle/>
      <div className="content">
          <Router>
              <Switch>
                  <Route exact path={PAGES.HOME}>
                      <Home />
                  </Route>
                  <Route exact path={PAGES.TEAMS}>
                      <Teams/>
                  </Route>
              </Switch>
          </Router>
      </div>
    </div>
  );
}

export default App;
