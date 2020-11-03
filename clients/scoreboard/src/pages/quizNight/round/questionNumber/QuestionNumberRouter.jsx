import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RouterUrls} from "../../../routerUrls";
import {QuestionPage, ScorePage} from "../../../index";
import {useFromUrl} from "../../../../effects/useFromUrl";
import {setQuestionNumber} from "shared/reducers/sharedActionCreators";
import {useWebsocket} from "../../../../effects/useWebsocket";
import {useSelector} from 'react-redux';

export const QuestionNumberRouter = (props) => {
    const {quizPin, roundNumber} = useSelector(state => state.shared.quizProgress);
    const questionNumber = Number(useFromUrl('questionNumber', setQuestionNumber));
    useWebsocket(quizPin, roundNumber, questionNumber);
    return (
        <Switch>
            <Route exact path={RouterUrls.SCORE} component={ScorePage}/>
            <Route exact path={RouterUrls.QUESTION} component={QuestionPage} />
        </Switch>
    );
};