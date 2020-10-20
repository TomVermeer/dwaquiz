import {getWebsocket} from "shared/websocket";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";

const buildHandlers = (quizPin) =>
    new WebsocketHandlersBuilder()
        .build();

export const startWebsocket = (quizPin) => getWebsocket(buildHandlers(quizPin));