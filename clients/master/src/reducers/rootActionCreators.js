import {getAndParse} from "shared/fetchHelpers";
import {Actions} from "../actions";

const receiveQuestions = questions => {
    return {type: Actions.ON_QUESTIONS_RECEIVED, payload: questions};
};

export const fetchSuggestedQuestions = (quizPin, roundNumber, offset, limit) => dispatch => {
    getAndParse(`quiz-nights/${quizPin}/rounds/${roundNumber}/suggested-questions?offset=${offset}&limit=${limit}`)
        .then(questions => {
            dispatch(receiveQuestions(questions))
        });
};