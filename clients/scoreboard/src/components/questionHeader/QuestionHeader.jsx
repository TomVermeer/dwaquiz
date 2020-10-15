import React from "react";
import { Container, Navbar, Col, Row, ProgressBar } from "react-bootstrap";

const QuestionHeader = (props) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container style={{margin: "0px"}}>
          <Col lg={11}>
            <Row>
              <Col ml="auto">
                <Row>
                  <h1>{`Vraag ${props.questionNumber}/12`}</h1>
                </Row>
                <Row>
                  <h2>{`Quizronde ${props.roundNumber}`}</h2>
                </Row>
              </Col>
            </Row>
            <Row>
            
            </Row>
          </Col>
         <Col mr="auto">{props.quizPin}</Col>
        </Container>
      </Navbar>
      <ProgressBar 
              striped
              animated
              variant="success" 
              now={Math.round(props.questionNumber / 12 * 100)}
              label={`${props.questionNumber}/12`}
              max={100} 
              min={1} />
    </>
  );
};
export default QuestionHeader;
