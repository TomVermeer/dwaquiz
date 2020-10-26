const router = require('express').Router();
const {createQuestioning, getQuestioningForTeam, getQuestioning, answerQuestioning} = require('../../../../../route-handlers/questionings');

router.post('/', createQuestioning);
router.get('/:questionNumber/:teamName', getQuestioningForTeam);
router.put('/:questionNumber/:teamName', answerQuestioning);
router.get('/:questionNumber/', getQuestioning);
module.exports = router;