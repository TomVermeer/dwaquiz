import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './teams.scss';
import {TeamApplicationsPanel} from "../../../components/TeamApplicationsPanel/TeamApplicationsPanel";
import {ApprovedTeamsPanel} from "../../../components/ApprovedTeamsPanel/ApprovedTeamsPanel";
import {useTitle} from "../../../effects/useTitle";
import {fetchApprovedTeams, fetchTeamApplications} from "../../../reducers/quizNight/quizNightActionCreators";

const useFetchBasedOnQuizPin = (quizPin, actionCreator) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (quizPin) {
            dispatch(actionCreator(quizPin));
        }
    }, [dispatch, quizPin, actionCreator]);
};

const useFetchTeamApplications = quizPin => {
    useFetchBasedOnQuizPin(quizPin, fetchTeamApplications);
};

const useFetchApprovedTeams = quizPin => {
    useFetchBasedOnQuizPin(quizPin, fetchApprovedTeams);
};

export const Teams = (props) => {
    const {teamApplications, approvedTeams} = useSelector(state => state.quizNight);
    const {quizPin} = useSelector(state => state.shared.quizProgress);
    useTitle('Quiz night');

    useFetchTeamApplications(quizPin);
    useFetchApprovedTeams(quizPin);

    return (
        <div className="space-around">
            <TeamApplicationsPanel applications={teamApplications}/>
            <ApprovedTeamsPanel teams={approvedTeams}/>
        </div>
    );
};