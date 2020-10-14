import React from "react";

import WaitingRoomHeader from "../../components/waitingRoomHeader/WaitingRoomHeader";
import WaitingRoomTeams from "../../components/waitingRoomTeams/WaitingRoomTeams"

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
      <WaitingRoomTeams teams={teams} />
    </>
  );
};
export default WaitingRoomHomepage;
