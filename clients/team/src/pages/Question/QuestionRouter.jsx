import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Question} from "./Question";
import {RouterUrls} from "../pages";
import {useFromUrl} from "../../effects/useFromUrl";
import {setQuestionNumber, setRoundNumber} from "shared/reducers/sharedActionCreators";
import {useWebsocket} from "../../effects/useWebsocket";
import {useSelector} from 'react-redux';

export const QuestionRouter = (props) => {
    const {quizPin, teamName} = useSelector(state => state.shared.quizProgress);

    const roundNumber = useFromUrl('roundNumber', setRoundNumber);
    const questionNumber = useFromUrl('questionNumber', setQuestionNumber);

    useWebsocket(quizPin, teamName, roundNumber, questionNumber);

    return (
      <Switch>
          <Route exact path={RouterUrls.QUESTION}>
              <Question/>
          </Route>
      </Switch>
    );
};