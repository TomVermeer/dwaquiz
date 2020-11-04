const { QuizNight } = require("../persistence/models");
const HttpErrors = require('../httpErrors');

const guardRoundNumberExists = async (req, res, next) => {
    try {
        req.round = Number(req.params.round);
        
        currentQuizNight = await QuizNight.findById(req.params.quizPin)
        dbRound = await currentQuizNight.findRound(req.params.round)

        if(!req.round || !dbRound) {
            res.sendError(HttpErrors.NO_ROUND_NUMBER_FOUND);
        } else {
            next();
        }
    } catch(e) {
        throw e;
    }
};

module.exports = {guardRoundNumberExists};