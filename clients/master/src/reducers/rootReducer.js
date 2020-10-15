import { combineReducers } from "redux";
import {quizNightReducer} from "./quizNight/quizNightReducer";
import {sharedReducer} from "shared/reducers/sharedReducer";

export const rootReducer = combineReducers({
    quizNight: quizNightReducer,
    shared: sharedReducer
});