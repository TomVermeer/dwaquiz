import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { RouterUrls } from './pages/routerUrls'

import './App.scss';

//page imports
import { 
  HomePage,
  QuestionPage,
  WaitingRoomPage,
  ScorePage,
  RoundEndPage,
  QuizNightEndPage
} from "../src/pages/"







function App() {
  return (
    <BrowserRouter basename="/scoreboard">
     <div className="App">
      <Switch>
        <Route exact path={RouterUrls.HOME} component={HomePage}/>
        <Route exact path={RouterUrls.WAITINGROOM} component={WaitingRoomPage}/>
        <Route exact path={RouterUrls.QUESTION} component={QuestionPage} />
        <Route exact path={RouterUrls.SCORE} component={ScorePage}/>
        <Route exact path={RouterUrls.ROUNDEND} component={RoundEndPage}/>
        <Route exact path={RouterUrls.NIGHTEND} component={QuizNightEndPage} />
      </Switch>
     </div>
    </BrowserRouter>
  )

}

export default App;
