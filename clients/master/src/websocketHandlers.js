import {getWebsocket} from "shared/websocket";
import * as WsEvents from "websocket-events";
import {afterTeamApplyFetch} from "./reducers/quizNight/quizNightActionCreators";
import {WebsocketHandlersBuilder} from "../../shared/src/WebsocketHandlersBuilder";
import {WebsocketFetchHandler} from "../../shared/src/WebsocketHandler";

const handlers = (quizPin) => {
    return {
        [WsEvents.ON_TEAM_APPLY]: {
            path: `quiz-nights/${quizPin}/team-applications`,
            actionCreator: afterTeamApplyFetch,
            additionalAction: null
        },
    }
};

const buildHandlers = (quizPin) => {
    new WebsocketHandlersBuilder()
        .addHandler(new WebsocketFetchHandler(`quiz-nights/${quizPin}/team-applications`, afterTeamApplyFetch()))
};

export const startWebsocket = (quizPin) => getWebsocket(handlers(quizPin));