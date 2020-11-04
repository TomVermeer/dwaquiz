import {getWebsocket} from "shared/websocket";
import {WebsocketHandlersBuilder} from "shared/WebsocketHandlersBuilder";
import {
    setParticipatingTeams,
    onReceiveAnswers,
} from "./reducers/mainActionCreators";
import {Pages} from "./pages/routerUrls";
import {WsEvents, Roles, NUMBER_OF_QUESTIONS_IN_ROUND} from "shared/constants";
import {setRoundNumber} from "shared/reducers/sharedActionCreators";

const buildHandlers = (quizPin, history, roundNumber, questionNumber) =>
    new WebsocketHandlersBuilder()
        .on(WsEvents.ON_TEAM_APPROVAL)
        .fetch(`quiz-nights/${quizPin}/teams`, setParticipatingTeams)
        .on(WsEvents.ON_QUESTION)
        .doAction((message) => {
            handleOnQuestion(quizPin, roundNumber, history, questionNumber, message)
        })
        .on(WsEvents.ON_ANSWER)
        .fetch(
            `quiz-nights/${quizPin}/rounds/${roundNumber}/questionings/${questionNumber}/answers`,
            onReceiveAnswers
        )
        .on(WsEvents.ON_QUESTION_GRADED)
        .doAction((message) => {
            pushOnQuestionGraded(
                quizPin,
                history,
                message.payload.roundNumber,
                message.payload.questionNumber
            );
        })
        .on(WsEvents.ON_QUIZ_NIGHT_END)
        .doAction(() => history.push(Pages(quizPin).NIGHT_END))
        .build();

const initializationMessage = (quizPin) => {
    return {
        type: WsEvents.INITIALIZE,
        payload: {
            role: Roles.SCOREBOARD,
            quizPin,
        },
    };
};

const pushOnQuestionGraded = (quizPin, history, roundNumber, questionNumber) => {
    if (questionNumber === NUMBER_OF_QUESTIONS_IN_ROUND) {
        history.push(Pages(quizPin, roundNumber).ROUND_END);
    } else {
        history.push(Pages(quizPin, roundNumber, questionNumber).SCORE);
    }
};

const handleOnQuestion = (quizPin, roundNumber, history, questionNumber, message) => {
    if (questionNumber >= NUMBER_OF_QUESTIONS_IN_ROUND) {
        setRoundNumber(roundNumber + 1);
        history.push(Pages(quizPin, message.roundNumber, message.questionNumber).QUESTION);
    } else {
        history.push(Pages(quizPin, message.roundNumber, message.questionNumber).QUESTION);
    }
};

export const startWebsocket = (quizPin, history, roundNumber, questionNumber) =>
    getWebsocket(
        buildHandlers(quizPin, history, roundNumber, questionNumber),
        initializationMessage(Number(quizPin))
    );
