import React from 'react';
import { Button } from 'react-bootstrap';
import { Title } from 'shared/components/title/Title';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { PAGES } from '../pages';
import './home.scss';
import { openQuizNight } from '../../reducers/quizNight/quizNightActionCreators';

export const Home = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onStartQuizNight = () => {
        history.push(PAGES.TEAMS);
        dispatch(openQuizNight());
    };

    return (
        <>
            <Title text="Quizzer" />
            <Button variant="primary" onClick={onStartQuizNight}>Start quiznight</Button>
        </>
    );
}