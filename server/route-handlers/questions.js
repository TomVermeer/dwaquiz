const {Question} = require('../models');

const getQuestion = async (req, res) => {
    try {
        const question = await Question.findOne({_id: req.params.id}).exec();
        res.json(question);
    } catch(e) {
        throw e;
    }
};

module.exports = {getQuestion};