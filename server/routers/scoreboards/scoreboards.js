const router = require('express').Router();
const guardQuizPinExists = require('../../middleware/guardQuizPinExists');
const quizPinRouter = require('./quizPin');


router.use('/:quizPin', [guardQuizPinExists ,quizPinRouter]);

module.exports = router;