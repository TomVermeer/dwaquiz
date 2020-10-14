import React from "react";
import { Card, Container, Table } from "react-bootstrap";

import "../TeamsDisplay/teamDisplay.scss";

const TeamsDisplay = (props) => {
  const decideClassName = (el) => {
    console.log(el.isCorrect);
    if (el.isCorrect) {
      return "Correct";
    } else {
      return "False";
    }
  };

  const renderDisplayTeams = () => {
    return (
      <Container style={{ marginTop: "40px" }}>
        <h1>{props.title}</h1>
        {props.teams.map((el) => {
          return (
            <Card style={{ margin: "10px" }}>
              <Card.Body>{el.name}</Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  };

  const renderScoreTeams = () => {
    return (
      <Container>
        <Table className="TeamTable" >
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

  const renderCorrectType = () => {
    if (props.type === "score") {
      return renderScoreTeams();
    } else if (props.type == undefined || props.type === "display") {
      return renderDisplayTeams();
    }
  };

  return renderCorrectType();
};
export default TeamsDisplay;
