import React from 'react';

import {Switch, Route, BrowserRouter, useHistory} from 'react-router-dom'
import { RouterUrls } from './pages/routerUrls'

import './App.scss';
//page imports
import {HomePage} from "../src/pages/"
import {useHttpErrorHandler} from "./effects/useHttpErrorHandler";
import {QuizNightRouter} from "./pages/quizNight/QuizNightRouter";


function App() {
    useHttpErrorHandler();
  return (
     <div className="App">
      <Switch>
        <Route exact path={RouterUrls.HOME} component={HomePage}/>
        <Route path={RouterUrls.QUIZ_PIN}>
            <QuizNightRouter/>
        </Route>
      </Switch>
     </div>
  )

}

export default App;
