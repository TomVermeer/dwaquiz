import React from 'react';
import './grade.scss';
import {CurrentQuestion} from "../../../../components/CurrentQuestion/CurrentQuestion";
import {useTitle} from "../../../../effects/useTitle";
import {Answers} from "../../../../components/Answers/Answers";
import {useFromUrl} from "../../../../effects/useFromUrl";
import {setQuestionNumber} from "shared/reducers/sharedActionCreators";

export const Grade = (props) => {

    useTitle('Beoordelen');
    useFromUrl('questionNumber', setQuestionNumber);

    return (
        <div className="grade">
            <CurrentQuestion/>
            <Answers/>
        </div>
    );
};