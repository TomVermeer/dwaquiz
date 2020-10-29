import { createReducer } from "shared/reducers/createReducer";
import { SharedActions } from "shared/actions";
import { Actions } from "../actions";

const initialState = {
    currentQuestion: {},
    participatingTeams: [],
    answeredTeams: [],
    teamAnswers: [],
    scorePerTeam: []
};

export const mainReducer = createReducer(
  (state = initialState, action) => {
    switch (action.type) {
      case SharedActions.ON_TEAM_APPROVAL :
        state.participatingTeams = action.payload;
      break;
      case Actions.SET_QUESTION :
        state.currentQuestion = action.payload;
        break;
      case Actions.ON_TEAM_ANSWER :
        state.answeredTeams = action.payload;
        break;
      case Actions.ON_SCORE :
        console.log(action.payload, ": arrived in reducer")
        state.teamAnswers = action.payload; 
        break;
      default: return state;
    }
    return state;
  }
);
