import {getAndParse, isErrorResponse, post} from "shared/fetchHelpers";
import {Actions} from "../actions";
import {Pages} from "../pages/routerUrls";

const receiveQuestions = questions => {
    return {type: Actions.ON_QUESTIONS_RECEIVED, payload: questions};
};

export const fetchSuggestedQuestions = (quizPin, roundNumber, offset, limit) => dispatch => {
    getAndParse(`quiz-nights/${quizPin}/rounds/${roundNumber}/suggested-questions?offset=${offset}&limit=${limit}`)
        .then(questions => {
            dispatch(receiveQuestions(questions))
        });
};

export const askQuestion = (quizPin, roundNumber, questionId, history) => dispatch => {
    post(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings`, {questionId})
        .then(response => {
            if(isErrorResponse(response)) {
                // TODO
            } else {
                history.push(Pages(quizPin, roundNumber, questionId).GRADE);
            }
        });
};