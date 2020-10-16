const WsEvents = require("websocket-events");
const {QuizNight} = require('../models');
const {getTeam} = require('../setupWebSockets');

const addTeamHandler = async (req, res) => {
    try {
        const quizPin = req.quizPin;
        const teamName = req.body.teamName;

        const quizNight = await QuizNight.findOne({_id: quizPin}).exec();
        quizNight.teams.push({
            teamName
        });
        await quizNight.save();
        const team = getTeam(quizPin, teamName);
        team.sendJson({type: WsEvents.ON_TEAM_APPROVAL, payload: teamName});
        res.send('ok');
    } catch(e) {
        throw e;
    }
};

module.exports = {addTeamHandler};