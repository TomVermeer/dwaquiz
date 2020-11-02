const {addTeamHandler, getTeamsHandler} = require("../../../../route-handlers/teams");
const router = require('express').Router();
const {guardTeamName} = require("../../../../middleware/guardTeamName")

router.get('/', getTeamsHandler);
router.use('/', guardTeamName )
router.post('/', addTeamHandler);

module.exports = router;

