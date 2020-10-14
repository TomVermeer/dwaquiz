const express = require("express");
const path = require("path");
const apiRoot = require('./routers/apiRoot');
const { environment, PRODUCTION } = require("./constants");
const { installCors, installJsonBodyParser, installSession } = require("./middleware/defaultMiddleware");

const installRootMiddleware = (app) => {
    installCors(app);
    installJsonBodyParser(app);
    installSession(app);
}

const serveClient = (app, client) => {
    const clientPath = path.join(__dirname, '..', 'clients', client, 'build');
    const staticPath = path.join(clientPath, 'static');
    app.use('/static', express.static(staticPath));
    app.use('/' + client, express.static(clientPath));
    console.log('Serving client: ', client, ' from: ', clientPath, ' at: /' + client);
}

const serveClientFiles = (app) => {
    if (environment === PRODUCTION) {
        const clients = ['master', 'team', 'scoreboard'];
        clients.forEach(client => serveClient(app, client));
    }
}

const registerExpressServer = (httpServer) => {
    const app = express();
    installRootMiddleware(app);

    serveClientFiles(app);

    app.use('/api/v1', apiRoot);

    httpServer.on("request", app);
};

module.exports = registerExpressServer;