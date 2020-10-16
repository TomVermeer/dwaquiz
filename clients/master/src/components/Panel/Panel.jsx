import {Card, ListGroup} from "react-bootstrap";
import React from "react";

export const Panel = (props) => {
    return (
        <div className="panel">
            <Card>
                <Card.Header>{props.header}</Card.Header>
                <ListGroup variant="flush" className="panel-content">
                    {props.rows.map(row => (
                        <ListGroup.Item key={row}
                                        active={props.selected === row}
                                        onClick={() => props.onClick(row)}
                        >
                            {row}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Card.Footer>
                    <div className="card-actions">
                        {props.children}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
};
