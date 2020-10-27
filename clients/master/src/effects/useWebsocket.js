import {useEffect} from 'react';
import {startWebsocket} from "../websocketHandlers";

export const useWebsocket = (quizPin, roundNumber, questionNumber) => {
    useEffect(() => {
        startWebsocket(quizPin, roundNumber, questionNumber);
    }, [quizPin, roundNumber, questionNumber]);
};