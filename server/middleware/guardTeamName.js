const HttpErrors = require("../httpErrors");
const { QuizNight } = require("../persistence/models");

const guardTeamName = async(req, res, next) => {
  try {
    req.teamName = req.body.teamName;
    const teamDuplicate = await checkTeamNameDuplicate(req.quizPin, req.teamName);
    if (!req.teamName) {
      res.sendError(HttpErrors.TEAM_NAME_EMPTY);
    }else if(teamDuplicate) {
      res.sendError(HttpErrors.TEAM_NAME_IN_USE);
    }else {
        next();
    }
  } catch (e) {
    throw e;
  }
};

const checkTeamNameDuplicate = async (quizPin, teamName) => {
  const quizNight = await QuizNight.findByQuizPin(quizPin);
  const participatingTeams = quizNight.getParticipatingTeamNames();
  return participatingTeams.includes(teamName);
};

module.exports = {guardTeamName};
