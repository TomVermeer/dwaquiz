const router = require('express').Router();
const teamApplicationsRouter = require('./teamApplications');
const teamsRouter = require('./teams/teams');
const roundsRouter = require('./rounds/rounds');

const {closeApplicationPeriodHandler} = require('../../../route-handlers/quizNight');

// TODO: delete, patch
router.patch('/', closeApplicationPeriodHandler);


router.use('/team-applications', teamApplicationsRouter);
router.use('/teams', teamsRouter);
router.use('/rounds', roundsRouter);

module.exports = router;