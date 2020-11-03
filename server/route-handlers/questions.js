const {Question} = require('../persistence/models');

const getQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if(question == null) {
            res.sendStatus(404);   
        } else {
            res.json(question);
        }
    } catch(e) {
        throw e;
    }
};

module.exports = {getQuestion};