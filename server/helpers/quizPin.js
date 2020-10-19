const {QuizNight} = require('../models');

/**
 * Checks whether or not a pin exists
 * @param {Number} quizPin 
 * @return {Boolean}
 */
const doesPinExist = async (quizPin) => await QuizNight.findOne({_id: quizPin}).exec() != null

module.exports = {doesPinExist}