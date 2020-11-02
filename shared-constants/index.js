const WsEvents = require('./websocket-events');
const Roles = require('./roles');
const HttpErrors = require('../server/httpErrors');

const NUMBER_OF_QUESTIONS_IN_ROUND = 4;

module.exports = {NUMBER_OF_QUESTIONS_IN_ROUND, WsEvents, Roles, HttpErrors};