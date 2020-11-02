import {Container, Table} from "react-bootstrap";
import React from "react";

export const EndScore = (props) => {
    const sortTeams = (teams) => {
        if(props.type === "roundScore") {
            return teams.sort((x, y) => (x.correctQuestions > y.correctQuestions ? -1 : 1))
        }else {
            return teams.sort((x, y) => (x.roundPoints > y.roundPoints ? -1 : 1))
        }

    };

    return (
        <Container>
            <h1>{props.title}</h1>
            <Table bordered className="TeamTable">
                <tr>
                    <th>team</th>
                    <th>Goede antwoorden</th>
                    <th>Ronde punten</th>
                </tr>
                {sortTeams(props.teams)
                    .map((el) => {
                        return (
                            <tr>
                                <th>{el.teamName}</th>
                                <th>{el.correctQuestions}</th>
                                <th>{el.roundPoints}</th>
                            </tr>
                        );
                    })}
            </Table>
        </Container>
    );
};