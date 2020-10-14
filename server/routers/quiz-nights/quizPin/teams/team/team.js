const answersRouter = require('./answers');

const router = require('express').Router();

router.use('/answers', answersRouter);
// TODO POST

module.exports = router;