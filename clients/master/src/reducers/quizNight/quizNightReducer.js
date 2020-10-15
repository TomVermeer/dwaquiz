import {createReducer} from 'shared/reducers/createReducer';
import { Actions } from '../../actions';
import * as WsEvents from "websocket-events";

const initialState = {
    approvedTeams: [],
    teamApplications: []
};

export const quizNightReducer = createReducer((state = initialState, action) => {
    switch(action.type) {
        case Actions.ON_OPEN_QUIZ_NIGHT:
            state.quizPin = action.payload;
            break;
        case WsEvents.ON_TEAM_APPLY:
            state.teamApplications.push(action.payload);
            break;
        default: return state;
    }
    return state;
});