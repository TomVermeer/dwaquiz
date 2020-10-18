const {QuizNight} = require('../models');

const getQuizNight = (quizPin) => QuizNight.findOne({_id: quizPin}).exec();

module.exports = {getQuizNight};