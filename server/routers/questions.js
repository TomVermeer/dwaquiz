const router = require('express').Router();
const {getQuestion} = require('../route-handlers/questions');

router.get('/:id', getQuestion);

module.exports = router;