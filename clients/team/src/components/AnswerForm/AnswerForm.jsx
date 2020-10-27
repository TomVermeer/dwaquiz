import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {submitAnswer} from "../../reducers/rootActionCreators";
import {useQuestionProgress} from "../../effects/useQuestionProgress";

export const AnswerForm = (props) => {
    const dispatch = useDispatch();
    const [answer, setAnswer] = useState('');
    const hasSubmittedAnswer = useSelector(state => state.root.hasSubmittedAnswer);
    const {quizPin, roundNumber, questionNumber, teamName} = useQuestionProgress();

    const onSendAnswer = (e) => {
        e.preventDefault();
        dispatch(submitAnswer(quizPin, roundNumber, questionNumber, teamName, answer));
    };

    const buttonText = hasSubmittedAnswer === true ? 'Versturen' : 'Herzien';

    return (
        <Form onSubmit={onSendAnswer}>
            <Form.Group controlId="answer">
                <Form.Label>Antwoord</Form.Label>
                <Form.Control type="text" placeholder="Antwoord" value={answer}
                              onChange={(e) => setAnswer(e.target.value)}/>
            </Form.Group>
            <Button type="submit" variant="primary" disabled={answer.trim() === ''}>{buttonText}</Button>
        </Form>
    );
};