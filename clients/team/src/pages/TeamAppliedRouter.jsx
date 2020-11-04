import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {RouterUrls} from "./pages";
import {WaitForApproval} from "./waitForApproval/WaitForApproval";
import {WaitForQuestion} from "./waitForQuestion/WaitForQuestion";
import {useWebsocket} from "../effects/useWebsocket";
import {setQuizPin} from "shared/reducers/sharedActionCreators";
import {useFromUrl} from "../effects/useFromUrl";
import {setTeamName} from "../reducers/rootActionCreators";
import {NightEnd} from "./nightEnd/NightEnd";
import { QuestionRouter } from "./question/QuestionRouter"

export const TeamAppliedRouter = (props) => {


    const quizPin = useFromUrl('quizPin', setQuizPin);
    const teamName = useFromUrl('teamName', setTeamName);
    useWebsocket(quizPin, teamName);

    return (
      <Switch>
          <Route exact path={RouterUrls.WAIT_FOR_APPROVAL}>
              <WaitForApproval/>
          </Route>
          <Route exact path={RouterUrls.WAIT_FOR_QUESTION}>
              <WaitForQuestion/>
          </Route>
          <Route path={RouterUrls.NIGHT_END}>
              <NightEnd/>
          </Route>
          <Route path={RouterUrls.QUESTION}>
              <QuestionRouter/>
          </Route>
      </Switch>
    );
};