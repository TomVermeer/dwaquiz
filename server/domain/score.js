const placingToScoreMap = [
    4,
    2,
    1
];

const roundPointsForNotPlacedTeams = 0.1;

const createNumberOfCorrectQuestionsMap = (allQuestioningsInRound) => {
    return allQuestioningsInRound.reduce((map, questioning) => {
        console.log('reduce, current map: ', map);
        console.log('is correct: ', questioning.isCorrect);
        map[questioning.teamName] = {
            numberOfCorrectQuestions:
                map[questioning.teamName]
                    ? map[questioning.teamName].numberOfCorrectQuestions +
                        (questioning.isCorrect
                            ? 1
                            : 0)
                    : 0,
            roundPoints: 0
        };
        return map;
    }, {});
};

const addRoundPointsToTeamNameIndexedObject = (scoreMap) => {
    const sortedScores = Object.values(scoreMap).sort();
    for(let i = 0; i < sortedScores.length; i++) {
        if(i > placingToScoreMap.length - 1) {
            // TODO check if reference is not changed
            sortedScores[i].roundPoints += roundPointsForNotPlacedTeams;
        } else {
            sortedScores[i].roundPoints += placingToScoreMap[i];
        }
    }
    console.log('calculated roundPoints array: ', sortedScores);
    console.log('calculated roundPoints map: ', scoreMap);
};

const calculateScoreFromQuestioningsInRound = (allQuestioningsInRound) => {
    const scoreMap = createNumberOfCorrectQuestionsMap(allQuestioningsInRound);
    addRoundPointsToTeamNameIndexedObject(scoreMap);
    return scoreMap;
};

module.exports = {calculateScoreFromQuestioningsInRound};