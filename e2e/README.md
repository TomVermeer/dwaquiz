# Simple e2e tests with cypress.io

## Run

Start the server
1. from root of the repo: `start.cmd`
2. If not running start mongodb on default port

Run tests
In this folder, run: `npx cypress open` or `npm run cypress:open`

**Warning** The e2e tests will run seed against the database and may fully reset the database


## Notes

Tests are not fully isolated, when one tests fails tests after that one may fail as well.
However tests should be designed that test files cannot iterfere with each other