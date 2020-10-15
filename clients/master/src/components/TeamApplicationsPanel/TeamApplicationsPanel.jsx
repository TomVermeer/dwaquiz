import React, {useState} from 'react';
import {ListGroup, Button, Card} from 'react-bootstrap';
import './team-applications-panel.scss';

export const TeamApplicationsPanel = (props) => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="panel">
            <Card>
                <Card.Header>Wachtrij</Card.Header>
                <ListGroup variant="flush" className="applications">
                    {props.applications.map(application => (
                        <ListGroup.Item key={application}
                                        active={selected === application}
                                        onClick={() => setSelected(application)}
                        >
                            {application}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Card.Footer>
                    <div className="card-actions">
                        <Button variant="primary" disabled={selected === null}>Toevoegen</Button>
                        <Button variant="danger" disabled={selected === null}>Afwijzen</Button>
                    </div>
                </Card.Footer>

            </Card>
        </div>
    );
};