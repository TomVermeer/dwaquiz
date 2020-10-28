const quizPinVariable =  ':quizPin';
const roundNumberVariable =  ':roundNumber';
const questionNumberVariable = ':questionNumber';
const questionIdVariable = ':questionId';

const createUrlEnum = (quizPin, roundNumber = 1, questionNumber = 1, questionId) => Object.freeze({
    HOME: '/',
    TEAMS: `/${quizPin}/teams`,
    CATEGORIES: `/${quizPin}/${roundNumber}/categories`,
    CHOSE_QUESTION: `/${quizPin}/${roundNumber}/questions`,
    QUIZ_PIN: `/${quizPin}`,
    ROUND_NUMBER: `/${quizPin}/${roundNumber}`,
    GRADE: `/${quizPin}/${roundNumber}/${questionNumber}/${questionId}/grade`,
    ROUND_END: `/${quizPin}/${roundNumber}/round-end`
});

export const RouterUrls = createUrlEnum(quizPinVariable, roundNumberVariable, questionNumberVariable, questionIdVariable);

export const Pages = createUrlEnum;