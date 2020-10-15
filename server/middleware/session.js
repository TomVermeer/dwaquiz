const session = require("express-session");

const secret = process.env.SESSION_SECRET || 'xy5IL90j3<ETe.0jZLJ9of^w3UGl_ZXF';
const sessionParser = session({ saveUninitialized: false, resave: false, secret: secret });

const installSession = (app) => {
    app.use(sessionParser);
}

module.exports = {installSession, sessionParser};