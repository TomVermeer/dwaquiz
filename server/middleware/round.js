const { QuizNight } = require("../persistence/models");
const HttpErrors = require('../httpErrors');

const guardRoundNumberExists = async (req, res, next) => {
    try {
        req.round = Number(req.params.round);
        if(!req.round) {
            res.sendError(HttpErrors.NO_ROUND_NUMBER_FOUND);
        }

        const currentQuizNight = await QuizNight.findById(req.quizPin);
        const doesRoundExist = await currentQuizNight.doesRoundExist(req.round);

        if(!doesRoundExist) {
            res.sendError(HttpErrors.NO_ROUND_NUMBER_FOUND);
        } else {
            next();
        }
    } catch(e) {
        next(e);
    }
};

module.exports = {guardRoundNumberExists};