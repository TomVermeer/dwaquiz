import React from "react";
import "../TeamsDisplay/teamDisplay.scss";
import {QuestionScore} from "./QuestionScore/QuestionScore";
import {EndScore} from "./EndScore/EndScore";
import {Answers} from "./Answers/Answers";
import {ApprovedTeams} from "./ApprovedTeams/ApprovedTeams";

const TeamsDisplay = (props) => {

    if (props.teams) {
        if (props.type === "questionScore") {
            return <QuestionScore teams={props.teams}/>;
        } else if (props.type === "roundScore" || props.type === "nightScore") {
            return <EndScore type={props.type} title={props.title} teams={props.teams}/>;
        } else if (props.type === "answer") {
            return <Answers title={props.title} teams={props.teams}/>
        } else if (props.type === undefined || props.type === "display") {
            return <ApprovedTeams title={props.title} teams={props.teams}/>;
        }
    } else {
        return <h1>Er zijn nog geen deelnemers</h1>
    }
};
export default TeamsDisplay;
