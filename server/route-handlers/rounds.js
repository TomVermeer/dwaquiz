const {QuizNight} = require('../persistence/models');

const createRoundHandler = async (req, res) => {
    try {
        const chosenCategories = req.body;
        if (chosenCategories.length !== 3) {
            res.status(400).json({error: "A round must have exactly 3 categories."});
        }

        const quizNight = await QuizNight.findByQuizPin(req.quizPin);
        const roundNumber = quizNight.startRound(chosenCategories);
        await quizNight.save();

        res.json({roundNumber});
    } catch (e) {
        throw e;
    }
};

module.exports = {createRoundHandler};