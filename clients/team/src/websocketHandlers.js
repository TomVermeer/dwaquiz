import {getWebsocket} from "shared/websocket";
import {Pages} from "./pages/pages";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";
import {Roles, WsEvents} from "shared/constants";

const buildHandlers = (history, quizPin, teamName, questionNumber, roundNumber) => {

    const navigateToWaitForQuestion = () =>
        history.push(pages.WAIT_FOR_QUESTION);

    const pages = Pages(quizPin, teamName, questionNumber, roundNumber);

    return new WebsocketHandlersBuilder()
        .on(WsEvents.ON_TEAM_APPROVAL)
            .doAction(navigateToWaitForQuestion)
        .on(WsEvents.ON_TEAM_REJECTED)
            .doAction(() => history.push(pages.HOME))
        .on(WsEvents.ON_QUESTION)
            .doAction((message) => history.push(Pages(quizPin, teamName, message.roundNumber, message.questionNumber).QUESTION))
        .on(WsEvents.ON_QUESTION_CLOSE)
            .doAction(navigateToWaitForQuestion)
        .build();
};

const initializationMessage = (quizPin, teamName) => {
    return {
        type: WsEvents.INITIALIZE,
        payload: {
            role: Roles.TEAM,
            quizPin,
            teamName
        }
    };
};


export const startWebsocket = (history, quizPin, teamName, questionNumber, roundNumber) =>
    getWebsocket(buildHandlers(history, quizPin, teamName, questionNumber, roundNumber), initializationMessage(Number(quizPin), teamName));