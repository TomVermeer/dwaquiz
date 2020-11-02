import React from "react";
import { RoundHeader, Footer } from "../../components";
import { FinalScores } from "shared/components/FinalScores/FinalScores";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { useHistory } from "react-router";
import { Pages } from "../routerUrls";
import {resetState, setQuizPin} from "shared/reducers/sharedActionCreators";
import { closeWebsocket } from "shared/websocket";
import { useFromUrl } from "../../effects/useFromUrl";

const QuizNightEndPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const goHome = () => {
    dispatch(resetState())
    closeWebsocket();
    history.push(Pages().HOME)
  }

  const quizPin = useFromUrl('quizPin', setQuizPin)

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
