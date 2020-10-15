import { Actions } from '../../actions';
import { Pages } from '../../pages';
import {post} from "shared/fetchHelpers";
import {isErrorResponse} from "shared/fetchHelpers";

const onTeamApply = (teamName, quizPin) => {
    return {
        type: Actions.ON_TEAM_APPLY,
        payload: { teamName, quizPin }
    }
};

export const applyTeam = (teamName, quizPin, history) => dispatch => {
    post(`quiz-nights/${quizPin}/team-applications`, {teamName})
        .then((response) => {
            if(isErrorResponse(response)) {
                // TODO: handle errors
            }
            dispatch(onTeamApply(teamName, quizPin));
            history.push(Pages.WAIT_FOR_APPROVAL);
        });
};