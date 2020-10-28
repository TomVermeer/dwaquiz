const http = require("http");
const {registerWebSocketServer} = require("./setupWebSockets");
const registerExpressServer = require("./setupExpressServer");
const registerMongoose = require("./persistence/setupMongoose");

const app = registerExpressServer();
const httpServer = http.createServer(app);

registerMongoose();
registerWebSocketServer(httpServer);

const port = Number(process.env.HTTP_PORT) || 3000;
httpServer.listen(port, () => {
    console.log(`Server listening on: ${port}`);
});