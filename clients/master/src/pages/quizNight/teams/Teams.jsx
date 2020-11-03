import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './teams.scss';
import {TeamApplicationsPanel} from "../../../components/TeamApplicationsPanel/TeamApplicationsPanel";
import {ApprovedTeamsPanel} from "../../../components/ApprovedTeamsPanel/ApprovedTeamsPanel";
import {useTitle} from "../../../effects/useTitle";
import {fetchApprovedTeams, fetchTeamApplications} from "../../../reducers/quizNight/quizNightActionCreators";

const useFetchTeamApplications = quizPin => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (quizPin) {
            dispatch(fetchTeamApplications(quizPin));
        }
    }, [dispatch, quizPin]);
};

const useFetchApprovedTeams = quizPin => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (quizPin) {
            dispatch(fetchApprovedTeams(quizPin));
        }
    }, [dispatch, quizPin]);
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