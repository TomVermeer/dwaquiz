const {getQuizNight} = require('../helpers/quizNight');
const { doesPinExist } = require("../helpers/quizPin");
const { QuizNight } = require("../models");
const Roles = require("../roles");

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
    } while (await doesPinExist(quizPin));
    return quizPin;
};

/**
 * Generates an unique quizPin and saves it as an empty quiznight to the database
 */
const createQuizNightHandler = async (req, res) => {
    try {
        const pin = await getNewQuizPin();
        const quizNight = new QuizNight({
            _id: pin,
            teams: [],
            rounds: []
        });
        await quizNight.save();
        req.session.role = Roles.QUIZ_MASTER;
        req.session.quizPin = pin;
        res.json({
            quizPin: pin
        });
    } catch (e) {
        throw e;
    }
};

const changeOpenForApplicationHandler = async (req, res) => {
    try {
        const quizNight = await getQuizNight(req.quizPin);
        quizNight.isOpenForApplication = req.body.isOpenForApplication;
        await quizNight.save();

        res.send('ok');
    } catch(e) {
        throw e;
    }
};

module.exports = { createQuizNightHandler, closeApplicationPeriodHandler: changeOpenForApplicationHandler };