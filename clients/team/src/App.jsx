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
import {Card, Navbar} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {useHttpErrorHandler} from "./effects/useHttpErrorHandler";

function App() {

    useHttpErrorHandler();

    const quizProgress = useSelector(state => state.shared.quizProgress);
    return (
        <Page title="Quizzer"
              quizNight={quizProgress}
              cardProvider={Card}
              navbarProvider={Navbar}>
            <Router basename="/team">
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
