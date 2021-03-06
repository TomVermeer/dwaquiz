import {SharedActions} from "../actions";
import {getAndParse} from "../fetchHelpers";

export const changeTitle = newTitle => {
    return {type: SharedActions.CHANGE_TITLE, payload: newTitle};
};

export const changeRoundNumber = roundNumber => {
    return {type: SharedActions.NEXT_ROUND, payload: roundNumber};
};

export const setQuizPin = quizPin => {
    return { type: SharedActions.SET_QUIZ_PIN, payload: Number(quizPin) }
};

export const setRoundNumber = roundNumber => {
    return { type: SharedActions.SET_ROUND_NUMBER, payload: Number(roundNumber) }
};

export const setQuestionNumber = questionNumber => {
  return {type: SharedActions.SET_QUESTION_NUMBER, payload: Number(questionNumber)}
};

const onTeamScoresReceived = (teamScores) => {
    return {type: SharedActions.ON_TEAM_SCORES_RECEIVED, payload: teamScores};
};

export const fetchTeamScores = quizPin => dispatch => {
  getAndParse(`quiz-nights/${quizPin}/scores`)
      .then(json => dispatch(onTeamScoresReceived(json)));
};

export const resetState = () => {
    return {type: SharedActions.ON_RESET};
};