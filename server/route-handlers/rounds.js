const {getQuizNight} = require('../helpers/quizNight');
const {findHighestRoundNumber} = require('../helpers/findHighestRoundNumber');

const findNewRoundNumber = quizNight => findHighestRoundNumber(quizNight) + 1;

const createRoundHandler = async (req, res) => {
    try {
        const chosenCategories = req.body;
        if (chosenCategories.length !== 3) {
            res.status(400).json({error: "A round must have exactly 3 categories."});
        }

        const quizNight = await getQuizNight(req.quizPin);
        const roundNumber = findNewRoundNumber(quizNight);
        quizNight.rounds.push({
            roundNumber,
            chosenCategories,
            questionings: []
        });
        await quizNight.save();

        res.json({roundNumber});
    } catch (e) {
        throw e;
    }
};

module.exports = {createRoundHandler};