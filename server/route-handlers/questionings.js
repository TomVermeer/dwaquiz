const HttpErrors = require("../httpErrors");
const {NUMBER_OF_QUESTIONS_IN_ROUND, WsEvents} = require("shared-constants");
const {calculateScoreFromQuestioningsInRound} = require('../domain/score');
const {getMaster} = require("../setupWebSockets");
const {getTeams, getScoreBoards} = require('../setupWebSockets');
const {Questioning, QuizNight} = require('../persistence/models');

const findQuestionings = (req) =>
    Questioning.findMultipleByQuestionNumber(req.quizPin, req.round, Number(req.params.questionNumber)).exec();

    const saveQuestioning = async (quizPin, roundNumber, questionId) => {
    const quizNight = await QuizNight.findByQuizPin(quizPin);
    const questionNumber = await quizNight.askQuestion(roundNumber, questionId);
    await quizNight.save();
    return questionNumber;
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

const createQuestioning = async (req, res, next) => {
    try {
        const roundNumber = req.round;
        const questionNumber = await saveQuestioning(req.quizPin, req.round, req.body.questionId);
        const onQuestionEvent = {type: WsEvents.ON_QUESTION, roundNumber, questionNumber};
        notifyTeams(req.quizPin, onQuestionEvent);
        notifyScoreboard(req.quizPin, onQuestionEvent);
        res.send({quizPin: req.quizPin, roundNumber, questionNumber});
    } catch (e) {
        next(e);
    }
};

const getQuestioningForTeam = async (req, res, next) => {
    try {
        const teamName = req.params.teamName;
        const question = await Questioning
            .findQuestionForTeam(req.quizPin, req.round, Number(req.params.questionNumber), teamName);
        res.json(question);
    } catch (e) {
        next(e);
    }
};

const getQuestioning = async (req, res, next) => {
    try {
        const question = await Questioning
            .findQuestion(req.quizPin, req.round, Number(req.params.questionNumber));
        res.json({question: question.question, answer: question.answer, category: question.category});
    } catch (e) {
        next(e);
    }
};

const answerQuestioning = async (req, res, next) => {
    try {
        const questioning = await Questioning
            .findTeamQuestioning(req.quizPin, req.round, Number(req.params.questionNumber), req.params.teamName);
        if (questioning.isOpen) {
            questioning.answer = req.body.answer;
            questioning.isCorrect = false;
            await questioning.save();
            getMaster(req.quizPin).sendJson({type: WsEvents.ON_ANSWER});
            getScoreBoards(req.quizPin).forEach((x) => {
                x.sendJson({type: WsEvents.ON_ANSWER});
            });
            res.json({});
        } else {
            res.sendError(HttpErrors.QUESTION_CLOSED);
        }

    } catch (e) {
        next(e);
    }
};

const calculateScores = async (quizPin, roundNumber) => {
    const allQuestioningsInRound = await Questioning.findForRound(quizPin, roundNumber);
    return calculateScoreFromQuestioningsInRound(allQuestioningsInRound);
};

const gradeQuestioning = async (req, res, next) => {
    try {
        const questionings = await findQuestionings(req);
        await Promise.all(
            questionings.map(questioning => {
                const grading = req.body.find(x => x.teamName === questioning.teamName);
                questioning.isCorrect = grading.isCorrect;
                return questioning.save();
            })
        );
        if(Number(req.params.questionNumber) === NUMBER_OF_QUESTIONS_IN_ROUND) {
            const quizNight = await QuizNight.findByQuizPin(req.quizPin);
            await quizNight.saveScoresOfRoundToTeams(await calculateScores(req.quizPin, req.round));
        }
        getScoreBoards(req.quizPin).forEach((x) => {
            x.sendJson({type: WsEvents.ON_QUESTION_GRADED, payload: {roundNumber: req.round, questionNumber: Number(req.params.questionNumber)}});
        });
        res.json({});
    } catch (e) {
        next(e);
    }
};


const closeQuestioning = async (req, res, next) => {
    try {
        const questionings = await findQuestionings(req);
        await Promise.all(
            questionings.map(questioning => {
                questioning.isOpen = Boolean(req.body.isOpen);
                return questioning.save();
            })
        );
        getTeams(req.quizPin)
            .forEach(team =>
                team.sendJson({type: WsEvents.ON_QUESTION_CLOSE})
            );
        res.json({});
    } catch (e) {
        next(e);
    }
};

const getAnswers = async (req, res, next) => {
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
        next(e);
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