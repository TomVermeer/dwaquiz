const router = require('express').Router();
const quizNightsRouter = require('./quiz-nights/quiz-nights');
const categoriesRouter = require('./categories');
const scoreboardsRouter = require('./scoreboards/scoreboards');

router.use('/quiz-nights', quizNightsRouter);
router.use('/categories', categoriesRouter);
router.use('/scoreboards', scoreboardsRouter);

module.exports = router;