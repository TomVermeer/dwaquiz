import React from 'react';
import { QuestionHeader, Question, TeamsDisplay, Footer } from "../../components"
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { fetchQuestion } from '../../reducers/mainActionCreators';


const Questionpage = () => {


    const {quizPin, roundNumber, questionNumber} = useSelector(state => state.shared.quizProgress);
    const currentQuestion = fetchQuestion(quizPin,roundNumber,questionNumber)
    const teams = [
        
          "de billy butchers",
        ,
           "super cool team",
        ,
          "bitch mctits",
        ,
      ];

     useEffect( () => {

     },[questionNumber])

    return(
        <>
            <QuestionHeader roundNumber={roundNumber} questionNumber={questionNumber} quizPin={quizPin}/>
            <Question question={currentQuestion}/>
            <TeamsDisplay title="Answered by" teams={teams}/>
            <Footer/>
        </>
    )
}
export default Questionpage;