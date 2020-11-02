import React, {useEffect} from "react";
import {Footer, RoundHeader} from "../../../components/index";
import {FinalScores} from "shared/components/FinalScores/FinalScores";
import {Button, Card, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {Pages} from "../../routerUrls";
import {resetState} from "shared/reducers/sharedActionCreators";
import {closeWebsocket} from "shared/websocket";

const QuizNightEndPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const goHome = () => {
    dispatch(resetState());
    closeWebsocket();
    history.push(Pages().HOME)
  };

  const quizPin = useSelector(state => state.shared.quizProgress.quizPin);

  return (
    <>
      <RoundHeader title="Eindstand" quizPin={quizPin} />
      <FinalScores
        cardProvider={Card}
        cardHeaderProvider={Card.Header}
        listGroupProvider={ListGroup}
        listGroupItemProvider={ListGroup.Item}
        useEffect={useEffect}
        useSelector={useSelector}
        useDispatch={useDispatch}
      >
         <Button onClick={goHome}>Home</Button>
        </FinalScores>
      <Footer />
    </>
  );
};
export default QuizNightEndPage;
