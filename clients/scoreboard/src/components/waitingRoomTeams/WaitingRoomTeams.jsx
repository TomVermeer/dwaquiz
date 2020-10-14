import React from "react";
import { Card, Container } from "react-bootstrap";

const WaitingRoomTeams = (props) => {
  return (
    <Container>
        <h1>Teams</h1>
      {props.teams.map((el) => {
        return (
          <Card style={{margin: '10px'}}>
            <Card.Body>{el.name}</Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};
export default WaitingRoomTeams;
