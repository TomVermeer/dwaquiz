import { combineReducers } from "redux";
import {quizNightReducer} from "./quizNight/quizNightReducer";
import {sharedReducer} from "shared/reducers/sharedReducer";
import {categoryReducer} from "./category/categoryReducer";

export const rootReducer = combineReducers({
    quizNight: quizNightReducer,
    category: categoryReducer,
    shared: sharedReducer
});