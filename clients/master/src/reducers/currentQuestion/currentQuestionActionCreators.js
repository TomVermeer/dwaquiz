import {Actions} from "../../actions";
import {getAndParse, patch, isErrorResponse} from "shared/fetchHelpers";

const onCurrentQuestionReceived = (category, question, answer) => {
    return {type: Actions.ON_QUESTION_RECEIVED, payload: {category, question, answer}};
};

export const fetchCurrentQuestion = (questionId) => dispatch => {
    getAndParse(`questions/${questionId}`)
        .then(json => {
           dispatch(onCurrentQuestionReceived(json.category, json.question, json.answer));
        });
};

export const setQuestionId = (questionId) => {
    return {type: Actions.SET_QUESTION_ID, payload: questionId};
};

const onCloseQuestionSuccess = (isOpen) => {
  return {type: Actions.ON_CLOSE_QUESTION, payload: isOpen};
};

export const closeQuestion = (quizPin, roundNumber, questionNumber) => dispatch => {
    patch(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}`, {isOpen: false})
        .then(response => {
            if(isErrorResponse(response)) {
                // TODO
            } else {
                dispatch(onCloseQuestionSuccess(false));
            }
        });
};

export const fetchAnswers = (quizPin, roundNumber, questionNumber) => dispatch => {
    getAndParse(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}/answers`)
        .then(json => dispatch(onReceiveAnswers(json)));
};

export const onReceiveAnswers = (teamAnswers) => {
    return {type: Actions.ON_ANSWERS_RECEIVED, payload: teamAnswers};
};

export const setIsCorrect = (isCorrect, teamName) => {
    return {type: Actions.ON_ANSWER_GRADE, payload: {isCorrect, teamName}};
};