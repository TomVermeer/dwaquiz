import React, {useEffect} from 'react';
import './current-question.scss';
import {useFromUrl} from "../../effects/useFromUrl";
import {fetchCurrentQuestion, setQuestionId} from "../../reducers/currentQuestion/currentQuestionActionCreators";
import {useDispatch, useSelector} from "react-redux";

export const CurrentQuestion = (props) => {
    const questionId = useFromUrl('questionId', setQuestionId);
    const dispatch = useDispatch();
    const currentQuestion = useSelector(state => state.currentQuestion);
    useEffect(() => {
        dispatch(fetchCurrentQuestion(questionId));
    }, [questionId, dispatch]);
    return (
        <div className="current-question">
            <div className="category">{currentQuestion.category}</div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answer">{currentQuestion.answer}</div>
        </div>
    );
};