const express = require("express");
const { installCors, installJsonBodyParser, installSession } = require("./middleware/defaultMiddleware");

const installRootMiddleware = (app) => {
    installCors(app);
    installJsonBodyParser(app);
    installSession(app);
}

const registerExpressServer = (httpServer) => {
    const app = express();   
    installRootMiddleware(app);

    // TODO install routers
    app.get('/api/v1', (req, res) => {
        res.json({hello: 'world'});
    });

    httpServer.on("request", app);
};

module.exports = registerExpressServer;