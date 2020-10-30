import React from 'react';
import './final-scores.scss';
import {fetchTeamScores} from "../../reducers/sharedActionCreators";
import medal from '../../resources/1st-place-medal.png';

const ScoreRow = (props) => {
    return (
        <div className="list-row">
            <div>{props.teamName}</div>
            <div>{props.roundPoints}</div>
            <div>{props.numberOfCorrectQuestions}</div>
        </div>
    );
};

const TopScore = (props) => {
    return (
        <div className="top-placement">
            <props.cardProvider>
                <a target="_blank" href="https://www.vexels.com/vectors/preview/129154/1st-place-laurel-medal" rel="no-opener">
                    <props.cardProvider.Img variant="top" src={medal}/>
                </a>
                <props.cardProvider.Body>
                    <props.cardProvider.Title>
                            {props.team.teamName}
                    </props.cardProvider.Title>
                    <p><b>{props.team.roundPoints}</b> ronde punten</p>
                    <p><b>{props.team.numberOfCorrectQuestions}</b> goede antwoorden</p>
                </props.cardProvider.Body>
            </props.cardProvider>
        </div>
    );
};

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

    const sortedTeams = sortTeamScores(teamScores);

    return (
        <div className="final-scores">
            {sortedTeams[0] && <TopScore team={sortedTeams[0]} cardProvider={props.cardProvider}/>}
            <div className="card-container">
                <props.cardProvider>
                    <props.cardProvider.Header>
                        <ScoreRow teamName="Team"
                                  roundPoints="Ronde punten"
                                  numberOfCorrectQuestions="Goede antwoorden"/>
                    </props.cardProvider.Header>
                    <props.listGroupProvider variant="flush">
                        {sortedTeams
                            .map((teamScore) => {
                                return (
                                    <props.listGroupProvider.Item key={teamScore.teamName}>
                                        <ScoreRow teamName={teamScore.teamName}
                                                  roundPoints={teamScore.roundPoints}
                                                  numberOfCorrectQuestions={teamScore.numberOfCorrectQuestions}/>
                                    </props.listGroupProvider.Item>
                                );
                            })}
                    </props.listGroupProvider>
                </props.cardProvider>
            </div>
        </div>
    );
};