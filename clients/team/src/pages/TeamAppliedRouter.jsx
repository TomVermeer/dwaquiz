import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {RouterUrls} from "./pages";
import {WaitForApproval} from "./waitForApproval/WaitForApproval";
import {WaitForQuestion} from "./waitForQuestion/WaitForQuestion";
import {useWebsocket} from "../effects/useWebsocket";
import {useQuizPinFromUrl} from "../effects/useQuizPinFromUrl";
import {useTeamNameFromUrl} from "../effects/useTeamNameFromUrl";

export const TeamAppliedRouter = (props) => {

    const quizPin = useQuizPinFromUrl();
    const teamName = useTeamNameFromUrl();
    useWebsocket(quizPin, teamName);

    return (
      <Switch>
          <Route exact path={RouterUrls.WAIT_FOR_APPROVAL}>
              <WaitForApproval/>
          </Route>
          <Route exact path={RouterUrls.WAIT_FOR_QUESTION}>
              <WaitForQuestion/>
          </Route>
      </Switch>
    );
};