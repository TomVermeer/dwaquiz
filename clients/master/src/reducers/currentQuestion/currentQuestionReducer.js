import {createReducer} from "shared/reducers/createReducer";
import {Actions} from "../../actions";

const initialState = {};
export const currentQuestionReducer = createReducer((state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_QUESTION_ID:
            state.questionId = action.payload;
            break;
        case Actions.ON_QUESTION_RECEIVED:
            state.answer = action.payload.answer;
            state.question = action.payload.question;
            state.category = action.payload.category;
            break;
        default:
            return state;
    }
    return state;
});