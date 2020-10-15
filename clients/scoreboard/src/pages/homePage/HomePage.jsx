import React from "react";
import { useState } from "react";
import { Button, Container, Form, Navbar, Col } from "react-bootstrap";
import {Footer} from "../../components"

import "../homePage/homepage.scss";

const HomePage = () => {
  const [quizPin, setQuizPin] = useState();

  const handleQuizPinChange = (val) => {
    setQuizPin(val);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Col>
          <h1>Quizzer</h1>
        </Col>
      </Navbar>
      <Container className="home-container">
        <Form>
          <Form.Group controlId="1" className="home">
            <Form.Label>
              <h3>Quiz Pin</h3>
            </Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter your quizpin number"
              value={quizPin}
              onChange={handleQuizPinChange}
            />
          </Form.Group>
          <Button variant="primary" type="submmit">
            submit quizpin
          </Button>
        </Form>
      </Container>
      <Footer/>
    </>
  );
};
export default HomePage;
