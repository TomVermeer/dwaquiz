const guardQuizPinExists = require('../../middleware/guardQuizPinExists');

const router = require('express').Router();

router.use('/', guardQuizPinExists);


const { applyScoreBoardHandler } = require("../../route-handlers/scoreBoardSubscription");
router.post('/', applyScoreBoardHandler)


module.exports = router;