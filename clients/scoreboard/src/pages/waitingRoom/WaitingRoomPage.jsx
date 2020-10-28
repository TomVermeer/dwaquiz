import React from "react";
import { useSelector } from "react-redux";


import { WaitingRoomHeader, TeamsDisplay, Footer } from "../../components";

const WaitingRoomHomepage = () => {
  const quizPin = useSelector(state => state.shared.quizProgress.quizPin);
  const teams = useSelector(state => state.root.participatingTeams);
  console.log(teams, "teams in waitingroom")
  return (
    <>
      <WaitingRoomHeader quizpin={quizPin} />
      <TeamsDisplay title="joined" teams={teams} type="display" />
      <Footer />
    </>
  );
};
export default WaitingRoomHomepage;
