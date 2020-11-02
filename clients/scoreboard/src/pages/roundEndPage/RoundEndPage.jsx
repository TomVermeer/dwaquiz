import React from "react";
import { RoundHeader, Footer } from "../../components";
import { FinalScores } from "shared/components/FinalScores/FinalScores";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'


const RoundEndpage = (props) => {

  return (
    <>
      <RoundHeader title="Tussenstand"></RoundHeader>
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
