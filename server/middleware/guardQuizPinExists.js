const { QuizNight } = require("../persistence/models");
const HttpErrors = require('../httpErrors');

const doesQuizPinExist = async (quizPin) => {
    return quizPin != null && await QuizNight.doesPinExist(Number(quizPin));
};

const guardQuizPinExists = async (req, res, next) => {
    try {
        req.quizPin = Number(req.params.quizPin);
        if(!await doesQuizPinExist(req.quizPin)) {
            res.sendError(HttpErrors.QUIZ_PIN_NOT_FOUND(req.quizPin));
        } else {
            next();
        }
    } catch(e) {
        next(e);
    }
};

module.exports = guardQuizPinExists;
