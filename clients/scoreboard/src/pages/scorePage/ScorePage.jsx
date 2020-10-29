import React from 'react'
import { useFromUrl } from '../../effects/useFromUrl';
import { fetchQuestion, fetchScores } from '../../reducers/mainActionCreators';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { TeamsDisplay, Question, QuestionHeader, Footer } from '../../components';
import {setRoundNumber, setQuestionNumber} from "shared/reducers/sharedActionCreators";
import { useEffect } from 'react'

const ScorePage = () => {
  const round = useFromUrl('roundNumber', setRoundNumber);
  const questionNum = useFromUrl('questionNumber', setQuestionNumber);
  const history = useHistory();

  const dispatch = useDispatch()
  const quizPin = useSelector(state => state.shared.quizProgress.quizPin);
  useEffect( () => {
    console.log(currentQuestion, "current question")
   
    dispatch(fetchScores(quizPin, round, questionNum))
    dispatch(fetchQuestion(quizPin, history, round, questionNum))
 },[questionNum, round, dispatch, quizPin, history])

 useEffect( () => {

 })

 const currentQuestion = useSelector(state => state.root.currentQuestion)

 const teams= useSelector(state => state.root.teamAnswers);

 console.log(teams)
    return (
        <>
          <QuestionHeader roundNumber={round} questionNumber={questionNum} quizPin={quizPin}/>
          <Question question={currentQuestion}/>
          <TeamsDisplay title="Team scores" teams={teams} type="questionScore"/>
          <Footer/>
        </>
    )

}
export default ScorePage;