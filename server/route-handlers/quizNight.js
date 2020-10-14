const quizNightHandler = (req, res) => {
    res.json({
        quizPin: 103441
    }); // TODO generate pin and save to db
};

module.exports = {quizNightHandler};