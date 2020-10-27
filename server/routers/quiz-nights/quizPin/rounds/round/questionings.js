const router = require('express').Router();
const {createQuestioning, getQuestioningForTeam, getQuestioning, answerQuestioning, gradeQuestioning, closeQuestioning} = require('../../../../../route-handlers/questionings');

router.post('/', createQuestioning);
router.patch('/:questionId', closeQuestioning);
router.get('/:questionNumber/', getQuestioning);
router.get('/:questionNumber/:teamName', getQuestioningForTeam);
router.put('/:questionNumber/:teamName/answer', answerQuestioning);
router.put('/:questionNumber/:teamName/answer/grade', gradeQuestioning);

module.exports = router;