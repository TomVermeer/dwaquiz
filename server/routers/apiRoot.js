const router = require('express').Router();
const quizNightsRouter = require('./quiz-nights/quiz-nights');
const categoriesRouter = require('./categories');
const questionsRouter = require('./questions');

router.use('/quiz-nights', quizNightsRouter);
router.use('/categories', categoriesRouter);
router.use('/questions', questionsRouter);

module.exports = router;