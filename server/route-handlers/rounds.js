const {QuizNight} = require('../persistence/models');
const HttpErrors = require("../httpErrors");

const createRoundHandler = async (req, res, next) => {
    try {
        const chosenCategories = req.body;
        if (chosenCategories.length !== 3) {
            res.sendError(HttpErrors.INVALID_NUMBER_OF_CATEGORIES);
        }
        const quizNight = await QuizNight.findByQuizPin(req.quizPin);
        const roundNumber = quizNight.startRound(chosenCategories);
        await quizNight.save();
        res.json({roundNumber});
    } catch (e) {
        next(e);
    }
};

module.exports = {createRoundHandler};