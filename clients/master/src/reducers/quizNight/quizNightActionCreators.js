import {postAndParse, isErrorResponse, post, deleteReq, patch} from "shared/fetchHelpers";
import {SharedActions} from "shared/actions";
import {Actions} from "../../actions";
import {startWebsocket} from "../../websocketHandlers";
import {PAGES} from "../../pages/pages";

export const openQuizNight = () => (dispatch) => {
    postAndParse('quiz-nights')
        .then(json => {
            const quizPin = json.quizPin;
            startWebsocket(quizPin); // Open websocket to listen to teams that apply
            dispatch(onOpenQuizNight(quizPin));
        });
};

const onOpenQuizNight = (quizPin) => {
    return { type: SharedActions.ON_OPEN_QUIZ_NIGHT, payload: quizPin }
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

export const closeApplicationPeriod = (quizPin, history) => () => {
    patch(`quiz-nights/${quizPin}`, {isOpenForApplication: false})
        .then((response) => {
            if(isErrorResponse(response)) {
                // TODO
            } else {
                history.push(PAGES.CATEGORIES);
            }
        })
};