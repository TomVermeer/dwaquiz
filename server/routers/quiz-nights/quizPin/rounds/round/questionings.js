const router = require('express').Router();
const guardQuestionNumber = require('../../../../../middleware/guardQuestionNumber');
const {createQuestioning, getQuestioningForTeam, getQuestioning, answerQuestioning, gradeQuestioning, closeQuestioning, getAnswers} = require('../../../../../route-handlers/questionings');

router.post('/', createQuestioning);
router.use('/:questionNumber', guardQuestionNumber);
router.patch('/:questionNumber', closeQuestioning);
router.get('/:questionNumber', getQuestioning);
router.get('/:questionNumber/answers', getAnswers);
router.post('/:questionNumber/answers/grades', gradeQuestioning);
router.put('/:questionNumber/answers/:teamName', answerQuestioning);
router.get('/:questionNumber/:teamName', getQuestioningForTeam);

module.exports = router;