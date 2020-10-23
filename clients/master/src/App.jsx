import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss';
import {Home} from './pages/home/Home';
import {Teams} from './pages/teams/Teams';
import {Questions} from './pages/questions/Questions';
import {PAGES} from './pages/pages';
import {useSelector} from "react-redux";
import {Categories} from "./pages/categories/Categories";
import { Page } from "shared/components/Page/Page";

function App() {
    const title = useSelector(state => state.shared.title);
    const quizProgress = useSelector(state => state.shared.quizProgress);
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
                    <Route exact path={PAGES.CATEGORIES}>
                        <Categories/>
                    </Route>
                    <Route exact path={PAGES.QUESTIONS}>
                        <Questions/>
                    </Route>
                </Switch>
            </Router>
        </Page>
    );
}

export default App;
