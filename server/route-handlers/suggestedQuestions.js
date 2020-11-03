const {Question} = require('../persistence/models');

const getSuggestedQuestionsHandler = async (req, res, next) => {
    try {
        const suggestedQuestions = await Question.findSuggestedQuestionsForQuizNight(req.quizPin, req.round, req.query.offset, req.query.limit);
        res.json(suggestedQuestions);
    } catch (e) {
        next(e);
    }
};

module.exports = {getSuggestedQuestionsHandler};