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
    INITIALIZE: 'INITIALIZE'
});

module.exports = WsEvents;