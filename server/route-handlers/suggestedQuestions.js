const {Question, QuizNight} = require('../models');
const {getQuizNight} = require('../helpers/quizNight');

const findAskedQuestions = (quizPin) =>
    QuizNight
        .find({_id: quizPin})
        .distinct('round.questionings.question')
        .exec();


const findSelectedCategories = async (quizPin, roundNumber) => {
    const quizNight = await getQuizNight(quizPin);
    const round = quizNight.rounds.find(x => x.roundNumber === roundNumber);
    return round.chosenCategories;
};

const getSuggestedQuestionsHandler = async (req, res) => {
    try {
        const categories = await findSelectedCategories(req.quizPin, req.round);
        const alreadyAskedQuestions = await findAskedQuestions(req.quizPin);

        const suggestedQuestions = await Question
            .find({
                category: {$in: categories},
                question: {$nin: alreadyAskedQuestions}
            }, {
                category: true,
                question: true,
                _id: true
            })
            .sort('orderNumber')
            .skip(Number(req.query.offset))
            .limit(Number(req.query.limit))
            .exec();
        res.json(suggestedQuestions);
    } catch (e) {
        throw e;
    }
};

module.exports = {getSuggestedQuestionsHandler};