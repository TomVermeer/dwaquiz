import {getWebsocket} from "shared/websocket";
import * as WsEvents from "websocket-events";
import {afterTeamApplyFetch} from "./reducers/quizNight/quizNightActionCreators";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";

const buildHandlers = (quizPin) =>
    new WebsocketHandlersBuilder()
        .on(WsEvents.ON_TEAM_APPLY)
            .fetch(`quiz-nights/${quizPin}/team-applications`, afterTeamApplyFetch)
        .build();

export const startWebsocket = (quizPin) => getWebsocket(buildHandlers(quizPin));