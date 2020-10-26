import { combineReducers } from "redux";
import {mainReducer} from "./mainReducer"
import {sharedReducer} from "shared/reducers/sharedReducer";

export const rootReducer = combineReducers({
    root: mainReducer,
    shared: sharedReducer
});