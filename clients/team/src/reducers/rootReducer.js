import { combineReducers } from "redux";
import { createReducer } from "shared/reducers/createReducer";
import { quizProgressReducer } from "./quizProgress/quizProgressReducer";

const initialState = {};
const mainReducer = createReducer((state = initialState, action) => {
    return state;
});

export const rootReducer = combineReducers({
    quizProgress: quizProgressReducer,
    root: mainReducer
});