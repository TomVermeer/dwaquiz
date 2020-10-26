const {getQuizNight} = require("../helpers/quizNight");
const {getTeams, getScoreBoards} = require('../setupWebSockets');
const WsEvents = require('websocket-events');
const {Question} = require('../models');


const getQuestion = questionId => Question.findOne({_id: questionId}).exec();

const getParticipatingTeamNames = quizNight => quizNight.teams.map(x => x.teamName);

const saveQuestioning = async (quizPin, roundNumber, questionId) => {

    const questionPromise = getQuestion(questionId);
    const quizNight = await getQuizNight(quizPin);
    const round = quizNight.rounds[roundNumber - 1];
    const teams = getParticipatingTeamNames(quizNight);

    const question = await questionPromise;
    teams.forEach(teamName => {
        const questioning = {
            teamName: teamName,
            question: question.question,
            questionId: question._id
        };
        round.questionings.push(questioning);
    });
    await quizNight.save();
    return {roundNumber, questionNumber: round.questionings.length / quizNight.teams.length};
};

const notifyTeams = (quizPin, onQuestionEvent) =>
    getTeams(quizPin)
        .forEach(team => {
            team.sendJson(onQuestionEvent);
        });

const notifyScoreboard = (quizPin, onQuestionEvent) =>
    getScoreBoards(quizPin)
        .forEach(scoreboard => {
            scoreboard.sendJson(onQuestionEvent);
        });

const createQuestioning = async (req, res) => {
    try {
        const {roundNumber, questionNumber} = await saveQuestioning(req.quizPin, req.round, req.body.questionId);
        const onQuestionEvent = {type: WsEvents.ON_QUESTION, roundNumber, questionNumber};
        notifyTeams(req.quizPin, onQuestionEvent);
        notifyScoreboard(req.quizPin, onQuestionEvent);
        res.send('ok');
    } catch (e) {
        throw e;
    }
};

module.exports = {createQuestioning};