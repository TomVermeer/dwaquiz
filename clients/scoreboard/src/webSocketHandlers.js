import {getWebsocket} from "shared/websocket";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";
import { setParticipatingTeams} from './reducers/mainActionCreators';
import * as WsEvents from "websocket-events";


const buildHandlers = (quizPin) =>
    new WebsocketHandlersBuilder()
    .on(WsEvents.ON_TEAM_APPROVAL)
    .fetch(`quiz-nights/${quizPin}/teams`, setParticipatingTeams)
    .build();
        

export const startWebsocket = (quizPin) => getWebsocket(buildHandlers(quizPin));