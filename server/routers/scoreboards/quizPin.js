const guardQuizPinExists = require('../../middleware/guardQuizPinExists');

const router = require('express').Router();

router.use('/', guardQuizPinExists);
// TODO: post

module.exports = router;