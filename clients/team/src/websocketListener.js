import * as WsEvents from "websocket-events";
import {Pages} from "./pages";

export const routeOnTeamApproval = history => message => {
    if(message.type === WsEvents.ON_TEAM_APPROVAL) {
        history.push(Pages.WAIT_FOR_QUESTION);
    }
    return false;
};

export const routeOnTeamRejection = history => message => {
    if(message.type === WsEvents.ON_TEAM_REJECTED) {
        history.push(Pages.HOME);
    }
    return false;
};

export const additionalListeners = (history) => [routeOnTeamApproval(history), routeOnTeamRejection(history)];