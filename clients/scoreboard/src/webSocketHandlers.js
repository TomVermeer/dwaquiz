import {getWebsocket} from "shared/websocket";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";
import { setParticipatingTeams} from './reducers/mainActionCreators';
import * as WsEvents from "websocket-events";


const buildHandlers = (quizPin, round) =>
    new WebsocketHandlersBuilder()
    .on(WsEvents.ON_TEAM_APPROVAL)
        .fetch(`quiz-nights/${quizPin}/teams`, setParticipatingTeams)
    // .on(WsEvents.ON_QUESTION)
    //     .fetch(`quiz-nights/${quizPin}/rounds/${round}/questionings`)    
    .build();
        

export const startWebsocket = (quizPin, round) => getWebsocket(buildHandlers(quizPin, round));