const router = require('express').Router();
const {createQuestioning, getQuestioningForTeam} = require('../../../../../route-handlers/questionings');

router.post('/', createQuestioning);
router.get('/:questionNumber/:teamName', getQuestioningForTeam);
module.exports = router;