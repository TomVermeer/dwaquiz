import {MASTER_URL} from "../../../constants";

describe('Start quiznight', () => {

    it('navigates to team applications page and has a quizpin', () => {
        cy.visit(MASTER_URL);
        cy.contains('Start quiznight').click();

        cy.url().should('include', '/teams');
        cy.get('.progress h3')
            .should('be.visible')
            .invoke('text')
            .should('match', /[0-9]{6,}/i);
    });
});