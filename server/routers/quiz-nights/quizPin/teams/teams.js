const teamRouter = require('./team/team');

const router = require('express').Router();

router.use('/team', teamRouter);
// TODO POST

module.exports = router;