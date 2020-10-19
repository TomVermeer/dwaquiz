const WsEvents = require("websocket-events");

const Roles = require("../roles");
const {getMaster} = require("../setupWebSockets");


const subscribeScoreBoardToQuiz = (pin) => {
    const masterSocket = getMaster(pin);
    masterSocket.sendJson({type: WsEvents.ON_QUIZ_NIGHT_START, payload: pin})
}

const applyScoreBoardHandler = async (req, res) => {
    try {
        console.log(req.quizPin)
        const quizPin = req.quizPin;
        req.session.quizPin = quizPin;
        req.session.role = Roles.SCOREBOARD;
        subscribeScoreBoardToQuiz(quizPin);
        res.send('ok');
    } catch (e) {
        throw e;
    }
}

module.exports = {applyScoreBoardHandler};