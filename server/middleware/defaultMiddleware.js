const cors = require('cors');
const session = require("express-session");
const bodyParser = require("body-parser");

const installCors = (app) => {
    app.use(cors({ origin: true, credentials: true }));
    app.options("*", cors({ origin: true, credentials: true }));
}

const installSession = (app) => {
    const secret = process.env.SESSION_SECRET || 'xy5IL90j3<ETe.0jZLJ9of^w3UGl_ZXF';
    app.use(session({ saveUninitialized: true, resave: true, secret: secret }));
}

const installJsonBodyParser = (app) => {
    app.use(bodyParser.json());
}

module.exports = {
    installCors,
    installSession,
    installJsonBodyParser
};