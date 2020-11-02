import React, {useEffect} from 'react';
import './night-end.scss';
import {FinalScores} from "shared/components/FinalScores/FinalScores";
import {Button, Card, ListGroup} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {useTitle} from "../../../effects/useTitle";
import {useHistory} from 'react-router-dom';
import {closeWebsocket} from "shared/websocket";
import {Pages} from "../../routerUrls";
import {resetState} from "shared/reducers/sharedActionCreators";

export const NightEnd = (props) => {

    useTitle('Einde quiz night');

    const dispatch = useDispatch();
    const history = useHistory();

    const navigateHome = () => {
        dispatch(resetState());
        closeWebsocket();
        history.push(Pages().HOME);
    };

    return (
        <FinalScores cardProvider={Card}
                     listGroupProvider={ListGroup}
                     useEffect={useEffect}
                     useSelector={useSelector}
                     useDispatch={useDispatch}
        >
            <Button onClick={navigateHome}>Terug naar home</Button>
        </FinalScores>
    );
};