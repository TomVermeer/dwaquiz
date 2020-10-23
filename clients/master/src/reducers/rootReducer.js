import {combineReducers} from "redux";
import {quizNightReducer} from "./quizNight/quizNightReducer";
import {sharedReducer} from "shared/reducers/sharedReducer";
import {categoryReducer} from "./category/categoryReducer";
import {createReducer} from "shared/reducers/createReducer";
import {Actions} from "../actions";

const initialState = {
    suggestedQuestions: []
};

const mainReducer = createReducer((state = initialState, action) => {
    switch (action.type) {
        case Actions.ON_QUESTIONS_RECEIVED:
            state.suggestedQuestions = action.payload;
            break;
        default:
            return state;
    }
    return state;
});

export const rootReducer = combineReducers({
    quizNight: quizNightReducer,
    category: categoryReducer,
    shared: sharedReducer,
    root: mainReducer
});