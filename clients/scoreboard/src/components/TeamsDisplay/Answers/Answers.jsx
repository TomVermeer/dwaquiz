import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";
import React from "react";

export const Answers = (props) => {
    return (
        <Container className="TeamContainer">
            <h1>{props.title}</h1>
            {
                props.teams.map((el) => {
                    if(el.answer) {
                        return (
                            <Card key={el.teamName} className="TeamCard">
                                <Card.Body>{el.teamName}</Card.Body>
                            </Card>
                        );
                    } else {
                        return null
                    }
                })}
        </Container>
    );
};