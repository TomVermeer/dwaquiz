const router = require('express').Router();
const quizPinRouter = require('./quizPin/quizPin');

router.use('/', quizPinRouter)
// TODO: post

module.exports = router;