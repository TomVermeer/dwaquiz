import React from "react";
import { Col, Navbar } from "react-bootstrap";
import { GameProgress } from 'shared/components/GameProgress';

import "./roundHeader.scss"

const RoundHeader = (props) => {

    const progress = {
        roundNumber: 4,
        questionNumber: 12
    }


    return (
        <Navbar bg="primary" variant="dark">
            <Col>
            </Col>
            <Col>
            <h1>{props.title}</h1>
            </Col>
            <Col>
            <GameProgress quizPin={124124} progress={progress}/>
            </Col>
        </Navbar>
    )
}
export default RoundHeader