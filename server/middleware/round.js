const HttpErrors = require('../httpErrors');
const guardRoundNumberExists = async (req, res, next) => {
    try {
        req.round = Number(req.params.round);
        if(!req.round) {
            res.sendError(HttpErrors.NO_ROUND_NUMBER_FOUND);
        } else {
            next();
        }
    } catch(e) {
        throw e;
    }
};

module.exports = {guardRoundNumberExists};