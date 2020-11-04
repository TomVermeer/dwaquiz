import {API_BASE_URL} from "../constants";
import {NUMBER_OF_QUESTIONS_IN_ROUND} from "shared-constants";

Cypress.Commands.add('seedDb', () => {
    cy.exec('cd ../server && npm run seed:clean')
});

Cypress.Commands.add('createQuizNight', () => {
    cy.request('POST', `${API_BASE_URL}/quiz-nights`)
        .its('body.quizPin')
        .as('currentQuizPin');
});

Cypress.Commands.add('applyTeam', function (teamName) {
    cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/team-applications`, {teamName});
});

Cypress.Commands.add('approveTeam', function (teamName) {
    cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/teams`, {teamName});
});

Cypress.Commands.add('applyAndApproveTeam', teamName => {
    cy.applyTeam(teamName);
    cy.approveTeam(teamName);
});

Cypress.Commands.add('chooseCategories', function (categories = ['Algemeen', 'Eten en Drinken', 'Muziek']) {
    cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/rounds`, categories)
        .then(response => {
            this.roundNumber = response.body.roundNumber;
        });
});

Cypress.Commands.add('chooseQuestion', function () {

    cy.request('GET', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/rounds/${this.roundNumber}/suggested-questions?offset=0&limit=1`)
        .then(response => {
            this.questionId = response.body[0]._id;
            cy.request('POST',
                `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/rounds/${this.roundNumber}/questionings`,
                {questionId: this.questionId})
                .then(response => {
                    this.roundNumber = response.body.roundNumber;
                    this.questionNumber = response.body.questionNumber;
                });
        });
});

Cypress.Commands.add('giveAnswer', function (teamName, answer, options = {}) {
    cy.request({
        method: 'PUT',
        url: `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/rounds/${this.roundNumber}/questionings/${this.questionNumber}/answers/${teamName}`,
        body: {answer},
        ...options
    });
});

Cypress.Commands.add('grade', function (gradings) {
    cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/rounds/${this.roundNumber}/questionings/${this.questionNumber}/answers/grades`, gradings);
});

Cypress.Commands.add('playQuestion', function () {
    cy.chooseQuestion();
    cy.giveAnswer('Erik', 'A good answer');
    cy.giveAnswer('Tom', 'A answer');
    cy.grade([
        {
            teamName: 'Erik',
            isCorrect: true
        },
        {
            teamName: 'Tom',
            isCorrect: false
        },
    ], this.roundNumber, this.questionNumber);
});

Cypress.Commands.add('playRound', function() {
    cy.chooseCategories();

    for (let i = 0; i < NUMBER_OF_QUESTIONS_IN_ROUND; i++) {
        cy.playQuestion();
    }
});