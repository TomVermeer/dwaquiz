import {getWebsocket} from "shared/websocket";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";
import * as WsEvents from "websocket-events";

const buildHandlers = (quizPin) =>
    new WebsocketHandlersBuilder()
    //.on(WsEvents.ON_TEAM_APPROVAL)
        .build();

export const startWebsocket = (quizPin) => getWebsocket(buildHandlers(quizPin));