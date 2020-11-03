import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchParticipatingTeams} from '../../../reducers/mainActionCreators';
import {Footer, WaitingRoomHeader} from "../../../components/index";
import {ApprovedTeams} from "../../../components/TeamsDisplay/ApprovedTeams/ApprovedTeams";

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
        <ApprovedTeams title="Deelnemers" teams={teams}/>
      <Footer />
    </>
  );
};
export default WaitingRoomHomepage;
