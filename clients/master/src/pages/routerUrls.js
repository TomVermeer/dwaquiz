const quizPinVariable =  ':quizPin';
const roundNumberVariable =  ':roundNumber';
const questionNumberVariable = ':questionNumber';
const questionIdVariable = ':questionId';

const createUrlEnum = (quizPin, roundNumber = 1, questionNumber = 1, questionId) => Object.freeze({
    HOME: '/',
    TEAMS: `/${quizPin}/teams`,
    CHOOSE_CATEGORIES: `/${quizPin}/${roundNumber}/categories`,
    CHOOSE_QUESTION: `/${quizPin}/${roundNumber}/questions`,
    QUIZ_PIN: `/${quizPin}`,
    ROUND_NUMBER: `/${quizPin}/${roundNumber}`,
    GRADE: `/${quizPin}/${roundNumber}/${questionNumber}/${questionId}/grade`,
    ROUND_END: `/${quizPin}/${roundNumber}/round-end`,
    NIGHT_END: `/${quizPin}/end`
});

export const RouterUrls = createUrlEnum(quizPinVariable, roundNumberVariable, questionNumberVariable, questionIdVariable);

export const Pages = createUrlEnum;