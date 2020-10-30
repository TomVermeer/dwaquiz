import React from 'react';
import './final-scores.scss';
import {fetchTeamScores} from "shared/reducers/sharedActionCreators";

export const FinalScores = (props) => {

    const teamScores = props.useSelector(state => state.shared.teamScores.slice());
    const quizPin = props.useSelector(state => state.shared.quizProgress.quizPin);
    const dispatch = props.useDispatch();

    props.useEffect(() => {
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
            <props.cardProvider>
                <props.cardHeaderProvider>
                    <div className="list-row">
                        <div>Team</div>
                        <div>Ronde punten</div>
                        <div>Goede antwoorden</div>
                    </div>
                </props.cardHeaderProvider>
                <props.listGroupProvider variant="flush">
                    {sortTeamScores(teamScores)
                        .map((teamScore) => {
                            return (
                                <props.listGroupItemProvider key={teamScore.teamName}>
                                    <div className="list-row">
                                        <div>{teamScore.teamName}</div>
                                        <div>{teamScore.roundPoints}</div>
                                        <div>{teamScore.numberOfCorrectQuestions}</div>
                                    </div>
                                </props.listGroupItemProvider>
                            );
                        })}
                </props.listGroupProvider>
            </props.cardProvider>
        </div>
);
};