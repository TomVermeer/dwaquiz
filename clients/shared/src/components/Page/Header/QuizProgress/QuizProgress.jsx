import React from 'react';
import './quiz-progress.scss';
import {QuestionProgress} from "./QuestionProgress";

export const QuizProgress = (props) => {
    return (
        <div className="progress">
            <div>
                <div>
                    {props.quizPin &&
                        <h2>
                            {props.quizPin}
                        </h2>
                    }
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
                </div>
            </div>
        </div>
    );
};