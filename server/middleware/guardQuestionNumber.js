const { Questioning } = require('../persistence/models');
const HttpErrors = require("../httpErrors");



const doesQuestionExist = async (req)  => {
    const question = await Questioning.findQuestion(req.quizPin, req.round, Number(req.params.questionNumber))
    return question !== null;
};

const guardQuestionNumber = async (req, res, next) => {
    try {
        if(!await doesQuestionExist(req)) {
            res.sendError(HttpErrors.QUESTION_NOT_FOUND(req.params.questionNumber));
        } else {
            next();
        }
    } catch(e) {
        next(e);
    }
};

module.exports = guardQuestionNumber;
