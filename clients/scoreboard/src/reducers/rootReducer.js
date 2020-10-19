import { combineReducers } from "redux";
import {quizProgressReducer } from "./quizProgressReducer";
import {mainReducer} from "./mainReducer"
import {sharedReducer} from "shared/reducers/sharedReducer";

export const rootReducer = combineReducers({
    quizProgress: quizProgressReducer,
    main: mainReducer,
    shared: sharedReducer
});