import React from 'react';
import './header.scss';
import {QuizProgress} from "./QuizProgress/QuizProgress";
import {Title} from "./title/Title";

export const Header = (props) => {
    return (
        <div className="header">
            <div className="padding"></div>
            <Title className="title" text={props.title}/>
            <QuizProgress
                roundNumber={props.quizNight.roundNumber}
                questionNumber={props.quizNight.questionNumber}
                quizPin={props.quizNight.quizPin}/>
        </div>
    );
};