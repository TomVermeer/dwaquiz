const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: {type: String, required: true},
    category: { type: String, required: true },
    answer: { type: String, required: true },
    orderNumber: {type: Number, required: true}
});

const questioningsSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', require: true},
    answer: String,
    isCorrect: { type: Boolean, default: false },
    questionNumber: {type: Number, required: true},
    roundNumber: {type: Number, required: true},
    quizPin: {type: Number, ref: 'QuizNight', required: true}
});

const teamSchema = mongoose.Schema({
    teamName: { type: String, required: true },
    numberOfCorrectQuestions: { type: Number, default: 0 },
    roundPoints: { type: Number, default: 0 },
});

const roundSchema = mongoose.Schema({
    chosenCategories: { type: [String], required: true },
    roundNumber: { type: Number, default: 1 },
    questionings: { type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Questioning'}], required: true },
});

const quizNightSchema = mongoose.Schema({
    _id: Number, // quizPin
    teamApplications: {type: [String], required: true},
    teams: { type: [teamSchema], required: true },
    rounds: { type: [roundSchema], required: true },
    isOpenForApplication: {type: Boolean, default: true}
});

const Question = mongoose.model('Question', questionSchema);
const QuizNight = mongoose.model('QuizNight', quizNightSchema);
const Questioning = mongoose.model('Questioning', questioningsSchema);

module.exports = { quizNightSchema, questionSchema, questioningsSchema, QuizNight, Question, Questioning };