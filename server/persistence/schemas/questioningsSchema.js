const mongoose = require('mongoose');



const questioningsSchema = new mongoose.Schema({
    teamName: {type: String, required: true},
    question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question', require: true},
    answer: String,
    isCorrect: {type: Boolean, default: false},
    questionNumber: {type: Number, required: true},
    roundNumber: {type: Number, required: true},
    quizPin: {type: Number, ref: 'QuizNight', required: true},
    isOpen: {type: Boolean, default: true}
});

questioningsSchema.statics.findByQuestionNumber = function (quizPin, roundNumber, questionNumber) {
    return this.findOne({
        questionNumber,
        quizPin,
        roundNumber
    });
};

questioningsSchema.statics.findMultipleByQuestionNumber = function (quizPin, roundNumber, questionNumber) {
    return this.find({
        questionNumber,
        quizPin,
        roundNumber
    });
};


questioningsSchema.statics.findTeamQuestioning = function (quizPin, roundNumber, questionNumber, teamName) {
    return this.findOne({
        questionNumber,
        quizPin,
        roundNumber,
        teamName
    }).exec();
};

questioningsSchema.statics.findQuestion = async function (quizPin, roundNumber, questionNumber) {
    const {question} = await this.findByQuestionNumber(quizPin, roundNumber, questionNumber)
        .populate('question')
        .exec();
    return question;
};

questioningsSchema.statics.findQuestionForTeam = async function (quizPin, roundNumber, questionNumber, teamName) {
    const {question} = await this.findOne(
        {
            questionNumber,
            quizPin,
            roundNumber,
            teamName
        })
        .populate('question')
        .exec();
    return question;
};

module.exports = {questioningsSchema};