import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react'
import { Button, Container, Form, Navbar, Col } from "react-bootstrap";
import {Footer} from "../../components"
import {openQuizNight} from "../../reducers/quizProgressActionCreators"

import "../homePage/homepage.scss";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory()
  const state = useSelector(state => state.quizProgress);
  const [quizPin, setQuizPin] = useState();

const dispatch = useDispatch();

const onChange = (e) => {
  setQuizPin(e.target.value.trim())
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("in submit", quizPin)
  history.push("/waitingRoom")
  dispatch(openQuizNight(quizPin))
  // post in action creater 

}

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
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submmit" onClick={handleSubmit}>
            submit quizpin
          </Button>
        </Form>
      </Container>
      <Footer/>
    </>
  );
};
export default HomePage;
