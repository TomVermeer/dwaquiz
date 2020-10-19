import { createReducer } from "shared/reducers/createReducer";

const initialState = {
    currentQuestion: "",
    answeredTeams: [],
    teamAnswers: [{teamName: "", asnwer: ""}],
    scorePerTeam: [{teamIndex: 0, score: {roundPoints: 0, correctQuestions: 0}}]
};

export const mainReducer = createReducer(
  (state = initialState, action) => {
    return state;
  }
);
