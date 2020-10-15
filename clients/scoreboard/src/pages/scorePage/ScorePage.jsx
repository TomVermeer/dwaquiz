import React from 'react'

import { TeamsDisplay, Question, QuestionHeader, Footer } from '../../components';

const ScorePage = () => {
    const teams = [
        {
          name: "de billy butchers",
          answer: "parijs",
          isCorrect: true
        },
        {
          name: "super cool team",
          answer: "paris",
          isCorrect: true
        },
        {
          name: "bitch mctits",
          answer: "bordeaux",
          isCorrect: false
        },
      ];

    const question = {
        category: "topografie",
        question: "Wat is de hoofdstad van Frankrijk?",
        answer: "parijs"
    }


    return (
        <>
          <QuestionHeader roundNumber={1} questionNumber={4} quizPin={12314}/>
          <Question question={question}/>
          <TeamsDisplay title="Team scores" teams={teams} type="questionScore"/>
          <Footer/>
        </>
    )

}
export default ScorePage;