import React from 'react';
import './grade.scss';
import {CurrentQuestion} from "../../../../components/CurrentQuestion/CurrentQuestion";
import {useTitle} from "../../../../effects/useTitle";

export const Grade = (props) => {

    useTitle('Beoordelen');

    return (
        <CurrentQuestion/>
    );
};