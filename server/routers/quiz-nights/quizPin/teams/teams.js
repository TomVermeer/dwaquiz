const {addTeamHandler, getTeamsHandler} = require("../../../../route-handlers/teams");
const teamRouter = require('./team/team');
const router = require('express').Router();

router.use('/team', teamRouter);
router.post('/', addTeamHandler);
router.get('/', getTeamsHandler);

module.exports = router;