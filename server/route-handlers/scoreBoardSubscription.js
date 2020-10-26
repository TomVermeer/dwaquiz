const WsEvents = require("websocket-events");

const Roles = require("../roles");

const applyScoreBoardHandler = async (req, res) => {
    try {
        const quizPin = req.quizPin;
        req.session.quizPin = quizPin;
        req.session.role = Roles.SCOREBOARD;
        res.json('ok');
    } catch (e) {
        throw e;
    }
}

module.exports = {applyScoreBoardHandler};