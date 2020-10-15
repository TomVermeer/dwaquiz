import React from 'react';
import { RoundHeader, TeamsDisplay, Footer } from '../../components';

const QuizNightEndPage = () => {

    const teams = [
        {
          name: "de billy butchers",
          correctQuestions: 9,
          roundPoints: 4
        },
        {
          name: "super cool team",
          correctQuestions: 12,
          roundPoints: 8
        },
        {
          name: "bitch mctits",
          correctQuestions: 5,
          roundPoints: 0
        },
      ];

    return (
        <>
        <RoundHeader title="Eindstand"/>
        <TeamsDisplay teams={teams} type="nightScore" />
        <Footer/>
        </>
    )

}
export default QuizNightEndPage;