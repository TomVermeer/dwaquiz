import React from 'react';
import './loading-spinner.scss';
import {Spinner} from "react-bootstrap";
import {Dots} from "../Dots/Dots";

export const LoadingSpinner = (props) => {
    return (
        <div>
            <Spinner animation="border" size="huge"/>
            <p>
                {props.text}
                <Dots interval={500} maxNumber={3}/>
            </p>
        </div>
    );
};