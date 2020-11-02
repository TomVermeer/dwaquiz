import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RouterUrls} from "../../routerUrls";
import {RoundEndPage} from "../../index";
import {QuestionNumberRouter} from "./questionNumber/QuestionNumberRouter";
import {useFromUrl} from "../../../effects/useFromUrl";
import {setRoundNumber} from "shared/reducers/sharedActionCreators";
import {useWebsocket} from "../../../effects/useWebsocket";
import {useSelector} from 'react-redux';

export const RoundRouter = (props) => {
    const quizPin = useSelector(state => state.shared.quizProgress.quizPin);
    const roundNumber = Number(useFromUrl('roundNumber', setRoundNumber));
    useWebsocket(quizPin, roundNumber);
    return (
        <Switch>
            <Route exact path={RouterUrls.ROUND_END} component={RoundEndPage}/>
            <Route path={RouterUrls.QUESTION_NUMBER}>
                <QuestionNumberRouter/>
            </Route>
        </Switch>
    );
};