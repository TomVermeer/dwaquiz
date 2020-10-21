const roundRouter = require('./round/round');
const questionRouter = require('./question/question');
const {createRoundHandler} = require('../../../../route-handlers/rounds');
const router = require('express').Router();

router.use('/:round', roundRouter);
router.use('/:question', questionRouter);
router.post('/', createRoundHandler);

module.exports = router;