import {getWebsocket} from "shared/websocket";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";
import {setParticipatingTeams} from './reducers/mainActionCreators';
import * as WsEvents from "websocket-events";
import * as Roles from "roles";


const buildHandlers = (quizPin) =>
    new WebsocketHandlersBuilder()
        .on(WsEvents.ON_TEAM_APPROVAL)
        .fetch(`quiz-nights/${quizPin}/teams`, setParticipatingTeams)
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

export const startWebsocket = (quizPin) =>
    getWebsocket(buildHandlers(quizPin), initializationMessage(Number(quizPin)));
