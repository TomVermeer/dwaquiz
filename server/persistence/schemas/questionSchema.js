const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: {type: String, required: true},
    category: {type: String, required: true},
    answer: {type: String, required: true},
    orderNumber: {type: Number, required: true}
});

questionSchema.statics.findAllCategories = function () {
    return this.find({}, {category: true})
        .distinct('category')
        .exec();
};

questionSchema.statics.findById = function (id) {
    return this.findOne({_id: id})
        .exec()
};

questionSchema.statics.findSuggestedQuestionsForQuizNight = async function (quizPin, roundNumber, offset, limit) {
    const quizNight = await mongoose.model('QuizNight').findByQuizPin(quizPin);
    const categories = quizNight.findChosenCategories(roundNumber);
    const alreadyAskedQuestions = await mongoose.model('Questioning').findAskedQuestions(quizPin);
    return this.find({
        category: {$in: categories},
        _id: {
            $nin: alreadyAskedQuestions.map(x => x.question)
        }
    }, {
        category: true,
        question: true,
        _id: true
    })
        .sort('orderNumber')
        .skip(Number(offset))
        .limit(Number(limit))
        .exec();
};

module.exports = {questionSchema};