import * as WsEvents from "websocket-events";
import {getWebsocket} from "shared/websocket";
import {Pages} from "./pages";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";

const buildHandlers = (history) =>
    new WebsocketHandlersBuilder()
        .on(WsEvents.ON_TEAM_APPROVAL)
            .doAction(() => history.push(Pages.WAIT_FOR_QUESTION))
        .on(WsEvents.ON_TEAM_REJECTED)
            .doAction(() => history.push(Pages.HOME))
        .build();

export const startWebsocket = (history) => getWebsocket(buildHandlers(history));