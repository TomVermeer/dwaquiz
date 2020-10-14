import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./question.scss"

const Question = (props) => {
  return (
    <Container fluid className="contain">
      <Col>
        <Row>{props.question.category}</Row>
        <Row style={{justifyContent: "center", marginTop: "40px"}}>
          <h1>{props.question.question}</h1>
        </Row>
      </Col>
    </Container>
  );
};
export default Question;
