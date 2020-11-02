import React from 'react';
import './header.scss';
import {QuizProgress} from "./QuizProgress/QuizProgress";
import {Title} from "./Title/Title";

export const Header = (props) => {
    return (
        <props.navbarProvider bg="primary" variant="dark">
            <div className="quizzer-header">
                <Title className="title" text={props.title}/>
                <QuizProgress
                    roundNumber={props.quizNight.roundNumber}
                    questionNumber={props.quizNight.questionNumber}
                    quizPin={props.quizNight.quizPin}
                    cardProvider={props.cardProvider}/>
            </div>
        </props.navbarProvider>
    );
};