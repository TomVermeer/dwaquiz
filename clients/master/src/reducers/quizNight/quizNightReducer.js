import {createReducer} from 'shared/reducers/createReducer';
import * as WsEvents from "websocket-events";
import {SharedActions} from "shared/actions";
import {Actions} from "../../actions";

const initialState = {
    approvedTeams: [],
    teamApplications: []
};

export const quizNightReducer = createReducer((state = initialState, action) => {
    switch(action.type) {
        case SharedActions.ON_OPEN_QUIZ_NIGHT:
            state.quizPin = action.payload;
            break;
        case WsEvents.ON_TEAM_APPLY:
            state.teamApplications.push(action.payload);
            break;
        case Actions.ON_TEAM_APPROVE:
            state.teamApplications = state.teamApplications.filter(x => x !== action.payload);
            state.approvedTeams.push(action.payload);
            break;
        default: return state;
    }
    return state;
});