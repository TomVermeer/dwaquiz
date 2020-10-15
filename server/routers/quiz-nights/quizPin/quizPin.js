const router = require('express').Router();
const suggestedQuestionsRouter = require('./suggestedQuestions');
const teamApplicationsRouter = require('./teamApplications');

// TODO: delete, patch

router.use('/suggested-questions', suggestedQuestionsRouter);
router.use('/team-applications', teamApplicationsRouter);

module.exports = router;