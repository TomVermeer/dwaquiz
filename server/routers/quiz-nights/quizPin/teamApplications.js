const router = require('express').Router();
const { applyTeamHandler } = require('../../../route-handlers/teamApplication');

router.post('/', applyTeamHandler);

module.exports = router;