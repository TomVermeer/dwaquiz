const mongoose = require('mongoose');
const {questioningsSchema} = require('./schemas/questioningsSchema');
const {quizNightSchema, QuizNight} = require('./schemas/quizNightSchema');
const {questionSchema} = require('./schemas/questionSchema');


const Question = mongoose.model('Question', questionSchema);
const Questioning = mongoose.model('Questioning', questioningsSchema);

module.exports = {quizNightSchema, questionSchema, questioningsSchema, QuizNight, Question, Questioning};