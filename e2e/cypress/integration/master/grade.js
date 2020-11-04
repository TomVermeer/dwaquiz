import {MASTER_URL} from "../../constants";

describe('grade', () => {
    before(() => {
        cy.seedDb();
        cy.createQuizNight();
        cy.applyAndApproveTeam('Erik');
        cy.applyAndApproveTeam('Tom');
        cy.chooseCategories();
        cy.chooseQuestion();
    });

    beforeEach(function () {
        cy.visit(`${MASTER_URL}/${this.currentQuizPin}/1/1/${this.questionId}/grade`);
    });

    it('should show teams have not answered yet', () => {
       cy.get('.list-group .list-group-item:first-child')
           .should('contain', 'Erik')
           .should('contain', 'Nog geen antwoord gegeven');
    });

    it('should update upon receiving an answer', function() {
       cy.giveAnswer('Erik', 'A very good answer');

        cy.get('.list-group .list-group-item:first-child')
            .should('contain', 'Erik')
            .should('contain', 'A very good answer');
    });

    it('should override an answer', function() {
        cy.giveAnswer('Erik', 'Another good answer');

        cy.get('.list-group .list-group-item:first-child')
            .should('contain', 'Erik')
            .should('contain', 'Another good answer');
    });

    it('should not accept answers after closing', function() {
        // wait for page to load
        cy.get('.list-group .list-group-item:first-child')
            .should('contain', 'Erik');

        cy.contains('Sluit vraag')
            .click();

        cy.giveAnswer('Tom', 'An answer', {failOnStatusCode: false});

        cy.get('.list-group .list-group-item:last-child')
            .should('contain', 'Tom')
            .should('contain', 'Nog geen antwoord gegeven');
    });

    it('should grade a question', function () {
        cy.contains('Sluit vraag')
            .click();
       cy.get('.list-group .list-group-item:first-child')
           .click();
       cy.contains('Volgende vraag')
           .click();
       cy.url()
           .should('equal', `${MASTER_URL}/${this.currentQuizPin}/1/questions`);
    });
});