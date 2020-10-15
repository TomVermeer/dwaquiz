const cors = require('cors');
const bodyParser = require("body-parser");
const { environment, DEVELOPMENT } = require('../constants');

const installCors = (app) => {
    if(environment === DEVELOPMENT) {
        console.log('Enabling cors for development');
        app.use(cors({ origin: true, credentials: true }));
        app.options("*", cors({ origin: true, credentials: true }));
    }
}

const installJsonBodyParser = (app) => {
    app.use(bodyParser.json());
}

module.exports = {
    installCors,
    installJsonBodyParser
};