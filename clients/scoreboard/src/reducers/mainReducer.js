import { createReducer } from "shared/reducers/createReducer";

const initialState = {
    currentQuestion: "",
    answeredTeams: [],
    teamAnswers: [],
    scorePerTeam: []
};

export const mainReducer = createReducer(
  (state = initialState, action) => {
    return state;
  }
);
