const router = require('express').Router();
const { applyTeamHandler, rejectTeamHandler } = require('../../../route-handlers/teamApplication');

router.post('/', applyTeamHandler);
router.delete('/:teamName', rejectTeamHandler);
module.exports = router;