import { API_BASE_URL } from "shared/constants"
import { Actions } from "../../actions";

export const openQuizNight = () => (dispatch) => {
    fetch(API_BASE_URL + 'quiz-nights',
        {
            method: 'POST'
        })
        .then(data => data.json())
        .then(json => dispatch(onOpenQuizNight(json)));
}

const onOpenQuizNight = (response) => {
    return { type: Actions.ON_OPEN_QUIZ_NIGHT, payload: response.quizPin }
};