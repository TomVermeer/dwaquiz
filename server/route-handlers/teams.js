const e = require("express");
const WsEvents = require("websocket-events");
const { getQuizNight } = require("../helpers/quizNight");
const { QuizNight } = require("../models");
const { getTeam, getScoreBoards } = require("../setupWebSockets");

const addTeamHandler = async (req, res) => {
  try {
    const quizPin = req.quizPin;
    const teamName = req.body.teamName;

    const quizNight = await QuizNight.findOne({ _id: quizPin }).exec();
    quizNight.teams.push({
      teamName,
    });
    await quizNight.save();
    const team = getTeam(quizPin, teamName);
    team.sendJson({ type: WsEvents.ON_TEAM_APPROVAL, payload: teamName });
    const scoreboards = getScoreBoards(quizPin);
    scoreboards.forEach(scoreboard => scoreboard.sendJson({
      type: WsEvents.ON_TEAM_APPROVAL,
      payload: teamName,
    }));
    res.send("ok");
  } catch (e) {
    throw e;
  }
};

const getTeamsHandler = async (req, res) => {
  try {
    const quizNight = await getQuizNight(req.quizPin);
    const teamNames = quizNight.teams.map((x) => x.teamName);
    res.json(teamNames);
  } catch (e) {
    throw e;
  }
};

module.exports = { addTeamHandler, getTeamsHandler };
