import React from 'react';

export const QuestionProgress = (props) => {
    if(props.questionNumber == null) {
        return null;
    }
    return (
        <>Vraag {props.questionNumber}/12</>
    );
};