import {MASTER_URL} from "../../constants";

describe('choose question', function() {
   before(() => {
       cy.seedDb();
       cy.createQuizNight();
       cy.applyAndApproveTeam('Erik');
       cy.applyAndApproveTeam('Tom');
       cy.chooseCategories();
   });

   beforeEach(function() {
       cy.visit(`${MASTER_URL}/${this.currentQuizPin}/1/questions`);
   });

   it('should load 40 questions', () => {
       cy.get('.list-group')
           .children()
           .should('have.length', 40);
   });

    it('should load 40 more questions', () => {
        // Use this to wait for the initial questions to load in
        cy.get('.list-group')
            .children()
            .should('have.length', 40);

        cy.contains('Laad meer vragen')
            .click();
        cy.get('.list-group')
            .children()
            .should('have.length', 80);
    });

    it('should select a question', () => {
        cy.get('.list-group .list-group-item')
            .first()
            .click()
            .should('have.class', 'active');
    });

    it('should not be able to ask a question without selecting one', () => {
        cy.contains('Stel vraag')
            .should('be.disabled');
    });

    it('should ask a question', () => {
        cy.get('.list-group .list-group-item .question-column')
            .first()
            .click()
            .invoke('text')
            .then(text => {
                cy.contains('Stel vraag').click();

                cy.url().should('match', /master\/[0-9]{6,}\/1\/1\/[0-9a-f]{24}\/grade/i);
                cy.get('.question')
                    .should('have.text', text);
            });
    });
});