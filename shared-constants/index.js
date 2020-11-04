const WsEvents = require('./websocket-events');
const Roles = require('./roles');
const HttpErrors = require('../server/httpErrors');

const NUMBER_OF_QUESTIONS_IN_ROUND = 12;
const MINIMUM_NUMBER_OF_DIGITS_IN_QUIZ_PIN = 6;

module.exports = {NUMBER_OF_QUESTIONS_IN_ROUND, WsEvents, Roles, HttpErrors, MINIMUM_NUMBER_OF_DIGITS_IN_QUIZ_PIN};