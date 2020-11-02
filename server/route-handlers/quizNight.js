const {getTeams, getScoreBoards} = require("../setupWebSockets");
const {WsEvents} = require("shared-constants");

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
            if(!quizNight.isActive) {
                sendQuizEndedToClients(req.quizPin)
            }
        }
        await quizNight.save();

        res.json({});
    } catch (e) {
        throw e;
    }
};

const sendQuizEndedToClients = (quizPin) => {
    getTeams(quizPin).forEach(team => {
        team.sendJson({type: WsEvents.ON_QUIZ_NIGHT_END});
    });
    getScoreBoards(quizPin).forEach(ScoreBoard => {
        ScoreBoard.sendJson({type: WsEvents.ON_QUIZ_NIGHT_END});
    })
}

module.exports = {createQuizNightHandler, closeApplicationPeriodHandler: patchQuizNightHandler};