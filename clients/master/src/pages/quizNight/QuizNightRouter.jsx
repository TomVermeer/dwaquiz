import React from 'react';
import {RouterUrls} from "../routerUrls";
import {Teams} from "./teams/Teams";
import {Categories} from "./categories/Categories";
import {Questions} from "./questions/Questions";
import {Route, Switch} from "react-router-dom";
import {useQuizPinFromUrl} from "../../effects/useQuizPinFromUrl";
import {useWebsocket} from "../../effects/useWebsocket";


export const QuizNightRouter = (props) => {
    useQuizPinFromUrl();
    useWebsocket();

    return (
        <Switch>
            <Route path={RouterUrls.TEAMS}>
                <Teams/>
            </Route>
            <Route path={RouterUrls.CATEGORIES}>
                <Categories/>
            </Route>
            <Route path={RouterUrls.QUESTIONS}>
                <Questions/>
            </Route>
        </Switch>
    );
};