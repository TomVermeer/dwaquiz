import React, {useEffect} from 'react';
import './final-scores.scss';
import {Card, ListGroup} from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux';
import {fetchTeamScores} from "shared/reducers/sharedActionCreators";

export const FinalScores = (props) => {

    const teamScores = useSelector(state => state.shared.teamScores.slice());
    const quizPin = useSelector(state => state.shared.quizProgress.quizPin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTeamScores(quizPin));
    }, [quizPin, dispatch]);

    const sortTeamScores = (teamScores) => {
        return teamScores.sort((x, y) => {
            if (x.roundPoints === y.roundPoints) {
                return x.numberOfCorrectQuestions < y.numberOfCorrectQuestions ? 1 : -1;
            }
            return x.roundPoints < y.roundPoints ? 1 : -1;
        });
    };

    return (
        <div className="card-container">
            <Card>
                <Card.Header>
                    <div className="list-row">
                        <div>Team</div>
                        <div>Ronde punten</div>
                        <div>Goede antwoorden</div>
                    </div>
                </Card.Header>
                <ListGroup variant="flush">
                    {sortTeamScores(teamScores)
                        .map((teamScore) => {
                            return (
                                <ListGroup.Item key={teamScore.teamName}>
                                    <div className="list-row">
                                        <div>{teamScore.teamName}</div>
                                        <div>{teamScore.roundPoints}</div>
                                        <div>{teamScore.numberOfCorrectQuestions}</div>
                                    </div>
                                </ListGroup.Item>
                            );
                        })}
                </ListGroup>
            </Card>
        </div>
    );
};