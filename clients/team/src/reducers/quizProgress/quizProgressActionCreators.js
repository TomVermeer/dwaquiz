import { API_BASE_URL } from 'shared/constants';
import { Actions } from '../../actions';
import { Pages } from '../../pages';

const onTeamApply = (teamName, quizPin) => {
    return {
        type: Actions.ON_TEAM_APPLY,
        payload: { teamName, quizPin }
    }
};

export const applyTeam = (teamName, quizPin, history) => dispatch => {
    fetch(API_BASE_URL + 'quiz-nights/' + quizPin + '/team-applications',
        {
            method: 'POST',
            body: JSON.stringify({ teamName }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            // TODO check against 404 quiznight not found
            dispatch(onTeamApply(teamName, quizPin));
            history.push(Pages.WAIT_FOR_APPROVAL);
        });
};