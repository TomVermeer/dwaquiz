import React from 'react';
import './quiz-progress.scss';
import {QuestionProgress} from "./QuestionProgress";
import {Card} from "react-bootstrap";

export const QuizProgress = (props) => {
    return (
        <div className="progress">
            {(props.quizPin || props.roundNumber || props.questionNumber) && <Card>
                <Card.Body>
                    <Card.Title>
                        {props.quizPin}
                    </Card.Title>
                    <p>
                        Quizronde {props.roundNumber}</p>
                    <p>
                        <QuestionProgress questionNumber={props.questionNumber}/>
                    </p>
                </Card.Body>
            </Card>
            }
        </div>
    );
};