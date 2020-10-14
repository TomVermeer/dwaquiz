import { combineReducers } from "redux";
import { quizNightReducer } from "./quizNight/quizNightReducer";

export const rootReducer = combineReducers({
    quizNight: quizNightReducer
});