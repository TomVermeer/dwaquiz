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
        const categories = await findSelectedCategories(req.quizPin, req.params.roundNumber);
        console.log('selected categories: ', categories);
        const alreadyAskedQuestions = findAskedQuestions(req.quizPin);
        console.log('already asked questions: ', alreadyAskedQuestions);

        const suggestedQuestions = await Question
            .find({
                category: {$in: categories},
                question: {$nin: alreadyAskedQuestions}
            })
            .order('_id')
            .skip(req.params.offset)
            .limit(req.params.offset)
            .exec();
        console.log('suggested questions: ', suggestedQuestions);
        res.json(suggestedQuestions);
    } catch (e) {
        throw e;
    }
};

module.exports = {getSuggestedQuestionsHandler};