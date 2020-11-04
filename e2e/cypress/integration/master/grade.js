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
       cy.get('.list-group-item')
           .should('contain', 'Erik')
           .should('contain', 'Nog geen antwoord gegeven');
    });
});