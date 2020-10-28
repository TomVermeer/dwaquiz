const quizPinVariable =  ':quizPin';
const roundNumberVariable =  ':roundNumber';
const questionNumberVariable = ':questionNumber';

const createUrlEnum = (quizPin, roundNumber = 1, questionNumber = 1) => Object.freeze({
    HOME: '/',
    WAITINGROOM: `/${quizPin}/waitingRoom`,
    CHOOSE_CATEGORIES: `/${quizPin}/${roundNumber}/categories`,
    QUESTION: `/${quizPin}/${roundNumber}/${questionNumber}/question`,
    QUIZ_PIN: `/${quizPin}`,
    ROUND_NUMBER: `/${quizPin}/${roundNumber}`,
    SCORE: `/${quizPin}/${roundNumber}/${questionNumber}/score`,
    ROUNDEND: `/${quizPin}/${roundNumber}/roundEnd`,
    NIGHTEND: `/${quizPin}/nightEnd`
});

export const RouterUrls = createUrlEnum(quizPinVariable, roundNumberVariable, questionNumberVariable);

export const Pages = createUrlEnum;