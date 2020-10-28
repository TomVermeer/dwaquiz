const {Question} = require('../models');

const getAllCategoriesHandler = async (req, res) => {
    res.json(await Question.findAllCategories());
};

module.exports = { getAllCategoriesHandler };