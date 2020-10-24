import React from 'react';
import {RouterUrls} from "../routerUrls";
import {Teams} from "./teams/Teams";
import {Route, Switch} from "react-router-dom";
import {useQuizPinFromUrl} from "../../effects/useQuizPinFromUrl";
import {useWebsocket} from "../../effects/useWebsocket";
import {RoundRouter} from "./round/RoundRouter";


export const QuizNightRouter = (props) => {
    const quizPin = useQuizPinFromUrl();
    useWebsocket(quizPin);

    return (
        <Switch>
            <Route path={RouterUrls.TEAMS}>
                <Teams/>
            </Route>
            <Route path={RouterUrls.ROUND_NUMBER}>
                <RoundRouter/>
            </Route>
        </Switch>
    );
};