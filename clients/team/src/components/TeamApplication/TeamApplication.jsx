import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {applyTeam} from '../../reducers/quizProgress/quizProgressActionCreators';
import {useHistory} from 'react-router-dom';
import './teamapplication.scss';
import {MINIMUM_NUMBER_OF_DIGITS_IN_QUIZ_PIN} from "shared/constants";

export const TeamApplication = (props) => {
    const [validated, setValidated] = useState(false);
    const [pin, setPin] = useState('');
    const [teamName, setTeamName] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const onParticipate = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            dispatch(applyTeam(teamName, pin, history));
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={onParticipate}>
            <Form.Group controlId="quizPin">
                <Form.Label>Quiz pin</Form.Label>
                <Form.Control type="text" placeholder='quiz pin' value={pin} onChange={e => setPin(e.target.value)}
                              required
                              pattern={`[0-9]{${MINIMUM_NUMBER_OF_DIGITS_IN_QUIZ_PIN},}`}/>
                <Form.Control.Feedback type="invalid">Vul een quizpin in ({MINIMUM_NUMBER_OF_DIGITS_IN_QUIZ_PIN} of meer cijfers)</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="teamName">
                <Form.Label>Team name</Form.Label>
                <Form.Control type="text" placeholder='Team name' value={teamName}
                              onChange={e => setTeamName(e.target.value)} required/>
                <Form.Control.Feedback type="invalid">Vul teamnaam in</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Deelnemen
            </Button>
        </Form>
    );
};