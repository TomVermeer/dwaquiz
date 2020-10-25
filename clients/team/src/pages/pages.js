const teamNameVariable = ':teamName';
const quizPinVariable = ':quizPin';

const createUrlEnum = (quizPin, teamName) => Object.freeze({
    HOME: '/',
    TEAM_APPLIED: `/${quizPin}/${teamName}`,
    WAIT_FOR_APPROVAL: `/${quizPin}/${teamName}/wait-for-approval`,
    WAIT_FOR_QUESTION: `/${quizPin}/${teamName}/wait-for-question`
});

export const Pages = createUrlEnum;
export const RouterUrls = createUrlEnum(quizPinVariable, teamNameVariable);