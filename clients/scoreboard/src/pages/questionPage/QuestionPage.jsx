import React from 'react';
import { QuestionHeader, Question, TeamsDisplay, Footer } from "../../components"
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import { fetchQuestion, roundNumberSetter, questionNumberSetter } from '../../reducers/mainActionCreators';
import { useFromUrl } from '../../effects/useFromUrl'



const Questionpage = () => {
    const round = useFromUrl('roundNumber', roundNumberSetter);
    const questionNum = useFromUrl('questionNumber', questionNumberSetter);
    const history = useHistory();

    const quizPin = useSelector(state => state.shared.quizProgress.quizPin);

    const dispatch = useDispatch();
    const teams = useSelector(state => state.root.answeredTeams)

     useEffect( () => {
        dispatch(fetchQuestion(quizPin, history, round, questionNum))
     },[questionNum, round, dispatch, quizPin])

     const currentQuestion = useSelector(state => state.root.currentQuestion)

    return(
        <>
            <QuestionHeader roundNumber={round} questionNumber={questionNum} quizPin={quizPin}/>
            <Question question={currentQuestion}/>
            <TeamsDisplay title="Answered by" teams={teams} type="answer"/>
            <Footer/>
        </>
    )
}
export default Questionpage;