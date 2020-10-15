const mongoose = require('mongoose');

const questioningsSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    question: { type: String, required: true },
    answer: String,
    isCorrect: { type: Boolean, default: false }
});

const teamSchema = mongoose.Schema({
    teamName: { type: String, required: true },
    numberOfCorrectQuestions: { type: Number, default: 0 },
    roundPoints: { type: Number, default: 0 },
});

const roundSchema = mongoose.Schema({
    chosenCategories: { type: [String], required: true },
    roundNumber: { type: Number, default: 1 },
    questionings: { type: [questioningsSchema], required: true },
});

const quizNightSchema = mongoose.Schema({
    _id: Number, // quizPin
    teams: { type: [teamSchema], required: true },
    rounds: { type: [roundSchema], required: true },
});

const questionSchema = mongoose.Schema({
    _id: String, // question
    category: { type: String, required: true },
    answer: { type: String, required: true },
});

const QuizNight = mongoose.model('QuizNight', quizNightSchema);
const Question = mongoose.model('Question', questionSchema);

module.exports = { quizNightSchema, questionSchema, QuizNight, Question };