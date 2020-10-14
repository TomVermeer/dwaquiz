const Roles = require("../roles");
const { getMaster } = require("../setupWebSockets");

const sendTeamApplicationToMaster = (pin, teamName) => {
    const masterSocket = getMaster(pin);
    // TODO extract websocket messages to shared project
    masterSocket.sendJson({type: 'ON_TEAM_APPLY', payload: teamName});
}

const applyTeamHandler = async (req, res) => {
    try {
        const quizPin = Number(req.quizPin);
        const teamName = req.body.teamName;
        req.session.quizPin = quizPin;
        req.session.role = Roles.TEAM;
        sendTeamApplicationToMaster(quizPin, teamName);
        res.send('ok');
    } catch (e) {
        throw e;
    }
}

module.exports = { applyTeamHandler };