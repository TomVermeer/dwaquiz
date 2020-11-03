import {deleteAndParse, getAndParse, patchAndParse, postAndParse} from "shared/fetchHelpers";
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
    postAndParse(`quiz-nights/${quizPin}/teams`, {teamName})
        .then(json => {
            dispatch(onApproveTeam(teamName))
        });
};


const onRejectTeam = teamName => {
    return {type: Actions.ON_TEAM_REJECTED, payload: teamName};
};

export const rejectTeam = (teamName, quizPin) => dispatch => {
    deleteAndParse(`quiz-nights/${quizPin}/team-applications/${teamName}`)
        .then(json => {
            dispatch(onRejectTeam(teamName));
        });
};

export const closeApplicationPeriod = (quizPin, history) => dispatch => {
    patchAndParse(`quiz-nights/${quizPin}`, {isOpenForApplication: false})
        .then(json => history.push(Pages(quizPin, 1).CHOOSE_CATEGORIES));
};

export const endNight = (quizPin, history) => dispatch => {
    patchAndParse(`quiz-nights/${quizPin}`, {isActive: false})
        .then(json => history.push(Pages(quizPin).NIGHT_END))
};

export const onTeamApplicationsReceived = teamNames => {
    return {type: Actions.ON_TEAM_APPLICATIONS_RECEIVED, payload: teamNames};
};

export const fetchTeamApplications = quizPin => dispatch => {
    getAndParse(`quiz-nights/${quizPin}/team-applications`)
        .then(json => dispatch(onTeamApplicationsReceived(json)));
};

const onApprovedTeamsReceived = teamNames => {
    return {type: Actions.ON_APPROVED_TEAMS_RECEIVED, payload: teamNames};
};

export const fetchApprovedTeams = quizPin => dispatch => {
    getAndParse(`quiz-nights/${quizPin}/teams`)
        .then((json) => dispatch(onApprovedTeamsReceived(json)));
};