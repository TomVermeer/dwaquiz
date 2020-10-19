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
      case SharedActions.ON_OPEN_QUIZ_NIGHT:
        console.log("in reducer!", action.payload)
        state.quizPin = action.payload;
        break;
        default: return state;
    }

    return state;
  }
);
