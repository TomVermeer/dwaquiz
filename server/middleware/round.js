const saveRoundNumber = (req, res, next) => {
    req.round = Number(req.params.round);
    next();
};

module.exports = {saveRoundNumber};