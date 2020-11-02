import {Container, Card} from "react-bootstrap";
import React from "react";

export const ApprovedTeams = (props) => {
    return (
        <Container className="TeamContainer">
            <h1>{props.title}</h1>
            {
                props.teams.map((el) => {
                    return (
                        <Card key={el} className="TeamCard">
                            <Card.Body>{el}</Card.Body>
                        </Card>
                    );
                })}
        </Container>
    );
};