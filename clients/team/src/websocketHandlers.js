import * as WsEvents from "websocket-events";
import {getWebsocket} from "shared/websocket";
import {Pages} from "./pages";

const handlers = (history) => {
    return {
        [WsEvents.ON_TEAM_REJECTED]: {
            path: null,
            actionCreator: null,
            additionalAction: () => {
                history.push(Pages.HOME);
                return true;
            }
        },
        [WsEvents.ON_TEAM_APPROVAL]: {
            path: null,
            actionCreator: null,
            additionalAction: () => {
                history.push(Pages.WAIT_FOR_QUESTION);
                return true;
            }
        },
    }
};

export const startWebsocket = (history) => getWebsocket(handlers(history));