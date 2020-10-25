const findHighestRoundNumber = (quizNight) => {
    if(quizNight.rounds.length !== 0) {
        return Math.max(...
            (quizNight.rounds.map(x => x.roundNumber)));
    } else {
        return 0;
    }
};

module.exports = {findHighestRoundNumber};