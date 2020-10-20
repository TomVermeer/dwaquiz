import React from "react";
import { Container, Navbar, Spinner, Col } from "react-bootstrap";

const WaitingRoomHeader = (props) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Col>
          <h1>Waiting for round to start.</h1>
        </Col>
        <Col>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
        <Col>
          <div className="mr-auto">
            <h3>quizpin: {props.quizpin}</h3>
          </div>
        </Col>
      </Container>
    </Navbar>
  );
};
export default WaitingRoomHeader;
