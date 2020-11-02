import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss';
import {Home} from './pages/home/Home';
import {RouterUrls} from './pages/routerUrls';
import {useSelector} from "react-redux";
import { Page } from "shared/components/Page/Page";
import {QuizNightRouter} from "./pages/quizNight/QuizNightRouter";
import {Card, Navbar} from 'react-bootstrap';
import {useHttpErrorHandler} from "./effects/useHttpErrorHandler";

function App() {
    useHttpErrorHandler();
    const title = useSelector(state => state.shared.title);
    const quizProgress = useSelector(state => state.shared.quizProgress);
    return (
        <Page quizNight={quizProgress}
              title={title}
              cardProvider={Card}
              navbarProvider={Navbar}>
            <Router basename="/master">
                <Switch>
                    <Route exact path={RouterUrls.HOME}>
                        <Home/>
                    </Route>
                    <Route path={RouterUrls.QUIZ_PIN}>
                        <QuizNightRouter/>
                    </Route>
                </Switch>
            </Router>
        </Page>
    );
}

export default App;
