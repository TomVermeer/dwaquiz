const HttpErrors = Object.freeze({
    QUIZ_PIN_NOT_FOUND: quizPin => {
        return {
            statusCode: 404,
            messageNL: `De quiz night ${quizPin} kan niet worden gevonden.`
        }
    }
});

module.exports = HttpErrors;