const router = require('express').Router();
const { applyTeamHandler, rejectTeamHandler, getTeamApplicationsHandler } = require('../../../route-handlers/teamApplication');

router.post('/', applyTeamHandler);
router.delete('/:teamName', rejectTeamHandler);
router.get('/', getTeamApplicationsHandler);

module.exports = router;