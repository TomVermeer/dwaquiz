import {Actions} from "../actions";
import {getAndParse} from "shared/fetchHelpers";

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