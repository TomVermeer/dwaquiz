const quizPinVariable =  ':quizPin';
const roundNumberVariable =  ':roundNumber';
const questionNumberVariable = ':questionNumber';

const createUrlEnum = (quizPin, roundNumber = 1, questionNumber = 1) => Object.freeze({
    HOME: '/',
    WAITING_ROOM: `/${quizPin}/waitingRoom`,
    QUIZ_PIN: `/${quizPin}`,
    NIGHT_END: `/${quizPin}/nightEnd`,
    ROUND_NUMBER: `/${quizPin}/${roundNumber}`,
    CHOOSE_CATEGORIES: `/${quizPin}/${roundNumber}/categories`,
    ROUND_END: `/${quizPin}/${roundNumber}/roundEnd`,
    QUESTION_NUMBER: `/${quizPin}/${roundNumber}/${questionNumber}`,
    QUESTION: `/${quizPin}/${roundNumber}/${questionNumber}/question`,
    SCORE: `/${quizPin}/${roundNumber}/${questionNumber}/score`
});

export const RouterUrls = createUrlEnum(quizPinVariable, roundNumberVariable, questionNumberVariable);

export const Pages = createUrlEnum;