import React from "react";
import { useSelector } from "react-redux";
import { setQuizPin } from "shared/reducers/sharedActionCreators";
import { useFromUrl } from "../../effects/useFromUrl"

import { WaitingRoomHeader, TeamsDisplay, Footer } from "../../components";

const WaitingRoomHomepage = () => {

  const quizPin = useFromUrl('quizPin', setQuizPin)
  const teams = useSelector(state => state.root.participatingTeams)


  return (
    <>
      <WaitingRoomHeader quizpin={quizPin} />
      <TeamsDisplay title="joined" teams={teams} type="display" />
      <Footer />
    </>
  );
};
export default WaitingRoomHomepage;
