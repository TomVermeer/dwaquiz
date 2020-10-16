import React from 'react';
import './quiz-progress.scss';
import {QuestionProgress} from "./QuestionProgress";

export const QuizProgress = (props) => {
    return (
        <div className="progress">
            {(props.quizPin || props.roundNumber || props.questionNumber) && <div>
                <div>
                    <h2>
                        {props.quizPin}
                    </h2>
                    <p>
                        Quizronde {props.roundNumber}</p>
                    <p>
                        <QuestionProgress questionNumber={props.questionNumber}/>
                    </p>
                </div>
            </div>
            }
        </div>
    );
};