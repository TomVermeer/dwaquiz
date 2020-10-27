# Express structure

There will be one httpServer from node's Http module. Which setups a express app and a websocket server.

Per route drawn in the [apiDocs overview](apiDocs.md#overview) there will be a router which defines the possible http methods and subrouters.
Each router only includes middleware which all subrouters use, otherwise the middleware is installed on the specific route.

A router only includes logic for wich routes and methods to match and which middleware to use. Any other logic is done in a route handler, which are located in the router-handler folder.

## Middleware

Middleware will be defined in a seperate folder 'middleware'. Custom middleware such as a check whether or not the quizPin exists will get their own file.

Middleware from external modules will get a shared file with a install function for each middleware. This install function sets any necessary options for the middleware.

### Cors

Because the 3 SPA's will run on a seperate server during development, CORS has to be enabled for those domains.
When running in production mode the express app can serve the apps using `express.static`.

### Body parser

Because we use JSON as a media for REST we parse the http bodies with bodyParser.
