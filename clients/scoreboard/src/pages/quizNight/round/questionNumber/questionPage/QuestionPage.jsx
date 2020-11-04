import React, {useEffect} from 'react';
import {Footer, Question, QuestionHeader} from "../../../../../components/index";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {fetchAnsweredTeams, fetchQuestion} from '../../../../../reducers/mainActionCreators';
import {Answers} from "../../../../../components/TeamsDisplay/Answers/Answers";

const Questionpage = () => {
    const {roundNumber, questionNumber} = useSelector(state => state.shared.quizProgress);
    const history = useHistory();

    const quizPin = useSelector(state => state.shared.quizProgress.quizPin);

    const dispatch = useDispatch();
    const teams = useSelector(state => state.root.answeredTeams);

    useEffect(() => {
        if (quizPin && roundNumber) {
            dispatch(fetchAnsweredTeams(quizPin, roundNumber, questionNumber));
            dispatch(fetchQuestion(quizPin, history, roundNumber, questionNumber))
        }
    }, [questionNumber, roundNumber, dispatch, quizPin, history]);

    const currentQuestion = useSelector(state => state.root.currentQuestion);

    return (
        <>
            <QuestionHeader roundNumber={roundNumber} questionNumber={questionNumber} quizPin={quizPin}/>
            <Question question={currentQuestion}/>
            <Answers title="Beantwoord door" teams={teams}/>
            <Footer/>
        </>
    )
};
export default Questionpage;