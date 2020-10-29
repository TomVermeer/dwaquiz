import {getAndParse} from "shared/fetchHelpers";
import {SharedActions} from "shared/actions";
import {startWebsocket} from "../webSocketHandlers";
import {Actions} from "../actions"
import {setRoundNumber, setQuestionNumber} from "shared/reducers/sharedActionCreators";
import {setQuizPin} from "shared/reducers/sharedActionCreators"

export const openQuizNight = (quizpin, history) => (dispatch) => {
        dispatch(setQuizPin(quizpin));
        startWebsocket(quizpin, history);
};

export const setParticipatingTeams = (teamNames) => {
    return {
        type: SharedActions.ON_TEAM_APPROVAL, payload: teamNames
    };
};

const setQuestion = question => {
    return {type: Actions.SET_QUESTION, payload: question}
};

export const fetchQuestion = (quizPin, history, roundNumber, questionNumber) => dispatch => {
  getAndParse(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}`)
  .then(json => {
    dispatch(setQuestion(json))
    startWebsocket(quizPin, history, roundNumber, questionNumber);
  })
}

export const onReceiveAnswers = (teamAnswers) => dispatch => {
  dispatch({type: Actions.ON_TEAM_ANSWER , payload: teamAnswers})
}
