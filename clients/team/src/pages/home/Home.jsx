import React from 'react'
import { Title } from 'shared/components/title/Title';
import { TeamApplication } from '../../components/TeamApplication/TeamApplication';
import './home.scss';

export const Home = (props) => {
    return (
        <>
            <Title text='Quizzer'/>
            <TeamApplication/>
        </>
    );
}