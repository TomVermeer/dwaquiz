const router = require('express').Router();
const suggestedQuestionsRouter = require('./suggestedQuestions');
const teamApplicationsRouter = require('./teamApplications');
const teamsRouter = require('./teams/teams');
const {closeApplicationPeriodHandler} = require('../../../route-handlers/quizNight');

// TODO: delete, patch
router.patch('/', closeApplicationPeriodHandler);

router.use('/suggested-questions', suggestedQuestionsRouter);
router.use('/team-applications', teamApplicationsRouter);
router.use('/teams', teamsRouter);

module.exports = router;