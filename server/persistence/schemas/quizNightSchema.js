const mongoose = require('mongoose');
const {teamSchema} = require('./teamSchema');
const {roundSchema} = require('./roundSchema');

const quizNightSchema = mongoose.Schema({
    _id: Number, // quizPin
    teamApplications: {type: [String], required: true},
    teams: {type: [teamSchema], required: true},
    rounds: {type: [roundSchema], required: true},
    isOpenForApplication: {type: Boolean, default: true},
    isActive: {type: Boolean, default: true}
});

quizNightSchema.statics.findByQuizPin = function (quizPin) {
    return this.findOne({_id: quizPin})
        .exec();
};

quizNightSchema.statics.isQuizNightOpenForApplications = async function (quizPin) {
    const quizNight = await this.findByQuizPin(quizPin);
    return quizNight && quizNight.isOpenForApplication;
};

quizNightSchema.statics.doesPinExist = async function (quizPin) {
    return await this.findByQuizPin(quizPin) != null;
};

// https://stackoverflow.com/a/58509734/7736404
const generateQuizPin = (length) => Math.floor(Math.random() * (9 * Math.pow(10, length - 1))) + Math.pow(10, length - 1);

/**
 * Generates a unique quiz pin with a minimal length
 * @param {Number} length minimal length the generated quizPin must have
 * @return {Number} quizpin that is not yet present in database
 */
const getNewQuizPin = async (length = 6) => {
    let quizPin;
    let additionalLength = 0;
    do {
        quizPin = generateQuizPin(length + additionalLength);
        additionalLength++
    } while (await mongoose.model('QuizNight').doesPinExist(quizPin));
    return quizPin;
};

quizNightSchema.statics.createEmptyQuizNight = async function () {
    return this({
        _id: await getNewQuizPin(),
        teams: [],
        rounds: [],
    });
};

quizNightSchema.methods.findHighestRoundNumber = function () {
    if (this.rounds.length !== 0) {
        console.log('we have rounds, finding max');
        return Math.max(...
            (this.rounds.map(x => x.roundNumber)));
    } else {
        return 0;
    }
};

quizNightSchema.methods.findNewRoundNumber = function () {
    return this.findHighestRoundNumber() + 1;
};

quizNightSchema.methods.startRound = function (chosenCategories) {
    const roundNumber = this.findNewRoundNumber();
    this.rounds.push({
        roundNumber,
        chosenCategories,
        questionings: []
    });
    return roundNumber;
};

quizNightSchema.methods.addTeam = function (teamName) {
    this.teams.push({teamName});
};

quizNightSchema.methods.findChosenCategories = function (roundNumber) {
    return this.rounds.find(x => x.roundNumber === roundNumber).chosenCategories;
};

quizNightSchema.methods.findAskedQuestions = function () {
    return mongoose.model('QuizNight').find({_id: this._id})
        .distinct('round.questionings.question')
        .exec();
};

quizNightSchema.methods.getParticipatingTeamNames = function () {
    return this.teams.map(x => x.teamName);
};

quizNightSchema.methods.getCurrentQuestionNumber = function (roundNumber) {
    return this.rounds[roundNumber - 1].questionings.length / this.teams.length;
};

quizNightSchema.methods.askQuestion = async function (roundNumber, questionId) {
    const questionPromise = mongoose.model('Question').findById(questionId);
    const teams = this.getParticipatingTeamNames();
    const questionNumber = this.getCurrentQuestionNumber(roundNumber) + 1;
    const round = this.rounds[roundNumber - 1];
    const question = await questionPromise;
    const questioningIdPromises = teams.map(teamName => {
        const questioning = new mongoose.model('Questioning')({
            teamName: teamName,
            question: question._id,
            quizPin: this._id,
            questionNumber,
            roundNumber: roundNumber
        });
        return questioning.save();
    });
    const questioningsIds = await Promise.all(questioningIdPromises);
    round.questionings = round.questionings.concat(questioningsIds);
    await this.save();
    return questionNumber;
};

/**
 * Adds the scores from a round to the teams
 * @param teamScores object whose keys are teamNames and values are {numberOfCorrectQuestions: number, roundPoints: number}
 * @return {Promise<void>}
 */
quizNightSchema.methods.saveScoresOfRoundToTeams = function (teamScores) {
    console.log('saving scores for: ', teamScores, ' current teams: ', this.teams);
    this.teams.forEach(team => {
        const score = teamScores[team.teamName];
        team.numberOfCorrectQuestions += score.numberOfCorrectQuestions;
        team.roundPoints += score.roundPoints;
    });
    return this.save();
};

module.exports = {quizNightSchema};