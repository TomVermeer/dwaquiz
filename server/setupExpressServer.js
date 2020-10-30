const express = require("express");
const path = require("path");
const apiRoot = require('./routers/apiRoot');
const { environment, PRODUCTION } = require("./constants");
const { installCors, installJsonBodyParser } = require("./middleware/defaultMiddleware");

const installRootMiddleware = (app) => {
    installCors(app);
    installJsonBodyParser(app);
};

const serveClient = (app, client) => {
    const clientPath = path.join(__dirname, '..', 'clients', client, 'build');
    app.use('/' + client, express.static(clientPath));
    console.log('Serving client: ', client, ' from: ', clientPath, ' at: /' + client);
};

const serveClientFiles = (app) => {
    if (environment === PRODUCTION) {
        const clients = ['master', 'team', 'scoreboard'];
        clients.forEach(client => serveClient(app, client));
    }
};

const registerExpressServer = () => {
    const app = express();
    installRootMiddleware(app);

    serveClientFiles(app);

    app.use('/api/v1', apiRoot);

    return app;
};

module.exports = registerExpressServer;