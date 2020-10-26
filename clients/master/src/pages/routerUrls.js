const quizPinVariable =  ':quizPin';
const roundNumberVariable =  ':roundNumber';
const questionNumberVariable = ':questionNumber';

const createUrlEnum = (quizPin, roundNumber = 1, questionNumber = 1) => Object.freeze({
    HOME: '/',
    TEAMS: `/${quizPin}/teams`,
    CATEGORIES: `/${quizPin}/${roundNumber}/categories`,
    QUESTIONS: `/${quizPin}/${roundNumber}/questions`,
    QUIZ_PIN: `/${quizPin}`,
    ROUND_NUMBER: `/${quizPin}/${roundNumber}`,
    GRADE: `/${quizPin}/${roundNumber}/${questionNumber}/grade`
});

export const RouterUrls = createUrlEnum(quizPinVariable, roundNumberVariable, questionNumberVariable);

export const Pages = createUrlEnum;