import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {RouterUrls} from './pages/routerUrls'

import './App.scss';
//page imports
import {HomePage} from "../src/pages/"
import {useHttpErrorHandler} from "./effects/useHttpErrorHandler";
import {QuizNightRouter} from "./pages/quizNight/QuizNightRouter";


function App() {
    useHttpErrorHandler();
  return (
    <BrowserRouter basename="/scoreboard">
     <div className="App">
      <Switch>
        <Route exact path={RouterUrls.HOME} component={HomePage}/>
        <Route path={RouterUrls.QUIZ_PIN}>
            <QuizNightRouter/>
        </Route>
      </Switch>
     </div>
    </BrowserRouter>
  )

}

export default App;
