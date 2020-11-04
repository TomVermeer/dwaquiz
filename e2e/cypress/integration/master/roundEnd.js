import {NUMBER_OF_QUESTIONS_IN_ROUND} from "shared-constants";
import {MASTER_URL} from "../../constants";

describe('round end', () => {
    before(function () {
        cy.seedDb();
        cy.createQuizNight();
        cy.applyAndApproveTeam('Erik');
        cy.applyAndApproveTeam('Tom');
        cy.playRound();
    });

    describe('with graded answers', function () {
        beforeEach(function () {
            cy.visit(`${MASTER_URL}/${this.currentQuizPin}/${this.roundNumber}/${this.questionNumber}/${this.questionId}/grade`);
        });

        it('should show it is the last question in the round', () => {
            cy.get('button')
                .should('contain', 'Volgende ronde');

            cy.get('.progress')
                .should('contain', `${NUMBER_OF_QUESTIONS_IN_ROUND}/${NUMBER_OF_QUESTIONS_IN_ROUND}`);
        });

        it('should navigate to choose next round or not', function () {
            cy.get('.list-group .list-group-item:first-child')
                .should('contain', 'Erik');

            cy.contains('Sluit vraag')
                .click();

            cy.contains('Volgende ronde')
                .click();

            cy.url()
                .should('equal', `${MASTER_URL}/${this.currentQuizPin}/1/round-end`);
        });

        describe('choose next round or end quiznight', function() {
           beforeEach(() => {
               cy.get('.list-group .list-group-item:first-child')
                   .should('contain', 'Erik');

               cy.contains('Sluit vraag')
                   .click();

               cy.contains('Volgende ronde')
                   .click();
           });

           it('should navigate to choose categories', function () {
               cy.contains('Volgende ronde')
                   .click();

               cy.url()
                   .should('equal', `${MASTER_URL}/${this.currentQuizPin}/2/categories`);

               cy.get('.progress')
                   .should('contain', `Quizronde 2`);
           });

           it('should navigate to end quiz night', function() {
               cy.contains('Beëindig quiznight')
                   .click();

               cy.url()
                   .should('equal', `${MASTER_URL}/${this.currentQuizPin}/end`);
           });
        });
    });
});