const roundRouter = require('./round/round');
const {createRoundHandler} = require('../../../../route-handlers/rounds');
const {saveRoundNumber} = require('../../../../middleware/round');
const router = require('express').Router();


router.use('/:round', [saveRoundNumber, roundRouter]);
router.post('/', createRoundHandler);

module.exports = router;