import React from "react";
import { RoundHeader, Footer } from "../../components";
import { FinalScores } from "shared/components/FinalScores/FinalScores";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { useFromUrl } from "../../effects/useFromUrl";
import { setQuizPin } from "shared/reducers/sharedActionCreators";


const RoundEndpage = (props) => {

  const quizPin = useFromUrl('quizPin', setQuizPin);


  return (
    <>
      <RoundHeader title="Tussenstand" quizPin={quizPin}/>
      <FinalScores
        cardProvider={Card}
        cardHeaderProvider={Card.Header}
        listGroupProvider={ListGroup}
        listGroupItemProvider={ListGroup.Item}
        useEffect={useEffect}
        useSelector={useSelector}
        useDispatch={useDispatch}
      />
      <Footer />
    </>
  );
};
export default RoundEndpage;
