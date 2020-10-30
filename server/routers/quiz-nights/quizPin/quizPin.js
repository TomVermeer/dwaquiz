const router = require('express').Router();
const teamApplicationsRouter = require('./teamApplications');
const teamsRouter = require('./teams/teams');
const roundsRouter = require('./rounds/rounds');
const {closeApplicationPeriodHandler, getScores} = require('../../../route-handlers/quizNight');

// TODO: delete
router.patch('/', closeApplicationPeriodHandler);
router.get('/scores', getScores);

router.use('/team-applications', teamApplicationsRouter);
router.use('/teams', teamsRouter);
router.use('/rounds', roundsRouter);

module.exports = router;