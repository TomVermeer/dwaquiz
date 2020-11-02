const WsEvents = Object.freeze({
    ON_QUIZ_NIGHT_START: 'ON_QUIZ_NIGHT_START',
    ON_TEAM_APPLY: 'ON_TEAM_APPLY',
    ON_ANSWER: 'ON_ANSWER',
    ON_QUESTION: 'ON_QUESTION',
    ON_QUESTION_CLOSE: 'ON_QUESTION_CLOSE',
    ON_ROUND_END: 'ON_ROUND_END',
    ON_QUIZ_NIGHT_END: 'ON_QUIZ_NIGHT_END',
    ON_TEAM_APPROVAL: 'ON_TEAM_APPROVAL',
    ON_TEAM_REJECTED: 'ON_TEAM_REJECTED',
    INITIALIZE: 'INITIALIZE',
    ON_QUESTION_GRADED: 'ON_QUESTION_GRADED',
    GO_TO_NEXT_ROUND: 'GO_TO_NEXT_ROUND'
});

module.exports = WsEvents;