import React from 'react';
import './questions.scss';
import {useTitle} from "../../../../effects/useTitle";
import {QuestionsPanel} from "../../../../components/QuestionsPanel/QuestionsPanel";

export const Questions = (props) => {

    useTitle('Kiez vraag');

    return (
        <QuestionsPanel/>
    );
};