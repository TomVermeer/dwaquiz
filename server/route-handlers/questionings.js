const {getQuizNight} = require("../helpers/quizNight");
const {getTeams} = require('../setupWebSockets');
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
};

const notifyTeams = quizPin =>
    getTeams(quizPin)
        .forEach(team => {
            team.sendJson({type: WsEvents.ON_QUESTION});
        });

const createQuestioning = async (req, res) => {
    try {
        await saveQuestioning(req.quizPin, req.round, req.body.questionId);
        notifyTeams(req.quizPin);
        res.send('ok');
    } catch (e) {
        throw e;
    }
};

module.exports = {createQuestioning};