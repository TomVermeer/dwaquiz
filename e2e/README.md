# Simple e2e tests with cypress.io

## Run

Start the server

### Dev

1. from root of the repo: `start.cmd`
2. If not running start mongodb on default port
3. In constants.js change port numbers to use 3000, 3001, 3002 and 3003

### Production like

1. from root of the repo: `build.bat`
2. If not running start mongodb on default port
3. In constants.js change port numbers to use 3000, 3001, 3002 and 3003
4. In server run `npm run start:prod`

#### Run tests
In this folder, run: `npx cypress open` or `npm run cypress:open` to choose which tests to run

**Warning** The e2e tests will run seed against the database and may fully reset the database


## Notes

Tests are not fully isolated, when one tests fails tests after that one may fail as well.
However tests should be designed that test files cannot interfere with each other