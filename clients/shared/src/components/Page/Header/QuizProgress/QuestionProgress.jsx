import React from 'react';
import {NUMBER_OF_QUESTIONS_IN_ROUND} from "../../../../constants";

export const QuestionProgress = (props) => {
    if(props.questionNumber == null) {
        return null;
    }
    return (
        <>Vraag {props.questionNumber}/{NUMBER_OF_QUESTIONS_IN_ROUND}</>
    );
};