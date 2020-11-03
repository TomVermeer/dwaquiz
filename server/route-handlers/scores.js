const {QuizNight} = require('../persistence/models');

const getTeamPlacing = async (req, res, next) => {
    try {
        res.json(await QuizNight.findScoreForTeam(req.params.teamName, req.quizPin));
    } catch(e) {
        next(e);
    }
};

const getScores = async (req, res, next) => {
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
        next(e);
    }
};

module.exports = {getTeamPlacing, getScores};