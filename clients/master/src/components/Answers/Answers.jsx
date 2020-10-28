import React, {useEffect} from 'react';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from 'react-redux';
import {closeQuestion, fetchAnswers, gradeQuestion} from "../../reducers/currentQuestion/currentQuestionActionCreators";
import {AnswerRow} from "./AnswerRow/AnswerRow";
import {ListGroup} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './answers.scss';

export const Answers = (props) => {

    const dispatch = useDispatch();
    const {quizPin, roundNumber, questionNumber} = useSelector(state => state.shared.quizProgress);
    const {isOpen, teamAnswers} = useSelector(state => state.currentQuestion);
    const history = useHistory();

    useEffect(() => {
        if (quizPin && roundNumber && questionNumber) {
            dispatch(fetchAnswers(quizPin, roundNumber, questionNumber));
        }
    }, [quizPin, roundNumber, questionNumber, dispatch]);

    const onCloseQuestion = () => {
        dispatch(closeQuestion(quizPin, roundNumber, questionNumber));
    };

    const onGradeQuestion = () => {
      dispatch(gradeQuestion(quizPin, roundNumber, questionNumber, teamAnswers, history));
    };

    const gradeQuestionButtonText = questionNumber === 12 ? 'Volgende ronde' : 'Volgende vraag';

    return (
        <div className="answers">
            <Card>
                <Card.Header>
                    <div className="list-row ">
                        <h5>Team</h5>
                        <h5>Antwoord</h5>
                        <h5>Beoordeling</h5>
                    </div>
                </Card.Header>
                <ListGroup variant="flush">
                    {teamAnswers.map(x =>
                        <ListGroup.Item key={x.teamName}>
                            <AnswerRow teamAnswer={x} isDisabled={isOpen}/>
                        </ListGroup.Item>)}
                </ListGroup>
                <Card.Body>
                    <div className="align-right">
                        <Button variant="secondary"
                                className="margin-right"
                                onClick={onCloseQuestion}
                                disabled={!isOpen}>
                            Sluit vraag
                        </Button>
                        <Button variant="primary"
                                disabled={isOpen}
                                onClick={onGradeQuestion}>{gradeQuestionButtonText}</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};