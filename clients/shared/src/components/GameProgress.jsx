import React from "react";

export const GameProgress = (props) => (
  <div className="infoWrapper">
    <div className="infoRow"><p>{props.quizPin}</p></div>
    <div className="infoRow"><p>{`Quizronde: ${props.progress.roundNumber}`}</p></div>
    <div className="infoRow"><p>{`vraag ${props.progress.questionNumber}/12`}</p></div>
  </div>
);
