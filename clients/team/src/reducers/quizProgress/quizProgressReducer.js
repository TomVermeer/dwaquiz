import { createReducer } from "shared/reducers/createReducer";
import { Actions } from "../../actions";
import * as WsEvents from "websocket-events";

const initialState = {};
export const quizProgressReducer = createReducer((state = initialState, action) => {
    switch(action.type) {
        case Actions.ON_TEAM_APPLY:
            state.quizPin = action.quizPin;
            break;
        case WsEvents.ON_TEAM_REJECTED:
            state = initialState;
            break;
        default: return state;
    }
    return state;
});