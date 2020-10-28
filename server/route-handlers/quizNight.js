const { QuizNight } = require("../persistence/models");

/**
 * Generates an unique quizPin and saves it as an empty quiznight to the database
 */
const createQuizNightHandler = async (req, res) => {
    try {
        const quizNight = await QuizNight.createEmptyQuizNight();
        await quizNight.save();
        res.json({
            quizPin: quizNight._id
        });
    } catch (e) {
        throw e;
    }
};

const changeOpenForApplicationHandler = async (req, res) => {
    try {
        const quizNight = await QuizNight.findByQuizPin(req.quizPin);
        quizNight.isOpenForApplication = req.body.isOpenForApplication;
        await quizNight.save();

        res.send('ok');
    } catch(e) {
        throw e;
    }
};

module.exports = { createQuizNightHandler, closeApplicationPeriodHandler: changeOpenForApplicationHandler };