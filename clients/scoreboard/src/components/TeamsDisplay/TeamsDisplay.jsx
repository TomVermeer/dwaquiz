import React from "react";
import { Card, Container } from "react-bootstrap";

const TeamsDisplay = (props) => {
  return (
    <Container style={{marginTop: "40px"}}>
        <h1>{props.title}</h1>
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
export default TeamsDisplay;
