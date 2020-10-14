const doesQuizPinExist = (quizPin) => {
    return quizPin != null; // TODO
}

const guardQuizPinExists = (req, res, next) => {
    if(!doesQuizPinExist(req.params.quizPin)) {
        res.status(404).send({error: 'Quiz-night does not exist'});
    } else {
        next();
    }
}

module.exports = guardQuizPinExists;