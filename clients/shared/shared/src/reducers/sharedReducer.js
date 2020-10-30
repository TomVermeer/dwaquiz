import {createReducer} from "./createReducer";
import {SharedActions} from "../actions";

const initialState = {
    title: 'Quizzer',
    quizProgress: {},
    teamScores: []
};

export const sharedReducer = createReducer((state = initialState, action) => {
    switch (action.type) {
        case SharedActions.CHANGE_TITLE:
            state.title = action.payload;
            break;
        case SharedActions.SET_QUIZ_PIN:
            
            state.quizProgress.quizPin = action.payload;
            break;
        case SharedActions.NEXT_ROUND:
            state.quizProgress.roundNumber = action.payload;
            break;
        case SharedActions.SET_ROUND_NUMBER:
            state.quizProgress.roundNumber = action.payload;
            break;
        case SharedActions.SET_QUESTION_NUMBER:
            state.quizProgress.questionNumber = action.payload;
            break;
        case SharedActions.ON_TEAM_SCORES_RECEIVED:
            state.teamScores = action.payload;
            break;
        default:
            return state;
    }
    return state;
});