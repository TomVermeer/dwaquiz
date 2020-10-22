import {createReducer} from 'shared/reducers/createReducer';
import {Actions} from "../../actions";

const initialState = {
    approvedTeams: [],
    teamApplications: []
};

function removeTeamApplication(state, action) {
    state.teamApplications = state.teamApplications.filter(x => x !== action.payload);
}

export const quizNightReducer = createReducer((state = initialState, action) => {
    switch(action.type) {
        case Actions.AFTER_TEAM_APPLY_FETCH:
            state.teamApplications = action.payload;
            break;
        case Actions.ON_TEAM_APPROVE:
            removeTeamApplication(state, action);
            state.approvedTeams.push(action.payload);
            break;
        case Actions.ON_TEAM_REJECTED:
            removeTeamApplication(state, action);
            break;
        default: return state;
    }
    return state;
});