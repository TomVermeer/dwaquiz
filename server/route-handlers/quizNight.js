const { QuizNight } = require("../models");

const generateQuizPin = (length) => Math.floor(Math.random() * (9 * Math.pow(10, length - 1))) + Math.pow(10, length - 1);

const doesPinAlreadExist = async (quizPin) => {
    const pinInDb = await QuizNight.findOne({_id: quizPin}).exec();
    console.log('pin in db: ', pinInDb, ' generated one: ', quizPin);
    return pinInDb != null;
}

const getNewQuizPin = async (length = 6) => {
    let quizPin;
    let additionalLength = 0;
    do {
        quizPin = generateQuizPin(length + additionalLength);
        additionalLength++
    } while (await doesPinAlreadExist(quizPin));
    return quizPin;
}

const createQuizNightHandler = async (req, res) => {
    const pin = await getNewQuizPin();
    console.log('final pin: ', pin)
    res.json({
        quizPin: pin
    }); // TODO generate pin and save to db
};

module.exports = { createQuizNightHandler };