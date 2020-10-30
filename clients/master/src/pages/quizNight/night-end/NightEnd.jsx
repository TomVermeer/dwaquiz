import React, {useEffect} from 'react';
import './night-end.scss';
import {FinalScores} from "shared/components/FinalScores/FinalScores";
import {Card, ListGroup} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

export const NightEnd = (props) => {
    return (
        <FinalScores cardProvider={Card}
                     listGroupProvider={ListGroup}
                     useEffect={useEffect}
                     useSelector={useSelector}
                     useDispatch={useDispatch}
        />
    );
};