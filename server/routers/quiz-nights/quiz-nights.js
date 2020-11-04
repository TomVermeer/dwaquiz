const router = require('express').Router();
const { createQuizNightHandler } = require('../../route-handlers/quizNight');
const quizPinRouter = require('./quizPin/quizPin');
const guardQuizPinExists = require('../../middleware/guardQuizPinExists');

router.use('/:quizPin', [guardQuizPinExists, quizPinRouter]);
router.post('/', createQuizNightHandler);


module.exports = router;