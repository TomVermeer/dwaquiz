import {Button} from "react-bootstrap";
import React from "react";
import {useDispatch} from "react-redux";
import {openQuizNight} from "../../reducers/quizNight/quizNightActionCreators";
import {useHistory} from "react-router-dom";
import './start-quiz-night-button.scss';

export const StartQuizNightButton = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onStartQuizNight = () => {
        dispatch(openQuizNight(history));
    };

    return (
        <Button variant="primary" size="huge" onClick={onStartQuizNight}>Start quiznight</Button>
    );
};