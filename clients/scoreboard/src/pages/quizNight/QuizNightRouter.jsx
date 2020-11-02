import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {useFromUrl} from "../../effects/useFromUrl";
import {setQuizPin} from "shared/reducers/sharedActionCreators";
import {RouterUrls} from "../routerUrls";
import {QuizNightEndPage, WaitingRoomPage} from "../index";
import {RoundRouter} from "./round/RoundRouter";
import {useWebsocket} from "../../effects/useWebsocket";

export const QuizNightRouter = (props) => {
    const quizPin = Number(useFromUrl('quizPin', setQuizPin));
    useWebsocket(quizPin);
    return (
        <Switch>
            <Route exact path={RouterUrls.WAITING_ROOM} component={WaitingRoomPage}/>
            <Route exact path={RouterUrls.NIGHT_END} component={QuizNightEndPage} />
            <Route path={RouterUrls.ROUND_NUMBER}>
              <RoundRouter/>
            </Route>
        </Switch>
    );
};