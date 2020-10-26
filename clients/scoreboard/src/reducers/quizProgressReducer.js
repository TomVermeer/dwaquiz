import { createReducer } from "shared/reducers/createReducer";
import { SharedActions } from "shared/actions";


const initialState = {
  quizPin: 0,
  roundNumber: 0,
  questionNumber: 0,
};

export const quizProgressReducer = createReducer(
  (state = initialState, action) => {
    switch (action.type) {
      case SharedActions.SET_QUIZ_PIN:
        state.quizPin = action.payload;
        break;
        default: return state;
    }

    return state;
  }
);
