const questioningsRouter = require('./questionings');
const suggestedQuestionsRouter = require('./suggestedQuestions');
const router = require('express').Router();

router.use('/questionings', questioningsRouter);
router.use('/suggested-questions', suggestedQuestionsRouter);

module.exports = router;