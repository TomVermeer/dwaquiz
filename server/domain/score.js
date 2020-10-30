const placingToScoreMap = [
    4,
    2,
    1
];

const roundPointsForNotPlacedTeams = 0.1;

const getCurrentNumberOfCorrectQuestions = (map, teamName) => {
  if(map[teamName] == null) {
      return 0;
  } else {
      return map[teamName].numberOfCorrectQuestions;
  }
};

const calculateNextNumberOfCorrectQuestions = (currentNumberOfCorrectQuestions, isCurrentAnswerCorrect) => {
  if(isCurrentAnswerCorrect) {
      return currentNumberOfCorrectQuestions + 1;
  }
  return currentNumberOfCorrectQuestions;
};

const createNumberOfCorrectQuestionsMap = (allQuestioningsInRound) => {
    return allQuestioningsInRound.reduce((map, questioning) => {
        map[questioning.teamName] = {
            numberOfCorrectQuestions:
                calculateNextNumberOfCorrectQuestions(
                    getCurrentNumberOfCorrectQuestions(map, questioning.teamName),
                    questioning.isCorrect),
            roundPoints: 0
        };
        return map;
    }, {});
};

const addRoundPointsToTeamNameIndexedObject = (scoreMap) => {
    const sortedScores = Object.values(scoreMap).sort();
    for(let i = 0; i < sortedScores.length; i++) {

        let roundPointsEarned = roundPointsForNotPlacedTeams;
        if(i < placingToScoreMap.length) {
            roundPointsEarned = placingToScoreMap[i];
        }

        sortedScores[i].roundPoints += roundPointsEarned;
    }
};

const calculateScoreFromQuestioningsInRound = (allQuestioningsInRound) => {
    const scoreMap = createNumberOfCorrectQuestionsMap(allQuestioningsInRound);
    addRoundPointsToTeamNameIndexedObject(scoreMap);
    return scoreMap;
};

module.exports = {calculateScoreFromQuestioningsInRound};