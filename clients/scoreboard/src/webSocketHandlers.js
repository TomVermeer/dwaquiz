import {getWebsocket} from "shared/websocket";
import * as WsEvents from "websocket-events";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";

const buildHandlers = (quizPin) =>
    new WebsocketHandlersBuilder()
        //.on(WsEvents.ON_TEAM_APPLY)
        .build();

export const startWebsocket = (quizPin) => getWebsocket(buildHandlers(quizPin));