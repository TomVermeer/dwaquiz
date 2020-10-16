import { getWebsocket } from "shared/websocket";
import {postAndParse, isErrorResponse, post} from "shared/fetchHelpers";
import {SharedActions} from "shared/actions";
import {Actions} from "../../actions";
import {deleteReq} from "shared/fetchHelpers";

export const openQuizNight = () => (dispatch) => {
    postAndParse('quiz-nights')
        .then(json => {
            getWebsocket(); // Open websocket to listen to teams that apply
            dispatch(onOpenQuizNight(json));
        });
};

const onOpenQuizNight = (response) => {
    return { type: SharedActions.ON_OPEN_QUIZ_NIGHT, payload: response.quizPin }
};

const onApproveTeam = teamName => {
    return {type: Actions.ON_TEAM_APPROVE, payload: teamName};
};

export const approveTeam = (teamName, quizPin) => dispatch => {
    post(`quiz-nights/${quizPin}/teams`, {teamName})
        .then(response => {
            if(isErrorResponse(response)) {
                // TODO
                return;
            }
            dispatch(onApproveTeam(teamName));
        });
};

const onRejectTeam = teamName => {
    return {type: Actions.ON_TEAM_REJECTED, payload: teamName};
};

export const rejectTeam = (teamName, quizPin) => dispatch => {
    deleteReq(`quiz-nights/${quizPin}/team-applications/${teamName}`)
        .then(response => {
            if(isErrorResponse(response)) {
                // TODO
            } else {
                dispatch(onRejectTeam(teamName));
            }
        });
};