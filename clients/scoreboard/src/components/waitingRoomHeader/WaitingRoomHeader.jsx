import React from "react";
import { Container, Navbar, Spinner, Col } from "react-bootstrap";

const WaitingRoomHeader = (props) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Col>
          <h1>Wachten tot de ronde begint.</h1>
        </Col>
        <Col>
          <Spinner animation="border" role="status">
            <span className="sr-only">Laden...</span>
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
