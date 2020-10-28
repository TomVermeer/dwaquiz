const {getMaster} = require("../setupWebSockets");
const {getTeams, getScoreBoards} = require('../setupWebSockets');
const WsEvents = require('websocket-events');
const {Question, Questioning, QuizNight} = require('../models');


const getQuestion = questionId => Question.findOne({_id: questionId}).exec();

const getParticipatingTeamNames = quizNight => quizNight.teams.map(x => x.teamName);

const saveQuestioning = async (quizPin, roundNumber, questionId) => {

    const questionPromise = getQuestion(questionId);
    const quizNight = await QuizNight.findByQuizPin(quizPin);
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
        const questioning = await Questioning
            .findOne({
                quizPin: req.quizPin,
                teamName,
                roundNumber: req.round,
                questionNumber: Number(req.params.questionNumber)
            })
            .populate('question')
            .exec();
        res.json({question: questioning.question.question});
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
                questionNumber: Number(req.params.questionNumber),
                teamName: req.params.teamName
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
        const questionings = await findQuestionings(req);
        await Promise.all(
            questionings.map(async questioning => {
                const grading = req.body.find(x => x.teamName === questioning.teamName);
                questioning.isCorrect = grading.isCorrect;
                await questioning.save();
            })
        );
        res.send('ok');
    } catch (e) {
        throw e;
    }
};

const findQuestionings = (req) =>
    Questioning.find({
        questionNumber: Number(req.params.questionNumber),
        quizPin: req.quizPin,
        roundNumber: req.round
    }).exec();

const closeQuestioning = async (req, res) => {
    try {
        const questionings = await findQuestionings(req);
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

const getAnswers = async (req, res) => {
    try {
        const questionings = await findQuestionings(req);
        res.json(questionings.map(x => {
            return {
                teamName: x.teamName,
                isCorrect: x.isCorrect,
                answer: x.answer
            };
        }));
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
    closeQuestioning,
    getAnswers
};