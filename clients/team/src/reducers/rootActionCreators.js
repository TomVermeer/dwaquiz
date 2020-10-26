import {Actions} from "../actions";

export const setTeamName = teamName => {
    return {type: Actions.SET_TEAM_NAME, payload: teamName};
};