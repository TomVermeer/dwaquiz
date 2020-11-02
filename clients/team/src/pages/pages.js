const teamNameVariable = ':teamName';
const quizPinVariable = ':quizPin';
const roundNumberVariable = ':roundNumber';
const questionNumberVariable = ':questionNumber';

const createUrlEnum = (quizPin, teamName, roundNumber, questionNumber) => {
    const TEAM_APPLIED = `/${teamName}/${quizPin}`;
    const QUESTION = `${TEAM_APPLIED}/${roundNumber}/${questionNumber}`;

    return Object.freeze({
        HOME: '/',
        TEAM_APPLIED,
        WAIT_FOR_APPROVAL: `${TEAM_APPLIED}/wait-for-approval`,
        WAIT_FOR_QUESTION: `${TEAM_APPLIED}/wait-for-question`,
        QUESTION,
        NIGHT_END: `${TEAM_APPLIED}/end`
    });
};

export const Pages = createUrlEnum;
export const RouterUrls = createUrlEnum(quizPinVariable, teamNameVariable, roundNumberVariable, questionNumberVariable);