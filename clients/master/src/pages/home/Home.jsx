import React from 'react';
import { Button } from 'react-bootstrap';
import { Title } from 'shared/components/title/Title';
import { useHistory } from "react-router-dom";
import './home.scss';
import { PAGES } from '../pages';

export const Home = (props) => {
    const history = useHistory();

    const onStartQuizNight = () => {
        history.push(PAGES.TEAMS);
        console.log('click');
    };

    return (
        <>
            <Title text="Quizzer" />
            <Button variant="primary" onClick={onStartQuizNight}>Start quiznight</Button>
        </>
    );
}