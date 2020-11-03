import {MASTER_URL} from "../../constants";

describe('Start quiznight application period', () => {

    before(() => {
       cy.seedDb();
    });

    it('navigates to team applications page and has a quizpin', () => {
        cy.visit(MASTER_URL);
        cy.contains('Start quiznight').click();

        cy.url().should('match', /master\/[0-9]{6,}\/teams/i);
        cy.get('.progress h3')
            .should('be.visible')
            .invoke('text')
            .should('match', /[0-9]{6,}/i);
    });
});