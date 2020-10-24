const quizPinVariable =  ':quizPin';
const roundNumberVariable =  ':roundNumber';

const createUrlEnum = (quizPin, roundNumber = 1) => Object.freeze({
    HOME: '/',
    TEAMS: `/${quizPin}/teams`,
    CATEGORIES: `/${quizPin}/${roundNumber}/categories`,
    QUESTIONS: `/${quizPin}/${roundNumber}/questions`,
    QUIZ_PIN: `/${quizPin}`,
    ROUND_NUMBER: `/${quizPin}/${roundNumber}`
});

export const RouterUrls = createUrlEnum(quizPinVariable, roundNumberVariable);

export const Pages = createUrlEnum;