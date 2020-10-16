const {addTeamHandler} = require("../../../../route-handlers/teams");
const teamRouter = require('./team/team');
const router = require('express').Router();

router.use('/team', teamRouter);
router.post('/', addTeamHandler);

module.exports = router;