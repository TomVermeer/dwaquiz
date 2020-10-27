import React from 'react';
import './grade.scss';
import {CurrentQuestion} from "../../../../components/CurrentQuestion/CurrentQuestion";
import {useTitle} from "../../../../effects/useTitle";
import {Answers} from "../../../../components/Answers/Answers";

export const Grade = (props) => {

    useTitle('Beoordelen');

    return (
        <div className="grade">
            <CurrentQuestion/>
            <Answers/>
        </div>
    );
};