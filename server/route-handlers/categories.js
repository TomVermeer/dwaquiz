const {Question} = require('../persistence/models');

const getAllCategoriesHandler = async (req, res, next) => {
    try {
        res.json(await Question.findAllCategories());
    } catch(e) {
        next(e);
    }
};

module.exports = {getAllCategoriesHandler};