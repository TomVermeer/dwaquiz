const WsEvents = require("websocket-events");

const Roles = require("../roles");
const {getMaster, getTeam} = require("../setupWebSockets");
const {getQuizNight, isQuizNightOpenForApplications} = require("../helpers/quizNight");

const sendTeamApplicationToMaster = (pin) => {
    const masterSocket = getMaster(pin);
    masterSocket.sendJson({type: WsEvents.ON_TEAM_APPLY});
};

const upgradeSessionForTeam = (req, quizPin, teamName) => {
    req.session.quizPin = quizPin;
    req.session.role = Roles.TEAM;
    req.session.teamName = teamName;
};

const saveTeamApplication = async (quizPin, teamName) => {
    const quizNight = await getQuizNight(quizPin);
    quizNight.teamApplications.push(teamName);
    await quizNight.save();
};

const applyTeamHandler = async (req, res) => {
    try {
        const quizPin = req.quizPin;
        const teamName = req.body.teamName;
        if(await isQuizNightOpenForApplications(quizPin)) {
            await saveTeamApplication(quizPin, teamName);
            upgradeSessionForTeam(req, quizPin, teamName);
            sendTeamApplicationToMaster(quizPin);
            res.send('ok');
        } else {
            res.status(400).json({error: 'The quiz-night is not accepting applications'});
        }

    } catch (e) {
        throw e;
    }
};

const sendTeamRejected = (req, teamName) => {
    const teamSocket = getTeam(req.quizPin, teamName);
    teamSocket.sendJson({type: WsEvents.ON_TEAM_REJECTED});
    teamSocket.close(); // Clean up data that might interfere with re-applying
};

const removeTeamApplication = async (quizPin, teamName) => {
    const quizNight = await getQuizNight(quizPin);
    quizNight.teamApplications = quizNight.teamApplications.filter(x => x !== teamName);
    await quizNight.save();
};

const rejectTeamHandler = async (req, res) => {
    try {
        const teamName = req.params.teamName;
        await removeTeamApplication(req.quizPin, teamName);
        sendTeamRejected(req, teamName);
        res.send('ok');
    } catch (e) {
        throw e;
    }
};

const getTeamApplicationsHandler = async (req, res) => {
    try {
        const quizNight = await getQuizNight(req.quizPin);
        res.send(quizNight.teamApplications);
    } catch (e) {
        throw e;
    }
};

module.exports = {applyTeamHandler, rejectTeamHandler, getTeamApplicationsHandler};