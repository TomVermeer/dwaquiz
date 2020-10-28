const {Question} = require('../persistence/models');

const getQuestion = async (req, res) => {
    try {
        res.json(await Question.findById(req.params.id));
    } catch(e) {
        throw e;
    }
};

module.exports = {getQuestion};