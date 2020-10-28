const {Question} = require('../models');

const getQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        res.json(question);
    } catch(e) {
        throw e;
    }
};

module.exports = {getQuestion};