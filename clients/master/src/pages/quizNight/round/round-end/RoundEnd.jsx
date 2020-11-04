import React from 'react';
import './round-end.scss';
import {Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {Pages} from "../../../routerUrls";
import {useSelector, useDispatch} from 'react-redux';
import {endNight} from "../../../../reducers/quizNight/quizNightActionCreators";
import {setRoundNumber} from "shared/reducers/sharedActionCreators";

export const RoundEnd = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const {quizPin, roundNumber} = useSelector(state => state.shared.quizProgress);

    const onClickNextRound = () => {
        dispatch(setRoundNumber(roundNumber + 1));
        history.push(Pages(quizPin, roundNumber + 1).CHOOSE_CATEGORIES);
    };

    const onClickEndNight = () => {
        dispatch(endNight(quizPin, history));
    };

    return (
        <div className="round-end">
            <Button variant="danger" size="huge" onClick={onClickEndNight}>Beëindig quiznight</Button>
            <Button variant="primary" size="huge" onClick={onClickNextRound}>Volgende ronde</Button>
        </div>
    );
};