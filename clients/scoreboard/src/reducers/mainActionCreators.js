import { getAndParse, postAndParse } from "shared/fetchHelpers";
import { SharedActions } from "shared/actions";
import { startWebsocket } from "../webSocketHandlers";
import { Actions } from "../actions"

export const openQuizNight = (quizpin) => (dispatch) => {
  postAndParse(`scoreboards/${quizpin}`)
    .then((json) =>{
        dispatch(onOpenQuizNight(json))
        startWebsocket(quizpin)
    } 
  );
};

const onOpenQuizNight = (response) => {
  return { type: SharedActions.SET_QUIZ_PIN, payload: response.quizPin };
};

export const setParticipatingTeams = (teamNames) => {
  return {
    type: SharedActions.ON_TEAM_APPROVAL, payload: teamNames
  };
}

const setQuestion = question => {
  return {type: Actions.SET_QUESTION, payload: question}
}

//fetch current question
export const fetchQuestion = (quizPin, roundNumber, questionNumber) => dispatch => {
  getAndParse(`quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}`)
  .then(json => {
    dispatch(setQuestion(json.question))
  })
}

