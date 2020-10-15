import React from 'react';

export const QuestionProgress = (props) => {
    if(props.questionNumber == null) {
        return null;
    }
    return (
        <p>Vraag {props.questionNumber}/12</p>
    );
};