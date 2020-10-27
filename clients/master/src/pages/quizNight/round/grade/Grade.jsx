import React from 'react';
import './grade.scss';
import {CurrentQuestion} from "../../../../components/CurrentQuestion/CurrentQuestion";
import {useTitle} from "../../../../effects/useTitle";
import {Answers} from "../../../../components/Answers/Answers";
import {useFromUrl} from "../../../../effects/useFromUrl";
import {setQuestionNumber} from "shared/reducers/sharedActionCreators";
import {useWebsocket} from "../../../../effects/useWebsocket";
import {useSelector} from 'react-redux';

export const Grade = (props) => {

    useTitle('Beoordelen');
    const questionNumber = useFromUrl('questionNumber', setQuestionNumber);
    const {quizPin, roundNumber} = useSelector(state => state.shared.quizProgress);

    useWebsocket(quizPin, roundNumber, questionNumber);
    return (
        <div className="grade">
            <CurrentQuestion/>
            <Answers/>
        </div>
    );
};