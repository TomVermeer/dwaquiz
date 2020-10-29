
import { getWebsocket } from "shared/websocket";
import { WebsocketHandlersBuilder } from "shared/WebsocketHandlersBuilder";
import { setParticipatingTeams, onReceiveAnswers } from "./reducers/mainActionCreators";
import { Pages } from "./pages/routerUrls";


import * as WsEvents from "websocket-events";
import * as Roles from "roles";


const buildHandlers = (quizPin, history, roundNumber, questionNumber) =>
  new WebsocketHandlersBuilder()
    .on(WsEvents.ON_TEAM_APPROVAL)
    .fetch(`quiz-nights/${quizPin}/teams`, setParticipatingTeams)
    .on(WsEvents.ON_QUESTION)
    .doAction((message) => {
      history.push(
        Pages(quizPin, message.roundNumber, message.questionNumber).QUESTION
      );
    })
    .on(WsEvents.ON_ANSWER)
    .fetch(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}/answers` , onReceiveAnswers)
    .on(WsEvents.ON_QUESTION_GRADED)
    .doAction((message) => {
      history.push(
        Pages(quizPin, message.roundNumber, message.questionNumber).SCORE
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

export const startWebsocket = (quizPin, history, roundNumber, questionNumber) =>
    getWebsocket(buildHandlers(quizPin, history, roundNumber, questionNumber), initializationMessage(Number(quizPin)));
