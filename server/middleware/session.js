const session = require("express-session");
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

const secret = process.env.SESSION_SECRET || 'xy5IL90j3<ETe.0jZLJ9of^w3UGl_ZXF';
const sessionParser = session({
    saveUninitialized: false,
    resave: false,
    secret: secret,
    store: new MongoStore({ mongooseConnection: mongoose.connection })});

const installSession = (app) => {
    app.use(sessionParser);
};

module.exports = {installSession, sessionParser};