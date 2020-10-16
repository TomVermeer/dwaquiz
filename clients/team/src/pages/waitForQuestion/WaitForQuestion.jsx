import React from 'react';
import './wait-for-question.scss';
import {LoadingSpinner} from "../../components/LoadingSpinner/LoadingSpinner";

export const WaitForQuestion = (props) => {
    return (
        <LoadingSpinner text="Wachten op vraag"/>
    )
}