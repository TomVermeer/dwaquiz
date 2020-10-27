import {SharedActions} from "shared/actions";
import {startWebsocket} from "../webSocketHandlers";

export const openQuizNight = (quizpin) => (dispatch) => {
    startWebsocket(quizpin); // TODO: refactor this to hooks with routers
};

export const setParticipatingTeams = (teamNames) => {
    return {
        type: SharedActions.ON_TEAM_APPROVAL, payload: teamNames
    };
};