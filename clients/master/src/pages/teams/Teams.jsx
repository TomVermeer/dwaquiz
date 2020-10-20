import React from 'react';
import { useSelector } from 'react-redux';
import './teams.scss';
import {TeamApplicationsPanel} from "../../components/TeamApplicationsPanel/TeamApplicationsPanel";
import {ApprovedTeamsPanel} from "../../components/ApprovedTeamsPanel/ApprovedTeamsPanel";

export const Teams = (props) => {
    const state = useSelector(state => state.quizNight);
    return (
        <div className="space-between">
            <TeamApplicationsPanel applications={state.teamApplications}/>
            <ApprovedTeamsPanel teams={state.approvedTeams}/>
        </div>
    );
};