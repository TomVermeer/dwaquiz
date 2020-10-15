import { getWebsocket } from "shared/websocket";
import {postAndParse} from "shared/fetchHelpers";
import {SharedActions} from "shared/actions";

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