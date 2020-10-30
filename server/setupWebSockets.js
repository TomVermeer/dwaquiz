const WebSocket = require("ws");
const {Roles, WsEvents} = require("shared-constants");

const setupWebSocketServer = (server) => {
    server.on('connection', (ws) => {
        ws.sendJson = (data) => ws.send(JSON.stringify(data));

        ws.on('message', (data) => {
            const message = JSON.parse(data);
            console.log('message: ', message);
            if (message.type === WsEvents.INITIALIZE) {
                ws.role = message.payload.role;
                ws.quizPin = message.payload.quizPin;
                ws.teamName = message.payload.teamName;
            }
        });
    });

    server.on('error', (error) => {
        console.log('connection error: ', error);
    });

    server.on('close', (close) => {
        console.log('connection closed: ', close);
    })
};

let wss = null;

const registerWebSocketServer = (httpServer) => {
    wss = new WebSocket.Server({server: httpServer, path: '/ws'});

    setupWebSocketServer(wss);
};

const getWebSocketClients = () => [...wss.clients];
const getMaster = (pin) => getWebSocketClients().find(x => x.quizPin === pin && x.role === Roles.QUIZ_MASTER);
const getScoreBoards = (pin) => getWebSocketClients().filter(x => x.quizPin === pin && x.role === Roles.SCOREBOARD);
const getTeams = (pin) => getWebSocketClients().filter(x => x.quizPin === pin && x.role === Roles.TEAM);
const getTeam = (pin, teamName) => getTeams(pin).find(x => x.teamName === teamName);
module.exports = {registerWebSocketServer, getWebSocketClients, getMaster, getScoreBoards, getTeams, getTeam};