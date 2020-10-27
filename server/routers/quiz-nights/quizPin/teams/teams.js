const {addTeamHandler, getTeamsHandler} = require("../../../../route-handlers/teams");
const router = require('express').Router();

router.post('/', addTeamHandler);
router.get('/', getTeamsHandler);

module.exports = router;