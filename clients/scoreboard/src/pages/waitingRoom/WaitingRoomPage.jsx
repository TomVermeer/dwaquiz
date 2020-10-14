import React from "react";

import WaitingRoomHeader from "../../components/waitingRoomHeader/WaitingRoomHeader";
import TeamsDisplay from "../../components/TeamsDisplay/TeamsDisplay"

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
      <TeamsDisplay title="joined" teams={teams} />
    </>
  );
};
export default WaitingRoomHomepage;
