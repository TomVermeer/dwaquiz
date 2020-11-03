import {MASTER_URL} from "../../constants";

describe('select categories', () => {
    before(() => {
        cy.seedDb();
        cy.createQuizNight();
    });

    describe('with quizpin', () => {
        before(function () {
            cy.applyAndApproveTeam('Erik');
            cy.applyAndApproveTeam('Tom');
        });

        beforeEach(function () {
            cy.visit(`${MASTER_URL}/${this.currentQuizPin}/1/categories`);
        });

        it('should select category', () => {
            cy.get('.panel:first-child .list-group-item')
                .first()
                .click()
                .should('have.class', 'active');
        });

        it('should add a category', () => {
            cy.get('.panel:first-child .list-group-item')
                .first()
                .click()
                .invoke('text').then((text) => {
                cy.contains('Toevoegen').click();
                cy.get('.panel:last-child .list-group-item')
                    .should('contain', text);
            });
        });

        it('should remove a category', () => {
            cy.get('.panel:first-child .list-group-item')
                .first()
                .click()
                .invoke('text').then((text) => {
                cy.contains('Toevoegen').click();
                cy.get('.panel:last-child .list-group-item button')
                    .click();
                cy.get('.panel:last-child .list-group-item')
                    .should('not.exist',);
            });
        });

        it('should require 3 categories', () => {
            cy.get('.panel:first-child .list-group-item')
                .first()
                .click();
            cy.contains('Toevoegen').click();

            cy.get('.panel:first-child .list-group-item')
                .first()
                .click();
            cy.contains('Toevoegen').click();

            cy.contains('Start quiz ronde')
                .should('be.disabled');
        });

        it('should not allow more than 3 categories', () => {
            cy.get('.panel:first-child .list-group-item')
                .first()
                .click();
            cy.contains('Toevoegen').click();

            cy.get('.panel:first-child .list-group-item')
                .first()
                .click();
            cy.contains('Toevoegen').click();

            cy.get('.panel:first-child .list-group-item')
                .first()
                .click();
            cy.contains('Toevoegen')
                .should('not.be.disabled');
            cy.contains('Toevoegen').click();

            cy.contains('Toevoegen')
                .should('be.disabled');
        });

        it('should start a round', () => {
            cy.get('.panel:first-child .list-group-item')
                .first()
                .click();
            cy.contains('Toevoegen').click();

            cy.get('.panel:first-child .list-group-item')
                .first()
                .click();
            cy.contains('Toevoegen').click();

            cy.get('.panel:first-child .list-group-item')
                .first()
                .click();
            cy.contains('Toevoegen').click();

            cy.contains('Start quiz ronde')
                .click();

            cy.url().should('match', /master\/[0-9]{6,}\/1\/questions/i);
            cy.get('.progress p').should('contain', 'Quizronde 1');
        });
    });
});