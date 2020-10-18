import {getWebsocket} from "shared/websocket";
import * as WsEvents from "websocket-events";
import {afterTeamApplyFetch} from "./reducers/quizNight/quizNightActionCreators";

const handlers = (quizPin) => {
    return {
        [WsEvents.ON_TEAM_APPLY]: {
            path: `quiz-nights/${quizPin}/team-applications`,
            actionCreator: afterTeamApplyFetch,
            additionalAction: null
        },
    }
};

export const startWebsocket = (quizPin) => getWebsocket(handlers(quizPin));