import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { applyTeam } from '../../reducers/quizProgress/quizProgressActionCreators';
import {useHistory} from 'react-router-dom';
import './teamapplication.scss';

export const TeamApplication = (props) => {

    const [pin, setPin] = useState('');
    const [teamName, setTeamName] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const onParticipate = (e) => {
        e.preventDefault();
        // TODO validation
        dispatch(applyTeam(teamName, pin, history));
    }

    return (
        <Form onSubmit={onParticipate}>
            <Form.Group controlId="quizPin">
                <Form.Label>Quiz pin</Form.Label>
                <Form.Control type="number" placeholder='quiz pin' value={pin} onChange={e => setPin(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="teamName">
                <Form.Label>Team name</Form.Label>
                <Form.Control type="text" placeholder='Team name' value={teamName} onChange={e => setTeamName(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Participate
            </Button>
        </Form>
    );
}