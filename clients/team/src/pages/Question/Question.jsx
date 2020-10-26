import React, {useEffect} from 'react';
import {fetchQuestion} from "../../reducers/rootActionCreators";
import {useSelector, useDispatch} from 'react-redux';

export const Question = (props) => {

    const {quizPin, roundNumber, questionNumber} = useSelector(state => state.shared.quizProgress);
    const teamName = useSelector(state => state.root.teamName);
    const question = useSelector(state => state.root.currentQuestion);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchQuestion(quizPin, roundNumber, questionNumber, teamName));
    }, [quizPin, roundNumber, questionNumber, teamName, dispatch]);

    return (
        <p>{question}</p>
    );
};