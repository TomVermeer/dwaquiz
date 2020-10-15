import React from "react";

import { WaitingRoomHeader, TeamsDisplay, Footer } from '../../components'

const WaitingRoomHomepage = () => {
  const teams = [
    {
      name: "de billy butchers",
    },
    {
      name: "super cool team",
    },
    {
      name: "bitch mctits",
    },
  ];

  return (
    <>
      <WaitingRoomHeader quizpin={12314} />
      <TeamsDisplay title="joined" teams={teams} type="display" />
      <Footer/>
    </>
  );
};
export default WaitingRoomHomepage;
