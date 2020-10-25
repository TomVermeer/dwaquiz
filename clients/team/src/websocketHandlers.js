import * as WsEvents from "websocket-events";
import {getWebsocket} from "shared/websocket";
import {Pages} from "./pages/pages";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";

const buildHandlers = (history, quizPin, teamName) =>
    new WebsocketHandlersBuilder()
        .on(WsEvents.ON_TEAM_APPROVAL)
            .doAction(() => history.push(Pages(quizPin, teamName).WAIT_FOR_QUESTION))
        .on(WsEvents.ON_TEAM_REJECTED)
            .doAction(() => history.push(Pages().HOME))
        .build();

export const startWebsocket = (history, quizPin, teamName) =>
    getWebsocket(buildHandlers(history, quizPin, teamName));