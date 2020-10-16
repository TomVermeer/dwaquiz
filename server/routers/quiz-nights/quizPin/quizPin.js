const router = require('express').Router();
const suggestedQuestionsRouter = require('./suggestedQuestions');
const teamApplicationsRouter = require('./teamApplications');
const teamsRouter = require('./teams/teams');

// TODO: delete, patch

router.use('/suggested-questions', suggestedQuestionsRouter);
router.use('/team-applications', teamApplicationsRouter);
router.use('/teams', teamsRouter);

module.exports = router;