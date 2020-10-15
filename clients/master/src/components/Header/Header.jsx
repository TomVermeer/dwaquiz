import React from 'react';
import {useSelector} from "react-redux";
import {MasterTitle} from "./MasterTitle";
import './header.scss';
import {QuizProgress} from "./QuizProgress/QuizProgress";

export const Header = (props) => {
    const quizProgress = useSelector(state => {
        return {
            quizPin: state.quizNight.quizPin,
            roundNumber: 1, // TODO
            questionNumber: 2 // TODO
        }
    });

    return (
        <div className="header">
            {/*<div className="split">*/}
            <div className="padding"></div>
                <MasterTitle className="title"/>
                <QuizProgress
                    roundNumber={quizProgress.roundNumber}
                    questionNumber={quizProgress.questionNumber}
                    quizPin={quizProgress.quizPin}/>
            {/*</div>*/}
        </div>
    );
};