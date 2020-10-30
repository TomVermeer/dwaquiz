const router = require('express').Router();
const teamApplicationsRouter = require('./teamApplications');
const teamsRouter = require('./teams/teams');
const roundsRouter = require('./rounds/rounds');
const {closeApplicationPeriodHandler} = require('../../../route-handlers/quizNight');
const {getScores, getTeamPlacing} = require('../../../route-handlers/scores');

// TODO: delete
router.patch('/', closeApplicationPeriodHandler);
router.get('/scores', getScores);
router.get('/scores/:teamName', getTeamPlacing);

router.use('/team-applications', teamApplicationsRouter);
router.use('/teams', teamsRouter);
router.use('/rounds', roundsRouter);

module.exports = router;