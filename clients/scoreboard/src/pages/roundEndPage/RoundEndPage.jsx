import React from 'react';
import { RoundHeader, TeamsDisplay, Footer } from '../../components';


const RoundEndpage = (props) => {

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
            <RoundHeader title="Tussenstand"></RoundHeader>
            <TeamsDisplay title={`Ronde ${1} score`} teams={teams} type="roundScore"/>
            <Footer/>
        </>

    )
}
export default RoundEndpage;