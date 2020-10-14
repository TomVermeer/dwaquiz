const roundRouter = require('./round/round');
const questionRouter = require('./question/question');

const router = require('express').Router();

router.use('/:round', roundRouter);
router.use('/:question', questionRouter);
// TODO: post

module.exports = router;