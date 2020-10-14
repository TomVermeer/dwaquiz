const gradeRouter = require('./grade');

const router = require('express').Router();

router.use('/grade', gradeRouter);
// TODO PATCH
module.exports = router;