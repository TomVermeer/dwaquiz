import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {Pages} from './pages';
import {Home} from './pages/home/Home';
import {WaitForApproval} from './pages/waitForApproval/WaitForApproval';
import {WaitForQuestion} from "./pages/waitForQuestion/WaitForQuestion";
import {Page} from "shared/components/Page/Page";

function App() {
    return (
        <Page title="Quizzer" quizNight={{
            roundNumber: null,
            questionNumber: null,
            quizPin: null
        }}>
            <Router>
                <Switch>
                    <Route exact path={Pages.HOME}>
                        <Home/>
                    </Route>
                    <Route exact path={Pages.WAIT_FOR_APPROVAL}>
                        <WaitForApproval/>
                    </Route>
                    <Route exact path={Pages.WAIT_FOR_QUESTION}>
                        <WaitForQuestion/>
                    </Route>
                </Switch>
            </Router>
        </Page>
    );
}

export default App;
