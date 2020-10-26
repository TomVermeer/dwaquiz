const router = require('express').Router();
const {createQuestioning} = require('../../../../../route-handlers/questionings');

router.post('/', createQuestioning);

module.exports = router;