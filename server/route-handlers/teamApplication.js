const HttpErrors = require("../httpErrors");
const {WsEvents} = require("shared-constants");
const {getMaster, getTeam} = require("../setupWebSockets");
const {QuizNight} = require('../persistence/models');

const sendTeamApplicationToMaster = (pin) => {
    const masterSocket = getMaster(pin);
    if (masterSocket) {
        masterSocket.sendJson({type: WsEvents.ON_TEAM_APPLY});
    }
};

const saveTeamApplication = async (quizPin, teamName) => {
    const quizNight = await QuizNight.findByQuizPin(quizPin);
    quizNight.teamApplications.push(teamName);
    await quizNight.save();
};

const applyTeamHandler = async (req, res, next) => {
    try {
        const quizPin = req.quizPin;
        const teamName = req.body.teamName;
        if (await QuizNight.isQuizNightOpenForApplications(quizPin)) {
            await saveTeamApplication(quizPin, teamName);
            sendTeamApplicationToMaster(quizPin);
            res.json({});
        } else {
            res.sendError(HttpErrors.QUIZ_NIGHT_DOES_NOT_ACCEPT_APPLICATIONS);
        }

    } catch (e) {
        next(e);
    }
};

const sendTeamRejected = (req, teamName) => {
    const teamSocket = getTeam(req.quizPin, teamName);
    if (teamSocket) {
        teamSocket.sendJson({type: WsEvents.ON_TEAM_REJECTED});
        teamSocket.close(); // Clean up data that might interfere with re-applying
    }
};

const removeTeamApplication = async (quizPin, teamName) => {
    const quizNight = await QuizNight.findByQuizPin(quizPin);
    quizNight.teamApplications = quizNight.teamApplications.filter(x => x !== teamName);
    await quizNight.save();
};

const rejectTeamHandler = async (req, res, next) => {
    try {
        const teamName = req.params.teamName;
        await removeTeamApplication(req.quizPin, teamName);
        sendTeamRejected(req, teamName);
        res.json({});
    } catch (e) {
        next(e);
    }
};

const getTeamApplicationsHandler = async (req, res, next) => {
    try {
        const quizNight = await QuizNight.findByQuizPin(req.quizPin);
        res.send(quizNight.teamApplications);
    } catch (e) {
        next(e);
    }
};

module.exports = {applyTeamHandler, rejectTeamHandler, getTeamApplicationsHandler};