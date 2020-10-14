const router = require('express').Router();
const { createQuizNightHandler } = require('../../route-handlers/quizNight');
const quizPinRouter = require('./quizPin/quizPin');

router.use('/:quizPin', quizPinRouter)
router.post('/', createQuizNightHandler);

module.exports = router;