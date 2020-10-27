import {getAndParse, postAndParse} from "shared/fetchHelpers";
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
    postAndParse(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings`, {questionId})
        .then(json => {
                history.push(Pages(json.quizPin, json.roundNumber, json.questionNumber, questionId).GRADE);
        });
};