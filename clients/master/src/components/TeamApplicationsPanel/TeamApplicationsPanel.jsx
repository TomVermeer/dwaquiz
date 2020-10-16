import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import './team-applications-panel.scss';
import {Panel} from "../Panel/Panel";
import {useDispatch} from "react-redux";
import {approveTeam} from "../../reducers/quizNight/quizNightActionCreators";

export const TeamApplicationsPanel = (props) => {
    const [selectedApplication, setSelectedApplication] = useState(null);
    const dispatch = useDispatch();

    const onApproveTeam = () => {
        dispatch(approveTeam(selectedApplication));
    };

    return (
        <Panel header="Wachtrij"
            rows={props.applications}
            onClick={(application) => setSelectedApplication(application)}
            selected={selectedApplication}>
            <Button variant="primary" disabled={selectedApplication === null} onClick={onApproveTeam}>Toevoegen</Button>
            <Button variant="danger" disabled={selectedApplication === null}>Afwijzen</Button>
        </Panel>

    );
};