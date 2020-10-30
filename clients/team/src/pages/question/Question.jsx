import React, {useEffect} from 'react';
import {fetchQuestion} from "../../reducers/rootActionCreators";
import {useDispatch, useSelector} from 'react-redux';
import {Card} from 'react-bootstrap';
import './question.scss';
import {AnswerForm} from "../../components/AnswerForm/AnswerForm";

export const Question = (props) => {

    const {quizPin, roundNumber, questionNumber} = useSelector(state => state.shared.quizProgress);
    const teamName = useSelector(state => state.root.teamName);
    const question = useSelector(state => state.root.currentQuestion);
    const dispatch = useDispatch();

    useEffect(() => {
        if(quizPin && roundNumber && questionNumber && teamName) {
            dispatch(fetchQuestion(quizPin, roundNumber, questionNumber, teamName));
        }
    }, [quizPin, roundNumber, questionNumber, teamName, dispatch]);

    return (
        <div className="question-page">
            <Card>
                <Card.Header>
                    <h2>{question}</h2>
                </Card.Header>
                <Card.Body>
                    <AnswerForm/>
                </Card.Body>
            </Card>
        </div>
    );
};