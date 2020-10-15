import React, {useState} from 'react';
import {ListGroup, Button} from 'react-bootstrap';
import './team-applications-panel.scss';

export const TeamApplicationsPanel = (props) => {
    const [selected, setSelected] = useState(null);

    return (
        <div>
            <h2>Wachtrij</h2>
            <ListGroup className="applications">
                {props.applications.map(application => (
                    <ListGroup.Item key={application}
                                    active={selected === application}
                                    onClick={() => setSelected(application)}
                    >
                        {application}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div>
                <Button variant="primary" disabled={selected === null}>Toevoegen</Button>
                <Button variant="danger" disabled={selected === null}>Afwijzen</Button>
            </div>
        </div>
    );
};