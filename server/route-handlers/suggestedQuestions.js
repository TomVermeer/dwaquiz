const {Question} = require('../models');

const getSuggestedQuestionsHandler = async (req, res) => {
    try {
        const suggestedQuestions = await Question.findSuggestedQuestionsForQuizNight(req.quizPin, req.round, req.query.offset, req.query.limit);
        res.json(suggestedQuestions);
    } catch (e) {
        throw e;
    }
};

module.exports = {getSuggestedQuestionsHandler};