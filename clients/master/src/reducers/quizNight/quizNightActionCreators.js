import { getWebsocket } from "shared/websocket";
import { Actions } from "../../actions";
import {postAndParse} from "shared/fetchHelpers";

export const openQuizNight = () => (dispatch) => {
    postAndParse('quiz-nights')
        .then(json => {
            getWebsocket(); // Open websocket to listen to teams that apply
            dispatch(onOpenQuizNight(json));
        });
};

const onOpenQuizNight = (response) => {
    return { type: Actions.ON_OPEN_QUIZ_NIGHT, payload: response.quizPin }
};