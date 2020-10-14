import React from 'react'

import RoundHeader from '../../components/roundHeader/RoundHeader'
import Question from '../../components/Question/Question'

const ScorePage = () => {
    const teams = [
        {
          name: "de billy butchers",
        },
        {
          name: "super cool team",
        },
        {
          name: "bitch mctits",
        },
      ];

    const question = {
        category: "topografie",
        question: "Wat is de hoofdstad van Frankrijk?"
    }


    return (
        <>
          <RoundHeader roundNumber={1} questionNumber={4} quizPin={12314}/>
          <Question question={question}/>
        </>
    )

}
export default ScorePage;