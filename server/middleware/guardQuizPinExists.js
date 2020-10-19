const { doesPinExist } = require("../helpers/quizPin");

const doesQuizPinExist = async (quizPin) => {
    console.log(quizPin, ": in guard")
    return quizPin != null && await doesPinExist(Number(quizPin));
};

const guardQuizPinExists = async (req, res, next) => {
    try {
        console.log(req.params, ": in guard 2")
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