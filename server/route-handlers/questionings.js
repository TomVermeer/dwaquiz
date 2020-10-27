const {getMaster} = require("../setupWebSockets");
const {getQuizNight} = require("../helpers/quizNight");
const {getTeams, getScoreBoards} = require('../setupWebSockets');
const WsEvents = require('websocket-events');
const {Question, Questioning} = require('../models');


const getQuestion = questionId => Question.findOne({_id: questionId}).exec();

const getParticipatingTeamNames = quizNight => quizNight.teams.map(x => x.teamName);

const saveQuestioning = async (quizPin, roundNumber, questionId) => {

    const questionPromise = getQuestion(questionId);
    const quizNight = await getQuizNight(quizPin);
    const round = quizNight.rounds[roundNumber - 1];
    const teams = getParticipatingTeamNames(quizNight);
    const questionNumber = (round.questionings.length / quizNight.teams.length) + 1;

    const question = await questionPromise;
    const questioningIdPromises = teams.map(teamName => {
        const questioning = new Questioning({
            teamName: teamName,
            question: question._id,
            quizPin,
            questionNumber,
            roundNumber: roundNumber
        });
        return questioning.save();
    });
    const questioningsIds = await Promise.all(questioningIdPromises);
    round.questionings = round.questionings.concat(questioningsIds);
    await quizNight.save();
    return {roundNumber, questionNumber};
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
        res.send({quizPin: req.quizPin, roundNumber, questionNumber});
    } catch (e) {
        throw e;
    }
};

const getQuestioningForTeam = async (req, res) => {
    try {
        const teamName = req.params.teamName;
        const {question} = await Questioning
            .findOne({
                quizPin: req.quizPin,
                teamName,
                roundNumber: req.round,
                questionNumber: Number(req.params.questionNumber)
            })
            .populate('question')
            .exec();
        res.json({question: question.question});
    } catch (e) {
        throw e;
    }
};

const getQuestioning = async (req, res) => {
    try {
        const {question} = await Questioning
            .findOne({
                quizPin: req.quizPin,
                roundNumber: req.round,
                questionNumber: Number(req.params.questionNumber)
            })
            .populate('question')
            .exec();
        res.json({question: question.question, answer: question.answer, category: question.category});
    } catch (e) {
        throw e;
    }
};

const answerQuestioning = async (req, res) => {
    try {
        const questioning = await Questioning
            .findOne({
                quizPin: req.quizPin,
                roundNumber: req.round,
                questionNumber: Number(req.params.questionNumber)
            })
            .exec();
        if (questioning.isOpen) {
            questioning.answer = req.body.answer;
            questioning.isCorrect = false;
            await questioning.save();
            getMaster(req.quizPin).sendJson({type: WsEvents.ON_ANSWER});
            res.send('ok');
        } else {
            res.status(400).send({error: 'This question has been closed and no longer accepts answers'});
        }

    } catch (e) {
        throw e;
    }
};

const gradeQuestioning = async (req, res) => {
    try {
        // TODO
    } catch (e) {
        throw e;
    }
};

const closeQuestioning = async (req, res) => {
    try {
        const questionings = await Questioning.find({
            questionNumber: Number(req.params.questionNumber),
            quizPin: req.quizPin,
            roundNumber: req.round
        }).exec();
        await Promise.all(
            questionings.map(async questioning => {
                questioning.isOpen = Boolean(req.body.isOpen);
                await questioning.save();
            })
        );
        getTeams(req.quizPin)
            .forEach(team =>
                team.sendJson({type: WsEvents.ON_QUESTION_CLOSE})
            );

        res.send('ok');
    } catch (e) {
        throw e;
    }
};

module.exports = {
    createQuestioning,
    getQuestioningForTeam,
    getQuestioning,
    answerQuestioning,
    gradeQuestioning,
    closeQuestioning
};