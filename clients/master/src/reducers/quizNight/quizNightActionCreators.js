import { API_BASE_URL } from "shared/constants"
import { getWebsocket } from "shared/websocket";
import { Actions } from "../../actions";

export const openQuizNight = () => (dispatch) => {
    fetch(API_BASE_URL + 'quiz-nights',
        {
            method: 'POST',
            credentials: 'include'
        })
        .then(data => data.json())
        .then(json => {
            getWebsocket(); // Open websocket to listen to teams that apply
            dispatch(onOpenQuizNight(json));
        });
}

const onOpenQuizNight = (response) => {
    return { type: Actions.ON_OPEN_QUIZ_NIGHT, payload: response.quizPin }
};