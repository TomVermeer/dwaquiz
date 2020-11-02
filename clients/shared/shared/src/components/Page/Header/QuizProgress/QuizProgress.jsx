import React from 'react';
import './quiz-progress.scss';
import {QuestionProgress} from "./QuestionProgress";

export const QuizProgress = (props) => {
    return (
        <div className="progress">
            {props.quizPin &&
            <props.cardProvider>
                <props.cardProvider.Header>
                    <h3>{props.quizPin}</h3>
                </props.cardProvider.Header>
                <props.cardProvider.Body>
                    {props.roundNumber &&
                    <p>
                        Quizronde {props.roundNumber}
                    </p>
                    }
                    {props.questionNumber &&
                    <p>
                        <QuestionProgress questionNumber={props.questionNumber}/>
                    </p>
                    }
                </props.cardProvider.Body>
            </props.cardProvider>
            }
        </div>
    );
};