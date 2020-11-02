import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchParticipatingTeams} from '../../../reducers/mainActionCreators';
import {Footer, TeamsDisplay, WaitingRoomHeader} from "../../../components/index";

const WaitingRoomHomepage = () => {

  const urlQuizPin = useSelector(state => state.shared.quizProgress.quizPin);
  const dispatch = useDispatch();
  const teams = useSelector(state => state.root.participatingTeams);
 
  useEffect(() => {
    dispatch(fetchParticipatingTeams(urlQuizPin));
  },[urlQuizPin, dispatch]);

  return (
    <>
      <WaitingRoomHeader quizpin={urlQuizPin} />
      <TeamsDisplay title="joined" teams={teams} type="display" />
      <Footer />
    </>
  );
};
export default WaitingRoomHomepage;
