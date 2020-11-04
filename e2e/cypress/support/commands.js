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

Cypress.Commands.add('chooseCategories', function(categories = ['Algemeen', 'Eten en Drinken', 'Muziek']) {
    cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/rounds`, categories);
});

Cypress.Commands.add('chooseQuestion', function(roundNumber = 1, questionId) {
    if(questionId === undefined) {
        cy.request('GET', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/rounds/${roundNumber}/suggested-questions?offset=0&limit=1`)
            .then(response => {
                questionId = response.body[0]._id;
                this.questionId = questionId;
                cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/rounds/${roundNumber}/questionings`, {questionId});
            });
    } else {
        cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/rounds/${roundNumber}/questionings`, {questionId});
    }
});