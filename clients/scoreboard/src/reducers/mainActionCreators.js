import {postAndParse} from "shared/fetchHelpers";
import {SharedActions} from "shared/actions";
import {startWebsocket} from "../webSocketHandlers";

export const openQuizNight = (quizpin) => (dispatch) => {
    startWebsocket(quizpin); // TODO: refactor this to hooks with routers
};

const onOpenQuizNight = (response) => {
    return {type: SharedActions.SET_QUIZ_PIN, payload: response.quizPin};
};

export const setParticipatingTeams = (teamNames) => {
    return {
        type: SharedActions.ON_TEAM_APPROVAL, payload: teamNames
    };
};