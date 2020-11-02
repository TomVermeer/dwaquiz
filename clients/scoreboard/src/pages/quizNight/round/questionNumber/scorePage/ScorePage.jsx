import React, {useEffect} from 'react'
import {fetchQuestion, fetchScores} from '../../../../../reducers/mainActionCreators';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {Footer, Question, QuestionHeader, TeamsDisplay} from '../../../../../components/index';

const ScorePage = () => {
    const {roundNumber, questionNumber} = useSelector(state => state.shared.quizProgress);
    const history = useHistory();

    const dispatch = useDispatch();
    const quizPin = useSelector(state => state.shared.quizProgress.quizPin);
    useEffect(() => {
        dispatch(fetchQuestion(quizPin, history, roundNumber, questionNumber));
        dispatch(fetchScores(quizPin, roundNumber, questionNumber));
    }, [questionNumber, roundNumber, dispatch, quizPin, history]);

    const currentQuestion = useSelector(state => state.root.currentQuestion);

    const teams = useSelector(state => state.root.teamAnswers);

    return (
        <>
            <QuestionHeader roundNumber={roundNumber} questionNumber={questionNumber} quizPin={quizPin}/>
            <Question question={currentQuestion}/>
            <TeamsDisplay title="Team scores" teams={teams} type="questionScore"/>
            <Footer/>
        </>
    )

};
export default ScorePage;