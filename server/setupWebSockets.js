const WebSocket = require("ws");
const Roles = require("./roles");
const { sessionParser } = require('./middleware/session');

const setupWebSocketServer = (server) => {
    server.on('connection', (ws) => {
        ws.sendJson = (data) => ws.send(JSON.stringify(data));
    });

    server.on('error', (error) => {
        console.log('connection error: ', error);
    });

    server.on('close', (close) => {
        console.log('connection closed: ', close);
    })
}

let wss = null;

const registerWebSocketServer = (httpServer) => {
    wss = new WebSocket.Server({ noServer: true, path: '/ws'});

    httpServer.on('upgrade', (req, networkSocket, head) => {
        sessionParser(req, {}, () => {
            if (req.session.role === undefined) {
                // TODO check only one master?
                console.log('refusing connection because role is not set');
                networkSocket.destroy();
                return;
            }
            wss.handleUpgrade(req, networkSocket, head, newWebSocket => {
                newWebSocket.role = req.session.role;
                newWebSocket.quizPin = req.session.quizPin;
                newWebSocket.teamName = req.session.teamName;
                wss.emit('connection', newWebSocket, req);
            });
        });
    });

    setupWebSocketServer(wss);
};

const getWebSocketClients = () => [...wss.clients];
const getMaster = (pin) => getWebSocketClients().find(x => x.quizPin === pin && x.role === Roles.QUIZ_MASTER);
const getScoreBoards = (pin) => getWebSocketClients().filter(x => x.quizPin === pin && x.role === Roles.SCOREBOARD);
const getTeams = (pin) => getWebSocketClients().filter(x => x.quizPin === pin && x.role === Roles.TEAM);
const getTeam = (pin, teamName) => getTeams(pin).find(x => x.teamName === teamName);
module.exports = { registerWebSocketServer, getWebSocketClients, getMaster, getScoreBoards, getTeams, getTeam };