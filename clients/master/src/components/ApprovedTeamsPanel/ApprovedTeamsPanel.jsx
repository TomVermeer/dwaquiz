import React from 'react';
import './approved-teams-panel.scss';
import {Panel} from "../Panel/Panel";
import {Button} from "react-bootstrap";
import {closeApplicationPeriod} from "../../reducers/quizNight/quizNightActionCreators";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

export const ApprovedTeamsPanel = (props) => {
    const dispatch = useDispatch();
    const quizPin = useSelector(state => state.quizNight.quizPin);
    const history = useHistory();

    const startQuizNight = () => {
        dispatch(closeApplicationPeriod(quizPin, history));
    };

    return (
      <Panel header="Toegevoegde teams"
             rows={props.teams}>
          <Button disabled={props.teams.length < 2} onClick={startQuizNight}>Start quiz night</Button>
      </Panel>
    );
};