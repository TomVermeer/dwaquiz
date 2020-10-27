const router = require('express').Router();
const quizNightsRouter = require('./quiz-nights/quiz-nights');
const categoriesRouter = require('./categories');
const scoreboardsRouter = require('./scoreboards/scoreboards');
const questionsRouter = require('./questions');

router.use('/quiz-nights', quizNightsRouter);
router.use('/categories', categoriesRouter);
router.use('/scoreboards', scoreboardsRouter);
router.use('/questions', questionsRouter);

module.exports = router;