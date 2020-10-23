import {createReducer} from "./createReducer";
import {SharedActions} from "../actions";

const initialState = {
    title: 'Quizzer',
    quizProgress: {}
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
        default:
            return state;
    }
    return state;
});