const router = require('express').Router();
const { quizNightHandler } = require('../../route-handlers/quizNight');
const quizPinRouter = require('./quizPin/quizPin');

router.use('/:quizPin', quizPinRouter)
router.post('/', quizNightHandler);

module.exports = router;