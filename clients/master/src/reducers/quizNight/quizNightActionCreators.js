import { getWebsocket } from "shared/websocket";
import {postAndParse, isErrorResponse, post} from "shared/fetchHelpers";
import {SharedActions} from "shared/actions";
import {Actions} from "../../actions";

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
            console.log('receive response: ', response);
            if(isErrorResponse(response)) {
                // TODO
                return;
            }
            dispatch(onApproveTeam(teamName));
        });
};