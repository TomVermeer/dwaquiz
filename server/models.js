const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: {type: String, required: true},
    category: {type: String, required: true},
    answer: {type: String, required: true},
    orderNumber: {type: Number, required: true}
});

questionSchema.statics.findAllCategories = function () {
    return this.find({}, {category: true})
        .distinct('category')
        .exec();
};

questionSchema.statics.findById = function (id) {
    return this.findOne({_id: id})
        .exec()
};

questionSchema.statics.findSuggestedQuestionsForQuizNight = async function (quizPin, roundNumber, offset, limit) {
    const quizNight = await QuizNight.findByQuizPin(quizPin);
    const categories = quizNight.findChosenCategories(roundNumber);
    const alreadyAskedQuestions = await quizNight.findAskedQuestions();
    return this.find({
        category: {$in: categories},
        question: {$nin: alreadyAskedQuestions}
    }, {
        category: true,
        question: true,
        _id: true
    })
        .sort('orderNumber')
        .skip(Number(offset))
        .limit(Number(limit))
        .exec();
};

const questioningsSchema = new mongoose.Schema({
    teamName: {type: String, required: true},
    question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question', require: true},
    answer: String,
    isCorrect: {type: Boolean, default: false},
    questionNumber: {type: Number, required: true},
    roundNumber: {type: Number, required: true},
    quizPin: {type: Number, ref: 'QuizNight', required: true},
    isOpen: {type: Boolean, default: true}
});

questioningsSchema.statics.findByQuestionNumber = function (quizPin, roundNumber, questionNumber) {
    return this.find({
        questionNumber,
        quizPin,
        roundNumber
    });
};

questioningsSchema.statics.findTeamQuestioning = function (quizPin, roundNumber, questionNumber, teamName) {
    return this.findOne({
        questionNumber,
        quizPin,
        roundNumber,
        teamName
    }).exec();
};

const teamSchema = mongoose.Schema({
    teamName: {type: String, required: true},
    numberOfCorrectQuestions: {type: Number, default: 0},
    roundPoints: {type: Number, default: 0},
});

const roundSchema = mongoose.Schema({
    chosenCategories: {type: [String], required: true},
    roundNumber: {type: Number, default: 1},
    questionings: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Questioning'}], required: true},
});

const quizNightSchema = mongoose.Schema({
    _id: Number, // quizPin
    teamApplications: {type: [String], required: true},
    teams: {type: [teamSchema], required: true},
    rounds: {type: [roundSchema], required: true},
    isOpenForApplication: {type: Boolean, default: true}
});

quizNightSchema.statics.findByQuizPin = function (quizPin) {
    return this.findOne({_id: quizPin})
        .exec();
};

quizNightSchema.statics.isQuizNightOpenForApplications = async function (quizPin) {
    const quizNight = await this.findByQuizPin(quizPin);
    return quizNight && quizNight.isOpenForApplication;
};

quizNightSchema.statics.doesPinExist = async function (quizPin) {
    return await this.findByQuizPin(quizPin) != null;
};

// https://stackoverflow.com/a/58509734/7736404
const generateQuizPin = (length) => Math.floor(Math.random() * (9 * Math.pow(10, length - 1))) + Math.pow(10, length - 1);

/**
 * Generates a unique quiz pin with a minimal length
 * @param {Number} length minimal length the generated quizPin must have
 * @return {Number} quizpin that is not yet present in database
 */
const getNewQuizPin = async (length = 6) => {
    let quizPin;
    let additionalLength = 0;
    do {
        quizPin = generateQuizPin(length + additionalLength);
        additionalLength++
    } while (await QuizNight.doesPinExist(quizPin));
    return quizPin;
};

quizNightSchema.statics.createEmptyQuizNight = async function () {
    return new QuizNight({
        _id: await getNewQuizPin(),
        teams: [],
        rounds: [],
    });
};

quizNightSchema.methods.findHighestRoundNumber = function () {
    if (this.rounds.length !== 0) {
        return Math.max(...
            (this.rounds.map(x => x.roundNumber)));
    } else {
        return 0;
    }
};

quizNightSchema.methods.findNewRoundNumber = function () {
    return this.findHighestRoundNumber() + 1;
};

quizNightSchema.methods.startRound = function (chosenCategories) {
    const roundNumber = this.findNewRoundNumber();
    this.rounds.push({
        roundNumber,
        chosenCategories,
        questionings: []
    });
    return roundNumber;
};

quizNightSchema.methods.addTeam = function (teamName) {
    this.teams.push({teamName});
};

quizNightSchema.methods.findChosenCategories = function (roundNumber) {
    return this.rounds.find(x => x.roundNumber === roundNumber).chosenCategories;
};

quizNightSchema.methods.findAskedQuestions = function () {
    return QuizNight.find({_id: this._id})
        .distinct('round.questionings.question')
        .exec();
};

quizNightSchema.methods.getParticipatingTeamNames = function () {
    return this.teams.map(x => x.teamName);
};

quizNightSchema.methods.getCurrentQuestionNumber = function (roundNumber) {
    return this.rounds[roundNumber - 1].questionings.length / this.teams.length;
};

quizNightSchema.methods.askQuestion = async function (roundNumber, questionId) {
    const questionPromise = Question.findById(questionId);
    const teams = this.getParticipatingTeamNames();
    const questionNumber = this.getCurrentQuestionNumber(roundNumber) + 1;
    const round = this.rounds[roundNumber - 1];
    const question = await questionPromise;
    const questioningIdPromises = teams.map(teamName => {
        const questioning = new Questioning({
            teamName: teamName,
            question: question._id,
            quizPin: this._id,
            questionNumber,
            roundNumber: roundNumber
        });
        return questioning.save();
    });
    const questioningsIds = await Promise.all(questioningIdPromises);
    round.questionings = round.questionings.concat(questioningsIds);
    await this.save();
    return questionNumber;
};

const Question = mongoose.model('Question', questionSchema);
const QuizNight = mongoose.model('QuizNight', quizNightSchema);
const Questioning = mongoose.model('Questioning', questioningsSchema);

module.exports = {quizNightSchema, questionSchema, questioningsSchema, QuizNight, Question, Questioning};