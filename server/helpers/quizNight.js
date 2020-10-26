const {QuizNight} = require('../models');

const getQuizNight = (quizPin) => QuizNight.findOne({_id: quizPin}).exec();

const isQuizNightOpenForApplications = async (quizPin) => {
  const quizNight = await getQuizNight(quizPin);
  return quizNight && quizNight.isOpenForApplication;
};

module.exports = {getQuizNight, isQuizNightOpenForApplications};