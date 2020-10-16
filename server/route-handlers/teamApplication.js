const WsEvents = require("websocket-events");

const Roles = require("../roles");
const {getMaster, getTeam} = require("../setupWebSockets");

const sendTeamApplicationToMaster = (pin, teamName) => {
    const masterSocket = getMaster(pin);
    masterSocket.sendJson({type: WsEvents.ON_TEAM_APPLY, payload: teamName});
};

const applyTeamHandler = async (req, res) => {
    try {
        const quizPin = Number(req.quizPin);
        const teamName = req.body.teamName;
        req.session.quizPin = quizPin;
        req.session.role = Roles.TEAM;
        req.session.teamName = teamName;
        sendTeamApplicationToMaster(quizPin, teamName);
        res.send('ok');
    } catch (e) {
        throw e;
    }
};

const rejectTeamHandler = async (req, res) => {
    try {
        const teamSocket = getTeam(req.quizPin, req.params.teamName);
        teamSocket.sendJson({type: WsEvents.ON_TEAM_REJECTED});
        teamSocket.close(); // Clean up data that might interfere with re-applying
        res.send('ok');
    } catch(e) {
        throw e;
    }
};

module.exports = {applyTeamHandler, rejectTeamHandler};