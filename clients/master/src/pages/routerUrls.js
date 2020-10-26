const quizPinVariable =  ':quizPin';
const roundNumberVariable =  ':roundNumber';
const questionIdVariable = ':questionId';

const createUrlEnum = (quizPin, roundNumber = 1, questionId = 1) => Object.freeze({
    HOME: '/',
    TEAMS: `/${quizPin}/teams`,
    CATEGORIES: `/${quizPin}/${roundNumber}/categories`,
    QUESTIONS: `/${quizPin}/${roundNumber}/questions`,
    QUIZ_PIN: `/${quizPin}`,
    ROUND_NUMBER: `/${quizPin}/${roundNumber}`,
    GRADE: `/${quizPin}/${roundNumber}/${questionId}/grade`
});

export const RouterUrls = createUrlEnum(quizPinVariable, roundNumberVariable, questionIdVariable);

export const Pages = createUrlEnum;