import React from 'react';
import './quiz-progress.scss';
import {QuestionProgress} from "./QuestionProgress";
import {Card} from "react-bootstrap";

export const QuizProgress = (props) => {
    return (
        <Card className="progress">
            <Card.Body>
                <Card.Title>
                    {props.quizPin}
                </Card.Title>
                <Card.Text>
                    <p>Quizronde {props.roundNumber}</p>
                    <QuestionProgress questionNumber={props.questionNumber}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};