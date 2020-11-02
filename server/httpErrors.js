const HttpErrors = Object.freeze({
    QUIZ_PIN_NOT_FOUND: quizPin => {
        return {
            statusCode: 404,
            messageNL: `De quiz night ${quizPin} kan niet worden gevonden.`
        }
    },
    QUESTION_CLOSED: {
        statusCode: 400,
        messageNL: 'De vraag is al afgesloten, het antwoord is niet geaccepteerd.'
    },
    INVALID_NUMBER_OF_CATEGORIES: {
        statusCode: 400,
        messageNL: 'Om een ronde te starten moet je precies 3 categorieën kiezen'
    },
    QUIZ_NIGHT_DOES_NOT_ACCEPT_APPLICATIONS: {
        statusCode: 400,
        messageNL: 'De inschrijfperiode van de quiz night is verlopen'
    }
});

module.exports = HttpErrors;