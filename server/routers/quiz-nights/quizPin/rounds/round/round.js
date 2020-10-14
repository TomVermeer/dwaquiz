const questioningsRouter = require('./round');

const router = require('express').Router();

router.use('/questionings', questioningsRouter);

module.exports = router;