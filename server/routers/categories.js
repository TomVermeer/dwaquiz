const router = require('express').Router();
const { getAllCategoriesHandler } = require('../route-handlers/categories');

router.get('/', getAllCategoriesHandler);

module.exports = router;