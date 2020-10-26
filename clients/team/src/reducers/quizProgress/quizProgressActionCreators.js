import {Actions} from '../../actions';
import {isErrorResponse, post} from "shared/fetchHelpers";
import {Pages} from "../../pages/pages";

const onTeamApply = (teamName, quizPin) => {
    return {
        type: Actions.ON_TEAM_APPLY,
        payload: {teamName, quizPin}
    }
};

export const applyTeam = (teamName, quizPin, history) => dispatch => {
    post(`quiz-nights/${quizPin}/team-applications`, {teamName})
        .then((response) => {
            if (isErrorResponse(response)) {
                // TODO: handle errors
            } else {
                dispatch(onTeamApply(teamName, quizPin));
                history.push(Pages(quizPin, teamName).WAIT_FOR_APPROVAL);
            }
        });
};