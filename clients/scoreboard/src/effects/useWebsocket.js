import {useEffect} from 'react';
import {startWebsocket} from "../websocketHandlers";
import {useHistory} from 'react-router-dom';

export const useWebsocket = (quizPin, roundNumber, questionNumber) => {
    const history = useHistory();
    useEffect(() => {
        if (history && quizPin) {
            startWebsocket(history, quizPin, roundNumber, questionNumber);
        }
    }, [history, quizPin, roundNumber, questionNumber]);
};