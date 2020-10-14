import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'


import HomePage from '../src/pages/homePage/HomePage'
import WaitingRoomPage from '../src/pages/waitingRoom/WaitingRoomPage'

import './App.scss';




function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Switch>
        <Route exact path="/"
        component={HomePage}/>
        <Route exact path="/waitingRoom" component={WaitingRoomPage}/>

      </Switch>
     </div>
    </BrowserRouter>
  )

}

export default App;
