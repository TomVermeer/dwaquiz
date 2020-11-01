const {Question} = require('../persistence/models');

const getSuggestedQuestionsHandler = async (req, res) => {
    try {
        const suggestedQuestions = await Question.findSuggestedQuestionsForQuizNight(req.quizPin, req.round, req.query.offset, req.query.limit);
        console.log({suggestedQuestions});
        res.json(suggestedQuestions);
    } catch (e) {
        throw e;
    }
};

module.exports = {getSuggestedQuestionsHandler};