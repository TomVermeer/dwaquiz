import {Actions} from "../actions";
import {getAndParse, isErrorResponse, put} from "shared/fetchHelpers";

export const setTeamName = teamName => {
    return {type: Actions.SET_TEAM_NAME, payload: teamName};
};

const setQuestion = question => {
    return {type: Actions.SET_QUESTION, payload: question};
};

export const fetchQuestion = (quizPin, roundNumber, questionNumber, teamName) => dispatch => {
    getAndParse(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}/${teamName}`)
        .then(json => {
            dispatch(setQuestion(json.question));
        });
};

const onAnswerSubmitted = answer => {
    return {type: Actions.ON_ANSWER_SUBMIT, answer};
};

export const submitAnswer = (quizPin, roundNumber, questionNumber, teamName, answer) => dispatch => {
    put(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}/${teamName}`, {answer})
        .then(response => {
            if (isErrorResponse(response)) {
                // TODO
            } else {
                dispatch(onAnswerSubmitted());
            }
        });
};