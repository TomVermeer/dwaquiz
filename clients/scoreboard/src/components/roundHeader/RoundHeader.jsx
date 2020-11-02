import React from "react";
import { Col, Navbar } from "react-bootstrap";

import "./roundHeader.scss"

const RoundHeader = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Col>
            </Col>
            <Col>
            <h1>{props.title}</h1>
            </Col>
            <Col>
            <h1>{props.quizPin}</h1>
            </Col>
        </Navbar>
    )
};
export default RoundHeader;
