import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import './team-applications-panel.scss';
import {Panel} from "../Panel/Panel";

export const TeamApplicationsPanel = (props) => {
    const [selectedApplication, setSelectedApplication] = useState(null);

    return (
        <Panel header="Wachtrij"
            rows={props.applications}
            onClick={(application) => setSelectedApplication(application)}
            selected={selectedApplication}>
            <Button variant="primary" disabled={selectedApplication === null}>Toevoegen</Button>
            <Button variant="danger" disabled={selectedApplication === null}>Afwijzen</Button>
        </Panel>

    );
};