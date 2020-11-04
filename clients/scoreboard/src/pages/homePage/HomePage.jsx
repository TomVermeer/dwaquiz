import React from "react";
import {useDispatch} from "react-redux";
import {useState} from 'react'
import {Button, Container, Form, Navbar, Col} from "react-bootstrap";
import {Footer} from "../../components"
import {openQuizNight} from "../../reducers/mainActionCreators"

import "../homePage/homepage.scss";
import {useHistory} from "react-router";
import {MINIMUM_NUMBER_OF_DIGITS_IN_QUIZ_PIN} from "shared/constants";
import {Pages} from "../routerUrls";

const HomePage = () => {
    const [validated, setValidated] = useState(false);
    const history = useHistory();
    const [quizPin, setQuizPin] = useState("");

    const dispatch = useDispatch();

    const onChange = (e) => {
        setQuizPin(e.target.value.trim())
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.currentTarget.checkValidity() === false) {
            setValidated(true);
        } else {
         dispatch(openQuizNight(quizPin, history));
         history.push(Pages(quizPin).WAITINGROOM);
        }
    };

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Col>
                    <h1>Quizzer</h1>
                </Col>
            </Navbar>
            <Container className="home-container">
                <Form onSubmit={handleSubmit} noValidate validated={validated}>
                    <Form.Group controlId="1" className="home">
                        <Form.Label>
                            <h3>Quiz Pin</h3>
                        </Form.Label>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Quiz pin"
                            onChange={onChange}
                            required
                            pattern={`[0-9]{${MINIMUM_NUMBER_OF_DIGITS_IN_QUIZ_PIN},}`}
                        />
                        <Form.Control.Feedback type="invalid">Vul een quizpin in ({MINIMUM_NUMBER_OF_DIGITS_IN_QUIZ_PIN} of meer cijfers)</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submmit">
                        Versturen
                    </Button>
                </Form>
            </Container>
            <Footer/>
        </>
    );
};
export default HomePage;
