import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import './App.scss';

//page imports
import { 
  HomePage,
  QuestionPage,
  WaitingRoomPage,
  ScorePage
} from "../src/pages/index"





function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/waitingRoom" component={WaitingRoomPage}/>
        <Route exact path="/question" component={QuestionPage} />
        <Route exact path="/score" component={ScorePage}/>

      </Switch>
     </div>
    </BrowserRouter>
  )

}

export default App;
