import {postAndParse, isErrorResponse, post, deleteReq, patch} from "shared/fetchHelpers";
import {Actions} from "../../actions";
import {Pages} from "../../pages/routerUrls";
import {setQuizPin} from "shared/reducers/sharedActionCreators";

export const openQuizNight = (history) => (dispatch) => {
    postAndParse('quiz-nights')
        .then(json => {
            const quizPin = json.quizPin;
            history.push(Pages(quizPin).TEAMS);
            dispatch(setQuizPin(quizPin));
        });
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

export const afterTeamApplyFetch = teamNames => {
    return {type: Actions.AFTER_TEAM_APPLY_FETCH, payload: teamNames};
};

export const closeApplicationPeriod = (quizPin, history) => dispatch => {
    patch(`quiz-nights/${quizPin}`, {isOpenForApplication: false})
        .then((response) => {
            if(isErrorResponse(response)) {
                // TODO
            } else {
                history.push(Pages(quizPin, 1).CATEGORIES);
            }
        })
};