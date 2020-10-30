const {QuizNight} = require("../persistence/models");

/**
 * Generates an unique quizPin and saves it as an empty quiznight to the database
 */
const createQuizNightHandler = async (req, res) => {
    try {
        const quizNight = await QuizNight.createEmptyQuizNight();
        await quizNight.save();
        res.json({
            quizPin: quizNight._id
        });
    } catch (e) {
        throw e;
    }
};

const patchQuizNightHandler = async (req, res) => {
    try {
        const quizNight = await QuizNight.findByQuizPin(req.quizPin);
        if (req.body.isOpenForApplication != null) {
            quizNight.isOpenForApplication = req.body.isOpenForApplication;
        }
        if (req.body.isActive != null) {
            quizNight.isActive = req.body.isActive;
        }
        await quizNight.save();

        res.send('ok');
    } catch (e) {
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

module.exports = {createQuizNightHandler, closeApplicationPeriodHandler: patchQuizNightHandler, getScores};