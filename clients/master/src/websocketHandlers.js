import {getWebsocket} from "shared/websocket";
import * as WsEvents from "websocket-events";
import {afterTeamApplyFetch} from "./reducers/quizNight/quizNightActionCreators";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";
import {onReceiveAnswers} from "./reducers/currentQuestion/currentQuestionActionCreators";

const buildHandlers = (quizPin, roundNumber, questionNumber) =>
    new WebsocketHandlersBuilder()
        .on(WsEvents.ON_TEAM_APPLY)
            .fetch(`quiz-nights/${quizPin}/team-applications`, afterTeamApplyFetch)
        .on(WsEvents.ON_ANSWER)
            .fetch(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}/answers`, onReceiveAnswers)
        .build();

export const startWebsocket = (quizPin, roundNumber, questionNumber) => getWebsocket(buildHandlers(quizPin, roundNumber, questionNumber));