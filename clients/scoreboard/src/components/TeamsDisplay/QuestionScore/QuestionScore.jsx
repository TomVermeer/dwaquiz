import {Container, Table} from "react-bootstrap";
import React from "react";
import './question-score.scss';

const decideClassName = (el) => {
    if (el.isCorrect) {
        return "Correct";
    } else {
        return "False";
    }
};

export const QuestionScore = (props) => {
    return (
        <Container>
            <Table className="TeamTable">
                <thead>
                <tr>
                    <th>Team:</th>
                    <th>Antwoord:</th>
                </tr>
                </thead>
                <tbody>
                {props.teams.map((el) => {
                    return (
                        <tr key={el.teamName} className={decideClassName(el)}>
                            <th>{el.teamName}</th>
                            <th>{el.answer}</th>
                        </tr>
                    );
                })}
                </tbody>
            </Table>

        </Container>
    );
};