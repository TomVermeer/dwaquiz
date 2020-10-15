import React from 'react';

import { QuestionHeader, Question, TeamsDisplay, Footer } from "../../components"

const Questionpage = () => {
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

    return(
        <>
            <QuestionHeader roundNumber={1} questionNumber={4} quizPin={12314}/>
            <Question question={question}/>
            <TeamsDisplay title="Answered by" teams={teams}/>
            <Footer/>
        </>
    )
}
export default Questionpage;