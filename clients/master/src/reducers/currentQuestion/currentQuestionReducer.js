import {createReducer} from "shared/reducers/createReducer";
import {Actions} from "../../actions";


const initialState = {
    teamAnswers: []
};
export const currentQuestionReducer = createReducer((state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_QUESTION_ID:
            state.questionId = action.payload;
            break;
        case Actions.ON_QUESTION_RECEIVED:
            state.isOpen = true;
            state.answer = action.payload.answer;
            state.question = action.payload.question;
            state.category = action.payload.category;
            break;
        case Actions.ON_CLOSE_QUESTION:
            state.isOpen = false;
            break;
        case Actions.ON_ANSWERS_RECEIVED:
            state.teamAnswers = action.payload;
            break;
        case Actions.ON_ANSWER_GRADE:
            state.teamAnswers.find(x => x.teamName === action.payload.teamName).isCorrect = action.payload.isCorrect;
            break;
        default:
            return state;
    }
    return state;
});