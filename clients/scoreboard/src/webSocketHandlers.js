
import { getWebsocket } from "shared/websocket";
import { WebsocketHandlersBuilder } from "shared/WebsocketHandlersBuilder";
import { setParticipatingTeams } from "./reducers/mainActionCreators";
import { Pages } from "./pages/routerUrls";

import * as WsEvents from "websocket-events";
import * as Roles from "roles";


const buildHandlers = (quizPin, history) =>
  new WebsocketHandlersBuilder()
    .on(WsEvents.ON_TEAM_APPROVAL)
    .fetch(`quiz-nights/${quizPin}/teams`, setParticipatingTeams)
    .on(WsEvents.ON_QUESTION)
    .doAction((message) => {
      history.push(
        Pages(quizPin, message.roundNumber, message.questionNumber).QUESTION
      );
    })
    .build();

const initializationMessage = (quizPin) => {
    return {
        type: WsEvents.INITIALIZE,
        payload: {
            role: Roles.SCOREBOARD,
            quizPin
        }
    };
};

export const startWebsocket = (quizPin) =>
    getWebsocket(buildHandlers(quizPin), initializationMessage(Number(quizPin)));
