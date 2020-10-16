import React from 'react';
import './approved-teams-panel.scss';
import {Panel} from "../Panel/Panel";
import {Button} from "react-bootstrap";

export const ApprovedTeamsPanel = (props) => {
    return (
      <Panel header="Toegevoegde teams"
             rows={props.teams}>
          <Button disabled={props.teams.length < 2}>Start quiz night</Button>
      </Panel>
    );
};