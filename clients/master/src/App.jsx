import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss';
import {Home} from './pages/home/Home';
import {Teams} from './pages/teams/Teams';
import {PAGES} from './pages/pages';
import {useSelector} from "react-redux";
import { Page } from "shared/components/Page/Page";


function App() {
    const title = useSelector(state => state.shared.title);
    const quizProgress = useSelector(state => {
        return {
            quizPin: state.quizNight.quizPin,
            roundNumber: 1, // TODO
            questionNumber: 2 // TODO
        }
    });
    return (
        <Page quizNight={quizProgress} title={title}>
            <Router>
                <Switch>
                    <Route exact path={PAGES.HOME}>
                        <Home/>
                    </Route>
                    <Route exact path={PAGES.TEAMS}>
                        <Teams/>
                    </Route>
                </Switch>
            </Router>
        </Page>
    );
}

export default App;
