import {API_BASE_URL} from "../constants";

Cypress.Commands.add('seedDb', () => {
    cy.exec('cd ../server && npm run seed:clean')
});

Cypress.Commands.add('createQuizNight', () => {
    cy.request('POST', `${API_BASE_URL}/quiz-nights`)
        .its('body.quizPin')
        .as('currentQuizPin');
});

Cypress.Commands.add('applyTeam', function(teamName) {
    cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/team-applications`, {teamName});
});

Cypress.Commands.add('approveTeam', function(teamName) {
    cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/teams`, {teamName});
});

Cypress.Commands.add('applyAndApproveTeam', teamName => {
   cy.applyTeam(teamName);
   cy.approveTeam(teamName);
});