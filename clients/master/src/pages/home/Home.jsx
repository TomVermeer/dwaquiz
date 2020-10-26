import React from 'react';
import './home.scss';
import {StartQuizNightButton} from "../../components/StartQuizNightButton/StartQuizNightButton";
import {useTitle} from "../../effects/useTitle";


export const Home = (props) => {
    useTitle('Quizzer');

    return (
        <>
            <StartQuizNightButton/>
        </>
    );
};