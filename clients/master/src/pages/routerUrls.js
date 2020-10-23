const quizPinVariable =  ':quizPin';

const createUrlEnum = (quizPin) => Object.freeze({
    HOME: '/',
    TEAMS: `/${quizPin}/teams`,
    CATEGORIES: `/${quizPin}/categories`,
    QUESTIONS: `/${quizPin}/questions`,
    QUIZ_PIN: `/${quizPin}`
});

export const RouterUrls = createUrlEnum(quizPinVariable);

export const Pages = createUrlEnum;