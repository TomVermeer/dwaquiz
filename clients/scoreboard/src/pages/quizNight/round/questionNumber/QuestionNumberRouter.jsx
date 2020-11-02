import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RouterUrls} from "../../../routerUrls";
import {QuestionPage, ScorePage} from "../../../index";
import {useFromUrl} from "../../../../effects/useFromUrl";
import {setQuestionNumber} from "shared/reducers/sharedActionCreators";

export const QuestionNumberRouter = (props) => {
    useFromUrl('questionNumber', setQuestionNumber);

    return (
        <Switch>
            <Route exact path={RouterUrls.SCORE} component={ScorePage}/>
            <Route exact path={RouterUrls.QUESTION} component={QuestionPage} />
        </Switch>
    );
};