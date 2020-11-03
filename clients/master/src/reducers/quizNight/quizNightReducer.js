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
        case Actions.ON_APPROVED_TEAMS_RECEIVED:
            state.approvedTeams = action.payload;
            state.teamApplications = state.teamApplications.filter(x => state.approvedTeams.find(y => y === x) == null);
            break;
        case Actions.ON_TEAM_APPLICATIONS_RECEIVED:
            state.teamApplications = action.payload.filter(x => state.approvedTeams.find(y => y === x) == null);
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