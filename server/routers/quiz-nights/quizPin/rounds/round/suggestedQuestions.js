const router = require('express').Router();
const {getSuggestedQuestionsHandler} = require('../../../../../route-handlers/suggestedQuestions');

router.get('/', getSuggestedQuestionsHandler);

module.exports = router;