const { QuizNight } = require("../models");

const doesQuizPinExist = async (quizPin) => {
    return quizPin != null && await QuizNight.doesPinExist(Number(quizPin));
};

const guardQuizPinExists = async (req, res, next) => {
    try {
        req.quizPin = Number(req.params.quizPin);
        if(!await doesQuizPinExist(req.quizPin)) {
            res.status(404).send({error: 'Quiz-night does not exist'});
        } else {
            next();
        }
    } catch(e) {
        throw e;
    }
};

module.exports = guardQuizPinExists;
