import { createReducer } from "shared/reducers/createReducer";
import { Actions } from "../../actions";

const initialState = {};
export const quizProgressReducer = createReducer((state = initialState, action) => {
    switch(action.type) {
        case Actions.ON_TEAM_APPLY:
            state.quizPin = action.quizPin;
            break;
        default: return state;
    }
    return state;
});