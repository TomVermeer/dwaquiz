import React, {useEffect} from 'react';
import './night-end.scss';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPlacing} from "../../reducers/placing/placingActionCreators";
import {Card} from "react-bootstrap";
import {useTitle} from "../../effects/useTitle";

const placingText = [
    "Eerste plaats!",
    "Runner up",
    "Nog op het podium",
];

const placingToText = (placing) => {
    if (placingText[placing - 1] != null) {
        return placingText[placing - 1];
    }
    return `Jullie zijn ${placing}de geworden`;
};

export const NightEnd = (props) => {
    const teamName = useSelector(state => state.root.teamName);
    const quizPin = useSelector(state => state.shared.quizProgress.quizPin);
    const dispatch = useDispatch();
    const placing = useSelector(state => state.placing);

    useEffect(() => {
        if (teamName && quizPin) {
            dispatch(fetchPlacing(teamName, quizPin));
        }
    }, [teamName, quizPin, dispatch]);

    useTitle('Einde quiz night');

    const cardVariant = placing.placing <= 3 ? "success" : "primary";

    return (
        <div className="placing">
            <Card bg={cardVariant}
                  text={cardVariant.toLowerCase() === 'light' ? 'dark' : 'white'}>
                <Card.Header>
                    {placing.teamName}
                </Card.Header>
                <Card.Body>
                    <p><b>{placingToText(placing.placing)}</b></p>
                    <p><b>{placing.roundPoints}</b> ronde punten</p>
                    <p><b>{placing.numberOfCorrectQuestions}</b> goede antwoorden</p>
                </Card.Body>
            </Card>
        </div>
    );
};