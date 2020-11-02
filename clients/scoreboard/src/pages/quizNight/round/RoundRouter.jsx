import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RouterUrls} from "../../routerUrls";
import {RoundEndPage} from "../../index";
import {QuestionNumberRouter} from "./questionNumber/QuestionNumberRouter";
import {useFromUrl} from "../../../effects/useFromUrl";
import {setRoundNumber} from "shared/reducers/sharedActionCreators";

export const RoundRouter = (props) => {
    useFromUrl('roundNumber', setRoundNumber);

    return (
        <Switch>
            <Route exact path={RouterUrls.ROUND_END} component={RoundEndPage}/>
            <Route path={RouterUrls.QUESTION_NUMBER}>
                <QuestionNumberRouter/>
            </Route>
        </Switch>
    );
};