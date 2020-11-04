const roundRouter = require('./round/round');
const {createRoundHandler} = require('../../../../route-handlers/rounds');
const {guardRoundNumberExists} = require('../../../../middleware/round');
const router = require('express').Router();

router.use('/:round', [guardRoundNumberExists, roundRouter]);
router.post('/', createRoundHandler);
module.exports = router;