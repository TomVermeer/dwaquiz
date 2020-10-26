import { createReducer } from "shared/reducers/createReducer";
import { SharedActions } from "shared/actions";

const initialState = {
    currentQuestion: "",
    participatingTeams: [],
    answeredTeams: [],
    teamAnswers: [],
    scorePerTeam: []
};

export const mainReducer = createReducer(
  (state = initialState, action) => {
    switch (action.type) {
      case SharedActions.ON_TEAM_APPROVAL :
        //console.log("hey reducer triggered")
        initialState.participatingTeams.push(action.payload)
      break;
    }
    return state;
  }
);
