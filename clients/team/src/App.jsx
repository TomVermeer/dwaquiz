import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {RouterUrls} from './pages/pages';
import {Home} from './pages/home/Home';
import {Page} from "shared/components/Page/Page";
import {TeamAppliedRouter} from "./pages/TeamAppliedRouter";

function App() {
    return (
        <Page title="Quizzer" quizNight={{
            roundNumber: null,
            questionNumber: null,
            quizPin: null
        }}>
            <Router>
                <Switch>
                    <Route exact path={RouterUrls.HOME}>
                        <Home/>
                    </Route>
                    <Route path={RouterUrls.TEAM_APPLIED}>
                        <TeamAppliedRouter/>
                    </Route>
                </Switch>
            </Router>
        </Page>
    );
}

export default App;
