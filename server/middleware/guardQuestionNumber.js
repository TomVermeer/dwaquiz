const { Mongoose } = require("mongoose");
const HttpErrors = require("../httpErrors");

const doesQuestionExist = async (questionNum) => {
    return questionNum != null && await Mongoose.model('question').findById(questionNum);
};

const guardQuestionNumber = async (req, res, next) => {
    try {
        questionNum = Number(req.params.questionNumber);
        if(!await doesQuestionExist(questionNum)) {
            res.sendError(HttpErrors.QUESTION_NOT_FOUND(questionNum));
        } else {
            next();
        }
    } catch(e) {
        next(e);
    }
};

module.exports = guardQuestionNumber;
