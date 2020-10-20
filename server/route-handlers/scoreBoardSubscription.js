const WsEvents = require("websocket-events");

const Roles = require("../roles");

const applyScoreBoardHandler = async (req, res) => {
    try {
        console.log(req.quizPin, ": in handler")
        const quizPin = req.quizPin;
        req.session.quizPin = quizPin;
        req.session.role = Roles.SCOREBOARD;
        res.send('ok');
    } catch (e) {
        throw e;
    }
}

module.exports = {applyScoreBoardHandler};