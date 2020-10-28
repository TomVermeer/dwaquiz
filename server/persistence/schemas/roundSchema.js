const mongoose = require('mongoose');

const roundSchema = mongoose.Schema({
    chosenCategories: {type: [String], required: true},
    roundNumber: {type: Number, default: 1},
    questionings: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Questioning'}], required: true},
});

module.exports = {roundSchema};