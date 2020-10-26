import { combineReducers } from "redux";
import { createReducer } from "shared/reducers/createReducer";
import { quizProgressReducer } from "./quizProgress/quizProgressReducer";
import {Actions} from '../actions';
import {sharedReducer} from "shared/reducers/sharedReducer";

const initialState = {};
const mainReducer = createReducer((state = initialState, action) => {
    switch(action.type) {
        case Actions.SET_TEAM_NAME:
            state.teamName = action.payload;
            break;
        case Actions.ON_TEAM_APPLY:
            state.teamName = action.teamName;
            break;
        case Actions.SET_QUESTION:
            state.currentQuestion = action.payload;
            break;
        default:
            return state;
    }
    return state;
});

export const rootReducer = combineReducers({
    quizProgress: quizProgressReducer,
    root: mainReducer,
    shared: sharedReducer
});