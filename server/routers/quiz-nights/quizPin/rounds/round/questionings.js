const router = require('express').Router();
const {createQuestioning, getQuestioningForTeam, getQuestioning, answerQuestioning, gradeQuestioning, closeQuestioning, getAnswers} = require('../../../../../route-handlers/questionings');

router.post('/', createQuestioning);
router.patch('/:questionNumber', closeQuestioning);
router.get('/:questionNumber', getQuestioning);
router.get('/:questionNumber/answers', getAnswers);
router.put('/:questionNumber/answers/:teamName', answerQuestioning);
router.put('/:questionNumber/answers/grades/:teamName', gradeQuestioning);
router.get('/:questionNumber/:teamName', getQuestioningForTeam);

module.exports = router;