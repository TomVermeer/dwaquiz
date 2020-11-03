# Simple e2e tests with cypress.io

## Run

Start the server
1. from root of the repo: `build.bat`
2. navigate to server
3. `npm run start:prod`
4. If not running start mongodb on default port

Run tests
In this folder, run: `npx cypress open` or `npm run cypress:open`

**Warning** The e2e tests will run seed against the database and may fully reset the database