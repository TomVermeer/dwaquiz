const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    teamName: {type: String, required: true},
    numberOfCorrectQuestions: {type: Number, default: 0},
    roundPoints: {type: Number, default: 0},
});

module.exports = {teamSchema};