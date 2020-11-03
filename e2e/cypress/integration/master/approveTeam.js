import {API_BASE_URL, MASTER_URL} from "../../constants";

describe('approve team', () => {

    before(() => {
        cy.seedDb();
    });

    beforeEach(() => {
        cy.request('POST', `${API_BASE_URL}/quiz-nights`)
            .its('body.quizPin')
            .as('currentQuizPin');

    });

    describe('with quizpin', () => {
        beforeEach(function () {
            cy.visit(`${MASTER_URL}/${this.currentQuizPin}/teams`);
            cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/team-applications`, {teamName: 'Erik'});
        });

        it('should receive team applications', function () {
            cy.contains('Erik');
        });

        describe('with selected team', () => {
            beforeEach(() => {
                cy.get('.space-around .panel:first-child')
                    .contains('Erik')
                    .click();
            });

            it('should highlight selected team', function () {
                cy.get('.space-around .panel:first-child')
                    .contains('Erik')
                    .should('have.class', 'active')
            });

            it('should reject selected team', function () {
                cy.contains('Afwijzen').click();
                cy.get('.space-around .panel:first-child')
                    .invoke('text')
                    .should('not.contain', 'Erik');
            });

            it('should approve selected team', function () {
                cy.contains('Toevoegen').click();

                cy.get('.space-around .panel:first-child')
                    .should('not.contain', 'Erik');

                cy.get('.space-around .panel:last-child')
                    .should('contain', 'Erik');
            });

            it('should require more than one approved team to start a quiz night', function () {
                cy.contains('Toevoegen').click();
                cy.contains('Start quiz night')
                    .should('be.disabled');
            });

            it('should navigate to choose categories after starting a quiz night', function () {
                cy.contains('Toevoegen').click();

                cy.request('POST', `${API_BASE_URL}/quiz-nights/${this.currentQuizPin}/team-applications`, {teamName: 'Tom'});
                cy.contains('Tom').click();
                cy.contains('Toevoegen').click();

                cy.contains('Start quiz night').click();
                cy.url().should('match', /master\/[0-9]{6,}\/1\/categories/i);
            });
        });
    });
});