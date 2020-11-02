import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParticipatingTeams } from '../../reducers/mainActionCreators';
import { useFromUrl } from '../../effects/useFromUrl';
import { setQuizPin } from "shared/reducers/sharedActionCreators";
import { WaitingRoomHeader, TeamsDisplay, Footer } from "../../components";

const WaitingRoomHomepage = () => {

  const urlQuizPin = useFromUrl('quizPin', setQuizPin)
  const dispatch = useDispatch();
  const teams = useSelector(state => state.root.participatingTeams);
 
  useEffect(() => {
    dispatch(fetchParticipatingTeams(urlQuizPin));
  },[urlQuizPin, dispatch])

  return (
    <>
      <WaitingRoomHeader quizpin={urlQuizPin} />
      <TeamsDisplay title="joined" teams={teams} type="display" />
      <Footer />
    </>
  );
};
export default WaitingRoomHomepage;
