import {Card, ListGroup} from "react-bootstrap";
import React from "react";
import './panel.scss';

export const Panel = (props) => {
    const onClickRow = (row) => () => {
        if(props.onClick) {
            if(row.key) {
                props.onClick(row.key);
            } else {
                props.onClick(row);
            }
        }
    };

    return (
        <div className="panel">
            <Card>
                <Card.Header>{props.header}</Card.Header>
                <ListGroup variant="flush">
                    {props.rows.map(row => (
                        <ListGroup.Item key={row.key ? row.key : row}
                                        active={props.selected && (props.selected === row || props.selected === row.key)}
                                        onClick={onClickRow(row)}
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
