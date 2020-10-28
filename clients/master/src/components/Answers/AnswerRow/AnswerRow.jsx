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
        <div className="list-row">
            <div>
                {props.teamAnswer.teamName}
            </div>
            <div>
                {answerText}
            </div>
            <div className={props.isDisabled ? 'disabled' : ''}>
                <BootstrapSwitchButton checked={props.teamAnswer.isCorrect}
                                       onstyle="success"
                                       offstyle="outline-danger"
                                       onlabel="Correct"
                                       offlabel="Onjuist"
                                       width={100}
                                       onChange={onChangeIsCorrect}
                    // Not disabled because this module cant deal with being undisabled
                />
            </div>
        </div>
    );
};