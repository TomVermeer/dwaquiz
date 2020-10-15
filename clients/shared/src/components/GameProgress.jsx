import React from "react";

import { Container, Row } from "react-bootstrap";

export const GameProgress = (props) => (
  <div className="infoWrapper">
    <div className="infoRow"><p>{props.quizPin}</p></div>
    <div className="infoRow"><p>{`Quizronde: ${props.progress.roundNumber}`}</p></div>
    <div className="infoRow"><p>{`vraag ${props.progress.questionNumber}/12`}</p></div>
  </div>
//   <Container>
//     <Row>{props.quizPin}</Row>
//     <Row>{`Quizronde: ${props.progress.roundNumber}`}</Row>
//     <Row>{`vraag ${props.progress.questionNumber}/12`}</Row>
//   </Container>
);

// export const GameProgress = (props) => (
//     <h1>test</h1>
// )
