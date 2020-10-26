import React from "react";
import { useSelector } from "react-redux";

import { WaitingRoomHeader, TeamsDisplay, Footer } from "../../components";

const WaitingRoomHomepage = () => {

  const quizPin = useSelector(state => state.quizProgress.quizPin)
  const teams = useSelector(state => state.participatingTeams)


  return (
    <>
      <WaitingRoomHeader quizpin={quizPin} />
      <TeamsDisplay title="joined" teams={teams} type="display" />
      <Footer />
    </>
  );
};
export default WaitingRoomHomepage;
