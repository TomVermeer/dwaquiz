const { QuizNight } = require("../models");

// https://stackoverflow.com/a/58509734/7736404
const generateQuizPin = (length) => Math.floor(Math.random() * (9 * Math.pow(10, length - 1))) + Math.pow(10, length - 1);

const doesPinAlreadExist = async (quizPin) => await QuizNight.findOne({_id: quizPin}).exec() != null;

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
    try {
        const pin = await getNewQuizPin();
        const quizNight = new QuizNight({
            _id: pin,
            teams: [],
            rounds: []
        });
        await quizNight.save();

        res.json({
            quizPin: quizNight._id
        });
    } catch (e) {
        console.log('ERROR: ', e);
        throw e;
    }
};

module.exports = { createQuizNightHandler };