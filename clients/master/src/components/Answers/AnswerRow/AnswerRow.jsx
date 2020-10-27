import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import {useDispatch} from 'react-redux';
import './answer-row.scss';
import {setIsCorrect} from "../../../reducers/currentQuestion/currentQuestionActionCreators";

export const AnswerRow = (props) => {
    const answerText = props.teamAnswer.answer || <i>Nog geen antwoord gegeveven</i>;

    const dispatch = useDispatch();
    const onChangeIsCorrect = (value) => {
        dispatch(setIsCorrect(value, props.teamAnswer.teamName));
    };

    return (
        <div>
            {props.teamAnswer.teamName} {answerText}
            <BootstrapSwitchButton checked={props.teamAnswer.isCorrect}
                                   onstyle="success"
                                   offstyle="outline-danger"
                                   onlabel="Correct"
                                   offlabel="Onjuist"
                                   width={100}
                                   onChange={onChangeIsCorrect}/>
        </div>
    );
};