const {Question} = require('../models');

const getAllCategoriesHandler = async (req, res) => {
    const categories = await Question
        .find({}, {category: true})
        .distinct('category')
        .exec();
    res.json(categories);
};

module.exports = { getAllCategoriesHandler };