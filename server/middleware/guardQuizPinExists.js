const { doesPinExist } = require("../helpers/quizPin");

const doesQuizPinExist = async (quizPin) => {
    return quizPin != null && await doesPinExist(Number(quizPin));
}

const guardQuizPinExists = async (req, res, next) => {
    try {
        if(!await doesQuizPinExist(req.params.quizPin)) {
            res.status(404).send({error: 'Quiz-night does not exist'});
        } else {
            req.quizPin = Number(req.params.quizPin);
            next();
        }
    } catch(e) {
        throw e;
    }
}

module.exports = guardQuizPinExists;