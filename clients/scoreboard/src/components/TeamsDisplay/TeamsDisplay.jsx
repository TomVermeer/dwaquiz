import React from "react";
import { Card, Container, Table } from "react-bootstrap";

import "../TeamsDisplay/teamDisplay.scss";

const TeamsDisplay = (props) => {
  const decideClassName = (el) => {
    if (el.isCorrect) {
      return "Correct";
    } else {
      return "False";
    }
  };

  const renderDisplayTeams = () => {
    return (
      <Container className="TeamContainer">
        <h1>{props.title}</h1>
        {
        props.teams.map((el) => {
          return (
            <Card key={el} className="TeamCard">
              <Card.Body>{el}</Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  };

  const renderAnswerTeams = () => {
    return (
      <Container className="TeamContainer">
        <h1>{props.title}</h1>
        {
        props.teams.map((el) => {
          if(el.answer) {
          return (
            <Card key={el.teamName} className="TeamCard">
              <Card.Body>{el.teamName}</Card.Body>
            </Card>
          );
          } else {
            return null
          }
        })}
      </Container>
    );
  };

  const renderQuestionScoreTeams = () => {
    return (
      <Container>
        <Table className="TeamTable">
          <tr>
            <th>Team:</th>
            <th>Answer:</th>
          </tr>
          {props.teams.map((el) => {
            return (
              <tr className={decideClassName(el)}>
                <th>{el.name}</th>
                <th>{el.answer}</th>
              </tr>
            );
          })}
        </Table>
      </Container>
    );
  };

  const renderEndScoreTeams = () => {
    return (
      <Container>
        <h1>{props.title}</h1>
        <Table bordered className="TeamTable">
          <tr>
            <th>team</th>
            <th>Goede antwoorden</th>
            <th>Ronde punten</th>
          </tr>
          {sortTeams(props.teams)
            .map((el) => {
              return (
                <tr>
                  <th>{el.name}</th>
                  <th>{el.correctQuestions}</th>
                  <th>{el.roundPoints}</th>
                </tr>
              );
            })}
        </Table>
      </Container>
    );
  };

  const sortTeams = (teams) => {
    if(props.type === "roundScore") {
      return teams.sort((x, y) => (x.correctQuestions > y.correctQuestions ? -1 : 1))
    }else {
      return teams.sort((x, y) => (x.roundPoints > y.roundPoints ? -1 : 1))
    }

  }

  const renderCorrectType = () => {
    if(props.teams){
    if (props.type === "questionScore") {
      return renderQuestionScoreTeams();
    } else if (props.type === "roundScore" || props.type === "nightScore") {
      return renderEndScoreTeams();
    }else if(props.type ==="answer") {
      return renderAnswerTeams();
    } else if (props.type === undefined || props.type === "display") {
      return renderDisplayTeams();
    }
  } else {
    return <h1>no teams joined yet</h1>
  }
  };

  return renderCorrectType();
};
export default TeamsDisplay;
