const {QuizNight} = require('../persistence/models');

const getTeamPlacing = async (req, res) => {
    try {
        res.json(await QuizNight.findScoreForTeam(req.params.teamName, req.quizPin));
    } catch(e) {
        throw e;
    }
};

const getScores = async (req, res) => {
    try {
        const quizNight = await QuizNight.findByQuizPin(req.quizPin);
        res.json(quizNight.teams.map(x => {
            return {
                roundPoints: x.roundPoints,
                numberOfCorrectQuestions: x.numberOfCorrectQuestions,
                teamName: x.teamName
            };
        }));
    } catch (e) {
        throw e;
    }
};

module.exports = {getTeamPlacing, getScores};