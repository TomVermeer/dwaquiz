import React from 'react';

import './answer-row.scss';

export const AnswerRow = (props) => {
    const answerText = props.teamAnswer.answer || <i>Nog geen antwoord gegeveven</i>;

    return (
        <div>{props.teamAnswer.teamName} {answerText}</div>
    );
};