const ws = require("ws");

const setupWebSocketServer = (server) => {
    server.on('connection', (ws) => {
        // TODO: event handlers
    });
}

const registerWebSocketServer = (httpServer) => {
    // TODO: test
    const websocketServer = new ws.Server({
        server: httpServer
    });
    setupWebSocketServer(websocketServer);
};

module.exports = registerWebSocketServer;