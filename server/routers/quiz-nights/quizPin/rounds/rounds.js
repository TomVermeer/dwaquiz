const roundRouter = require('./round/round');
const questionRouter = require('./question/question');
const {createRoundHandler} = require('../../../../route-handlers/rounds');
const {saveRoundNumber} = require('../../../../middleware/round');
const router = require('express').Router();

router.use('/:round', [saveRoundNumber, roundRouter]);
router.use('/:question', questionRouter);
router.post('/', createRoundHandler);

module.exports = router;