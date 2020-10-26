const router = require('express').Router();
const {createQuestioning, getQuestioningForTeam, getQuestioning} = require('../../../../../route-handlers/questionings');

router.post('/', createQuestioning);
router.get('/:questionNumber/:teamName', getQuestioningForTeam);
router.get('/:questionNumber/', getQuestioning);
module.exports = router;