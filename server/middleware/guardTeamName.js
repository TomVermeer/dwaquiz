const HttpErrors = require("../httpErrors");
const { QuizNight } = require("../persistence/models");

const guardTeamName = async(req, res, next) => {
  try {
    req.teamName = req.body.teamName;
    const teamDuplicate = await checkTeamNameDuplicate(req.teamName)
    if (!req.teamName) {
      res.sendError(HttpErrors.TEAM_NAME_EMPTY);
    }else if(!teamDuplicate(req.teamName)) {
      res.sendError(HttpErrors.TEAM_NAME_IN_USE);
    }else {
        next();
    }
  } catch (e) {
    throw e;
  }
};

const checkTeamNameDuplicate = async (teamName) => {
  participatingTeams = await QuizNight.getParticipatingTeamNames();
  return participatingTeams.contains(teamName);
};

module.exports = {guardTeamName};
