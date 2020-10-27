import React from 'react';
import './answers.scss';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from 'react-redux';
import {closeQuestion} from "../../reducers/currentQuestion/currentQuestionActionCreators";

export const Answers = (props) => {

    const dispatch = useDispatch();
    const {quizPin, roundNumber, questionNumber} = useSelector(state => state.shared.quizProgress);
    const {isOpen} = useSelector(state => state.currentQuestion);
    const onCloseQuestion = () => {
        dispatch(closeQuestion(quizPin, roundNumber, questionNumber));
    };

    return (
        <Card>
            <Card.Header>Antwoorden</Card.Header>
            <Card.Body>

                <div className="align-right">
                    <Button variant="secondary" className="margin-right" onClick={onCloseQuestion} disabled={!isOpen}>Sluit vraag</Button>
                    <Button variant="primary">Volgende vraag</Button>
                </div>
            </Card.Body>
        </Card>
    );
};