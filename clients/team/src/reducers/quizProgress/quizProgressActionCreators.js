import {Actions} from '../../actions';
import {postAndParse} from "shared/fetchHelpers";
import {Pages} from "../../pages/pages";

const onTeamApply = (teamName, quizPin) => {
    return {
        type: Actions.ON_TEAM_APPLY,
        payload: {teamName, quizPin}
    }
};

export const applyTeam = (teamName, quizPin, history) => dispatch => {
    postAndParse(`quiz-nights/${quizPin}/team-applications`, {teamName})
        .then((json) => {
            dispatch(onTeamApply(teamName, quizPin));
            history.push(Pages(quizPin, teamName).WAIT_FOR_APPROVAL);
        });
};