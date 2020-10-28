import {getAndParse} from "shared/fetchHelpers";
import {SharedActions} from "shared/actions";
import {startWebsocket} from "../webSocketHandlers";
import {Actions} from "../actions"
import {setRoundNumber, setQuestionNumber} from "shared/reducers/sharedActionCreators";

export const openQuizNight = (quizpin, history) => (dispatch) => {
    startWebsocket(quizpin, history);
};

export const roundNumberSetter = (num) => (dispatch) => {
    dispatch(setRoundNumber(num))
};

export const questionNumberSetter = (num) => (dispatch) => {
    dispatch(setQuestionNumber(num));
};

export const setParticipatingTeams = (teamNames) => {
    return {
        type: SharedActions.ON_TEAM_APPROVAL, payload: teamNames
    };
};

const setQuestion = question => {
    return {type: Actions.SET_QUESTION, payload: question}
};

export const fetchQuestion = (quizPin, roundNumber, questionNumber) => dispatch => {
    getAndParse(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}`)
        .then(json => {
            dispatch(setQuestion(json))
        })
};
