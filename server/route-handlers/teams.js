const {WsEvents} = require("shared-constants");
const {QuizNight} = require("../persistence/models");
const {getTeam, getScoreBoards} = require("../setupWebSockets");

const notifyClientsOfNewTeam = (quizPin, teamName) => {
    const team = getTeam(quizPin, teamName);
    team.sendJson({type: WsEvents.ON_TEAM_APPROVAL, payload: teamName});
    const scoreboards = getScoreBoards(quizPin);
    scoreboards.forEach(scoreboard => scoreboard.sendJson({
        type: WsEvents.ON_TEAM_APPROVAL,
        payload: teamName,
    }));
};

const addTeamHandler = async (req, res) => {
    try {
        const quizPin = req.quizPin;
        const teamName = req.body.teamName;

        const quizNight = await QuizNight.findByQuizPin(quizPin);
        quizNight.addTeam(teamName);
        await quizNight.save();

        notifyClientsOfNewTeam(quizPin, teamName);
        res.json({});
    } catch (e) {
        throw e;
    }
};

const getTeamsHandler = async (req, res) => {
    try {
        const quizNight = await QuizNight.findByQuizPin(req.quizPin);
        const teamNames = quizNight.teams.map((x) => x.teamName);
        res.json(teamNames);
    } catch (e) {
        throw e;
    }
};

module.exports = {addTeamHandler, getTeamsHandler};
