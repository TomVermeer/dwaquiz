const router = require('express').Router();
const quizPinRouter = require('./quizPin');

router.use('/:quizPin', quizPinRouter);

module.exports = router;